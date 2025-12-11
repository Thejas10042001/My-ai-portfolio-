import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, RESUME_DATA } from '../constants';
import { Github, X, CheckCircle2, ChevronRight, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const selectedProject = PROJECTS.find(p => p.id === selectedId);

  // Extract all unique tags for filtering
  const allTags = Array.from(new Set(PROJECTS.flatMap(p => p.tags)));
  // Sort tags by frequency (optional, simple alpha sort here)
  allTags.sort();
  const filters = ['All', ...allTags.slice(0, 8)]; // Limit to top tags to keep UI clean

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="py-24 bg-slate-900/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400">A showcase of my recent work in AI, IoT, and Web Development</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f, index) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                filter === f
                  ? 'bg-primary-600 text-white border-primary-500 shadow-lg shadow-primary-500/25'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-600 hover:text-slate-200'
              }`}
            >
              {f}
            </motion.button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => {
              const Icon = project.icon || Code;
              return (
                <motion.div
                  key={project.id}
                  layoutId={`card-${project.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setSelectedId(project.id)}
                  className="group relative bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-primary-500/50 transition-all hover:shadow-xl hover:shadow-primary-500/10 cursor-pointer flex flex-col h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-slate-900 rounded-xl text-primary-400 border border-slate-700 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} />
                    </div>
                    <div className="p-2 text-slate-600 group-hover:text-primary-400 transition-colors">
                      <ChevronRight size={20} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
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
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
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
                className="absolute top-6 right-6 p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full border border-slate-700 transition-colors z-30"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto p-8 sm:p-10 custom-scrollbar">
                {/* Modal Header */}
                <div className="border-b border-slate-800 pb-8 mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-primary-500/10 rounded-2xl text-primary-400 border border-primary-500/20">
                      {selectedProject.icon ? <selectedProject.icon size={32} /> : <Code size={32} />}
                    </div>
                    <div>
                      <motion.h2 
                        className="text-3xl sm:text-4xl font-display font-bold text-white mb-2"
                      >
                        {selectedProject.title}
                      </motion.h2>
                      <div className="flex flex-wrap gap-2">
                         {selectedProject.tags.map(tag => (
                          <span key={tag} className="text-xs font-medium px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {selectedProject.githubUrl && (
                    <a 
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 hover:bg-slate-200 rounded-full text-sm font-bold transition-colors"
                    >
                      <Github size={18} /> View Source Code
                    </a>
                  )}
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">
                        Project Overview
                      </h3>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        {selectedProject.longDescription || selectedProject.description}
                      </p>
                    </div>

                    {selectedProject.features && (
                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">
                          Key Features
                        </h3>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {selectedProject.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-400 bg-slate-800/30 p-3 rounded-xl border border-slate-800">
                              <CheckCircle2 className="text-primary-500 shrink-0 mt-0.5" size={18} />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="space-y-8">
                    <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
                      <h4 className="text-white font-bold mb-2">Interested in this?</h4>
                      <p className="text-slate-400 text-sm mb-4">
                        I'd love to walk you through the details of this project.
                      </p>
                      <a 
                        href={`mailto:${RESUME_DATA.contact.email}?subject=Question about ${selectedProject.title}`}
                        className="block w-full text-center py-2.5 bg-primary-600 hover:bg-primary-500 text-white rounded-xl transition-colors text-sm font-medium"
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