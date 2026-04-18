import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] -z-10 mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-secondary/10 rounded-full blur-[120px] -z-10 mix-blend-screen" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center sm:text-left flex flex-col items-center sm:items-start">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-wide mb-6">
              Welcome to my portfolio
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-4 leading-tight">
            Hi, I'm <br className="hidden sm:block" />
            <span className="text-gradient">Manav Aggarwal.</span>
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-400 mb-8 leading-tight">
            I build intelligent web applications.
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed">
            I'm a Full Stack Developer currently pursuing my B.Tech at SRM Institute of Science and Technology. I specialize in building exceptional, secure, and highly interactive digital experiences.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-medium flex items-center gap-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all w-full sm:w-auto justify-center"
            >
              Explore My Work <ArrowRight size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/MeNaCode01"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 transition-colors flex items-center gap-3 w-full sm:w-auto justify-center text-slate-300 hover:text-white"
            >
              <FaGithub size={22} /> View GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
