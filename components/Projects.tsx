import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, RESUME_DATA } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400">A showcase of my recent work in AI, IoT, and Web Development</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-primary-500/50 transition-all hover:shadow-2xl hover:shadow-primary-500/10"
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-primary-500/10 rounded-xl text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                      {Icon && <Icon size={24} />}
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a 
                        href={project.githubUrl || RESUME_DATA.contact.github}
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer" 
                        title="View Code"
                      >
                        <Github size={18} />
                      </a>
                      <button className="p-2 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white" title="Live Demo">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-slate-900 text-slate-300 rounded border border-slate-700">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;