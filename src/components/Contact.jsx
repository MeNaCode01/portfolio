import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative flex items-center justify-center min-h-[70vh]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[150px] -z-10 mix-blend-screen" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          className="glass-card rounded-3xl p-12 md:p-20 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
          
          <h2 className="text-primary font-mono tracking-wider mb-6 text-sm md:text-base uppercase">
            03. What's Next?
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white tracking-tight">
            Get In Touch
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:manavcharia10@gmail.com"
              className="px-10 py-5 rounded-full bg-slate-100 text-slate-900 font-bold flex items-center gap-3 hover:bg-white transition-colors w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <Mail size={22} /> Say Hello
            </motion.a>
            
            <div className="flex gap-6">
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/MeNaCode01"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-full bg-slate-800/50 border border-slate-700 hover:border-slate-400 hover:bg-slate-700 transition-all text-slate-300 hover:text-white"
              >
                <FaGithub size={26} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="tel:636-346-5643"
                className="p-5 rounded-full bg-slate-800/50 border border-slate-700 hover:border-slate-400 hover:bg-slate-700 transition-all text-slate-300 hover:text-white"
              >
                <Phone size={26} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
