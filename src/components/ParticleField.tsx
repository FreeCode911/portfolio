import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
  /** 0 = normal, 1 = highlighted by mouse proximity */
  glow: number;
}

function isMobile() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent);
}

function isLowEnd() {
  if (typeof navigator === 'undefined') return false;
  const cores = navigator.hardwareConcurrency || 2;
  const memory = (navigator as any).deviceMemory || 4;
  return cores <= 4 || memory <= 4;
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const dimensionsRef = useRef({ w: 0, h: 0 });
  const lastFrameRef = useRef(0);

  const getParticleCount = useCallback((w: number, h: number) => {
    const area = w * h;
    if (isMobile()) return Math.min(Math.floor(area / 25000), 40);
    if (isLowEnd()) return Math.min(Math.floor(area / 18000), 60);
    return Math.min(Math.floor(area / 12000), 100);
  }, []);

  const initParticles = useCallback(
    (w: number, h: number) => {
      const count = getParticleCount(w, h);
      const particles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          size: Math.random() * 1.6 + 0.4,
          opacity: Math.random() * 0.35 + 0.08,
          hue: Math.random() > 0.65 ? 160 : Math.random() > 0.35 ? 260 : 45,
          glow: 0,
        });
      }
      particlesRef.current = particles;
    },
    [getParticleCount]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    // Hint: prefer rendering performance
    ctx.imageSmoothingEnabled = false;

    const mobile = isMobile();
    const lowEnd = isLowEnd();
    const CONNECTION_DIST = mobile ? 100 : 130;
    const MOUSE_DIST = mobile ? 0 : 180; // disable mouse on mobile
    const TARGET_FPS = mobile ? 30 : lowEnd ? 45 : 60;
    const FRAME_MS = 1000 / TARGET_FPS;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap DPR at 2
      const w = window.innerWidth;
      const h = document.documentElement.scrollHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dimensionsRef.current = { w, h };

      if (particlesRef.current.length === 0) {
        initParticles(w, h);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY + window.scrollY };
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });
    if (!mobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    const animate = (timestamp: number) => {
      animationRef.current = requestAnimationFrame(animate);

      // Throttle to target FPS
      if (timestamp - lastFrameRef.current < FRAME_MS) return;
      lastFrameRef.current = timestamp;

      const { w, h } = dimensionsRef.current;
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      ctx.clearRect(0, 0, w, h);

      const pLen = particles.length;

      // Update positions
      for (let i = 0; i < pLen; i++) {
        const p = particles[i];

        // Mouse interaction (desktop only)
        if (MOUSE_DIST > 0) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mDist = mdx * mdx + mdy * mdy; // skip sqrt for comparison
          if (mDist < MOUSE_DIST * MOUSE_DIST && mDist > 0) {
            const dist = Math.sqrt(mDist);
            const force = (1 - dist / MOUSE_DIST) * 0.6;
            p.vx += (mdx / dist) * force;
            p.vy += (mdy / dist) * force;
            p.glow = Math.min(p.glow + 0.1, 1);
          } else {
            p.glow *= 0.95;
          }
        }

        // Damping
        p.vx *= 0.985;
        p.vy *= 0.985;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges (no allocation)
        if (p.x < -10) p.x = w + 10;
        else if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        else if (p.y > h + 10) p.y = -10;
      }

      // Draw connections (batch by line width)
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      for (let i = 0; i < pLen; i++) {
        const p = particles[i];
        for (let j = i + 1; j < pLen; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const distSq = dx * dx + dy * dy;
          const maxDist = CONNECTION_DIST * CONNECTION_DIST;
          if (distSq < maxDist) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / CONNECTION_DIST) * 0.1;
            const hue = (p.hue + q.hue) >> 1; // integer average
            ctx.strokeStyle = `hsla(${hue},60%,65%,${alpha})`;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
          }
        }
      }
      ctx.stroke();

      // Draw mouse connections (desktop only)
      if (MOUSE_DIST > 0 && mouse.x > 0) {
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        for (let i = 0; i < pLen; i++) {
          const p = particles[i];
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < MOUSE_DIST * MOUSE_DIST) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / MOUSE_DIST) * 0.15;
            ctx.strokeStyle = `hsla(160,80%,65%,${alpha})`;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
          }
        }
        ctx.stroke();
      }

      // Draw particles (batch fills by hue)
      for (let i = 0; i < pLen; i++) {
        const p = particles[i];
        const finalOpacity = p.opacity + p.glow * 0.3;
        const finalSize = p.size + p.glow * 0.8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, finalSize, 0, 6.2832);
        ctx.fillStyle = `hsla(${p.hue},70%,70%,${finalOpacity})`;
        ctx.fill();
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    // Re-measure on body height change
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationRef.current);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', resize);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
