import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Services from './components/Services';
import Team from './components/Team';
import Masterclass from './components/Masterclass';
import Contact from './components/Contact';
import Background3D from './components/Background3D';
import './styles/animations.css';

function App() {
  return (
    <div className="relative">
      <Background3D />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative z-10"
        >
          <Navbar />
          <Hero />
          <Mission />
          <Services />
          <Team />
          <Masterclass />
          <Contact />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;