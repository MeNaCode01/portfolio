import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-6 text-center text-slate-500 text-sm">
        <p>Designed & Built by Manav Aggarwal</p>
        <p className="mt-1">Powered by React, Tailwind CSS, and Framer Motion</p>
      </footer>
    </div>
  );
}

export default App;
