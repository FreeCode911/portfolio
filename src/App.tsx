import { ParticleField } from '@/components/ParticleField';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Repos } from '@/components/Repos';
import { Links } from '@/components/Links';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden noise-overlay">
      <ParticleField />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Repos />
          <Links />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
