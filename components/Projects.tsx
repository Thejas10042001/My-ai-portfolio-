import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, RESUME_DATA } from '../constants';
import { ExternalLink, Github, X, CheckCircle2, ChevronRight } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = PROJECTS.find(p => p.id === selectedId);

  // Function to generate a stable but unique image URL based on project title
  const getProjectImage = (title: string) => {
    const encodedTitle = encodeURIComponent(title + " technology abstract dark UI futuristic");
    return `https://image.pollinations.ai/prompt/${encodedTitle}?width=800&height=400&nologo=true&seed=${title.length}`;
  };

  return (
    <section id="projects" className="py-24 bg-slate-900/50 relative">
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
                layoutId={`card-${project.id}`}
                onClick={() => setSelectedId(project.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-primary-500/50 transition-all hover:shadow-2xl hover:shadow-primary-500/10 cursor-pointer flex flex-col h-full"
              >
                {/* Card Header Image */}
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                  <img 
                    src={getProjectImage(project.title)} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-6 z-20 flex items-center gap-2">
                    <div className="p-2 bg-slate-900/80 backdrop-blur-md rounded-lg text-primary-400 border border-slate-700">
                      {Icon && <Icon size={20} />}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-slate-900 text-slate-300 rounded border border-slate-700">
                        #{tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-slate-900 text-slate-500 rounded border border-slate-700">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center text-primary-400 text-sm font-medium mt-auto group/btn">
                    View Details 
                    <ChevronRight size={16} className="ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="w-full max-w-4xl max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 relative z-10 flex flex-col"
            >
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md z-30 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Modal Banner */}
              <div className="h-48 sm:h-64 relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10" />
                <img 
                  src={getProjectImage(selectedProject.title)} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 sm:left-10 z-20">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-4xl font-display font-bold text-white mb-2"
                  >
                    {selectedProject.title}
                  </motion.h2>
                  <div className="flex gap-3">
                    {selectedProject.githubUrl && (
                      <a 
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-sm font-medium text-white transition-colors border border-white/10"
                      >
                        <Github size={16} /> View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto p-6 sm:p-10 custom-scrollbar">
                <div className="grid md:grid-cols-3 gap-10">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        Project Overview
                      </h3>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        {selectedProject.longDescription || selectedProject.description}
                      </p>
                    </div>

                    {selectedProject.features && (
                      <div>
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                          Key Features
                        </h3>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {selectedProject.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-400 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                              <CheckCircle2 className="text-primary-500 shrink-0 mt-0.5" size={18} />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="px-3 py-1.5 bg-slate-800 text-primary-300 text-sm font-medium rounded-lg border border-slate-700 shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-5 bg-gradient-to-br from-primary-900/20 to-purple-900/20 rounded-2xl border border-primary-500/20">
                      <h4 className="text-white font-bold mb-2">Interested in this?</h4>
                      <p className="text-slate-400 text-sm mb-4">
                        I'd love to walk you through the details of this project.
                      </p>
                      <a 
                        href={`mailto:${RESUME_DATA.contact.email}?subject=Question about ${selectedProject.title}`}
                        className="block w-full text-center py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors text-sm font-medium"
                      >
                        Contact Me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;