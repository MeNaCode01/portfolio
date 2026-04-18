import { motion } from 'framer-motion';
import { BookOpen, Code, Trophy } from 'lucide-react';

const About = () => {
  const skills = [
    { category: "Programming", items: ["Python", "JavaScript", "C", "MATLAB", "SQL"] },
    { category: "Frameworks & Tools", items: ["React", "Node.js", "MongoDB", "Express", "PyTorch", "Scikit-learn", "Git/GitHub", "AI Agents"] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold whitespace-nowrap">
              <span className="text-primary font-mono text-2xl md:text-3xl mr-4">01.</span>
              About Me
            </h2>
            <div className="h-[1px] bg-slate-800 w-full mt-2"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -top-10 -right-10 p-4 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
                  <BookOpen size={200} />
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                <div className="relative pl-6 border-l border-slate-700/50">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                  <h4 className="text-lg font-bold text-slate-100">SRM Institute of Science and Technology</h4>
                  <p className="text-primary font-medium mb-3">Bachelor of Technology in Computer Science and Engineering</p>
                  <p className="text-slate-500 font-mono text-sm mb-4">Sep 2023 – Jan 2026</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    <span className="text-slate-300 font-semibold">Relevant Coursework:</span> Advanced Calculus, OOD, Data Structures and Algorithms, DBMS, Artificial Intelligence, Machine Learning, Full Stack Web Dev, Cloud Computing.
                  </p>
                </div>
              </div>

              <div className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -top-10 -right-10 p-4 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
                  <Trophy size={200} />
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent/10 rounded-xl text-accent">
                    <Trophy size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Extracurricular</h3>
                </div>
                <ul className="space-y-4 text-slate-400">
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">▹</span>
                    <span>Participated in GTM Hackathon and MedAIthon (SRM) as a core development team member.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">▹</span>
                    <span>Led hackathon teams, coordinating task distribution and technical decision-making.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">▹</span>
                    <span>Awarded Silver Medal in Chess at college-level competition.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="glass-card p-8 rounded-3xl h-full relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -top-10 -right-10 p-4 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
                  <Code size={200} />
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                    <Code size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
                </div>
                
                <div className="space-y-10">
                  {skills.map((skillGroup, index) => (
                    <div key={skillGroup.category}>
                      <h4 className="text-slate-300 text-lg font-semibold mb-4">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-3">
                        {skillGroup.items.map((skill, i) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i + (index * 0.2), type: "spring" }}
                            whileHover={{ y: -3, scale: 1.05 }}
                            className="px-4 py-2 bg-slate-800/80 border border-slate-700/50 rounded-lg text-sm text-secondary hover:border-secondary hover:bg-secondary/10 transition-colors shadow-sm cursor-default"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
