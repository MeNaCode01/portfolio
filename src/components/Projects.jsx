import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Rakshak",
      subtitle: "Medical Records Management",
      description: "A secure web platform enabling doctors to manage and access patient medical records with data integrity ensured through blockchain-backed storage. Features robust role-based access control.",
      tech: ["React", "Node.js", "MongoDB", "Blockchain"],
      github: "https://github.com/MeNaCode01/rakshak-clone",
    },
    {
      title: "SignalRank",
      subtitle: "Real-Time Intelligence",
      description: "Built during a hackathon to analyze, rank, and visualize signal-based data in real time. Integrated backend APIs with an interactive frontend dashboard for incredibly fast data exploration.",
      tech: ["React", "Node.js", "APIs", "Full Stack"],
      github: "https://github.com/MeNaCode01",
    },
    {
      title: "Object Detection",
      subtitle: "System for IoT",
      description: "Real-time object detection system optimized for fast inference on consumer-grade hardware. Configured confidence-based bounding boxes without relying on external sensors.",
      tech: ["Python", "YOLOv8", "OpenCV"],
      github: "https://github.com/MeNaCode01",
    },
    {
      title: "Stock Screener",
      subtitle: "& Analysis Tool",
      description: "Python-based stock screener fetching historical NSE stock data. Implemented trend filtering using moving averages (50/150/200-day) and automated Excel export of shortlisted stocks.",
      tech: ["Python", "Pandas", "Matplotlib", "Tkinter"],
      github: "https://github.com/MeNaCode01",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold whitespace-nowrap">
              <span className="text-secondary font-mono text-2xl md:text-3xl mr-4">02.</span>
              Featured Projects
            </h2>
            <div className="h-[1px] bg-slate-800 w-full mt-2"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card rounded-3xl p-8 flex flex-col h-full group relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="p-4 bg-slate-800/50 rounded-2xl text-primary group-hover:text-secondary group-hover:bg-secondary/10 transition-colors shadow-inner">
                    <Folder size={32} strokeWidth={1.5} />
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-full transition-all">
                      <FaGithub size={22} />
                    </a>
                  </div>
                </div>
                
                <div className="relative z-10 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-100 mb-1 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <h4 className="text-sm font-mono text-primary mb-4">
                    {project.subtitle}
                  </h4>
                  
                  <p className="text-slate-400 text-base leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-mono text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-md border border-slate-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
