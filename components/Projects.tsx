import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, RESUME_DATA } from '../constants';
import { ExternalLink, Github, Filter, X, CheckCircle, ArrowRight, Code } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [activeTag, setActiveTag] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Calculate unique tags and sort by frequency
  const filterTags = useMemo(() => {
    const tagCounts: Record<string, number> = {};
    PROJECTS.forEach(project => {
      project.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });

    // Sort tags by frequency (desc) then alphabetical
    const sortedTags = Object.keys(tagCounts).sort((a, b) => {
      const diff = tagCounts[b] - tagCounts[a];
      if (diff !== 0) return diff;
      return a.localeCompare(b);
    });

    return ['All', ...sortedTags];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeTag === 'All') return PROJECTS;
    return PROJECTS.filter(project => project.tags.includes(activeTag));
  }, [activeTag]);

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

        {/* Filter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeTag === tag
                    ? 'bg-primary-600 text-white border-primary-500 shadow-lg shadow-primary-900/50 scale-105'
                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700 hover:text-white hover:border-slate-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-primary-500/50 transition-all hover:shadow-2xl hover:shadow-primary-500/10 flex flex-col cursor-pointer"
                >
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-primary-500/10 rounded-xl text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                        {Icon && <Icon size={24} />}
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-primary-400 font-medium flex items-center gap-1">
                        Learn more <ArrowRight size={14} />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 3).map(tag => (
                        <span 
                          key={tag} 
                          className={`text-xs px-2 py-1 rounded border transition-colors ${
                            activeTag === tag 
                              ? 'bg-primary-900/50 text-primary-300 border-primary-700' 
                              : 'bg-slate-900 text-slate-300 border-slate-700'
                          }`}
                        >
                          #{tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded border bg-slate-900 text-slate-500 border-slate-700">
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
        
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-slate-500"
          >
            <Filter size={48} className="mx-auto mb-4 opacity-20" />
            <p className="text-lg">No projects found with the selected tag.</p>
            <button 
              onClick={() => setActiveTag('All')}
              className="mt-4 text-primary-400 hover:text-primary-300 font-medium hover:underline"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-primary-600/20 rounded-2xl text-primary-400">
                    {selectedProject.icon && <selectedProject.icon size={32} />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white">{selectedProject.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{selectedProject.description}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Detailed Description */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">About the Project</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {selectedProject.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-400 text-sm">
                            <CheckCircle size={16} className="text-primary-500 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies Used */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                       <Code size={18} className="text-primary-400" />
                       Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="text-xs px-3 py-1.5 bg-slate-800 text-primary-300 rounded-md border border-slate-700 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-4">
                     <a 
                      href={selectedProject.githubUrl || RESUME_DATA.contact.github}
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 min-w-[140px] py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 rounded-xl font-medium transition-all flex items-center justify-center gap-2 group"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                    {/* Placeholder for live demo if added in future */}
                    <button 
                      className="flex-1 min-w-[140px] py-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-500/25"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;