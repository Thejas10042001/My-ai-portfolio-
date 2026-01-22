
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Mail, Phone, Globe, Linkedin, Github, MapPin } from 'lucide-react';
import { RESUME_DATA, EXPERIENCE, EDUCATION, SKILLS, PROJECTS } from '../constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/90 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col my-8"
          >
            {/* Action Bar - Hidden during print */}
            <div className="p-4 bg-slate-100 border-b border-slate-200 flex justify-between items-center sticky top-0 z-10 print:hidden">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white">
                  <Download size={18} />
                </div>
                <h3 className="font-bold text-slate-800">Professional Resume Generator</h3>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-xl transition-all font-medium text-sm shadow-md shadow-primary-500/20"
                >
                  <Printer size={16} /> Print / Save as PDF
                </button>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Resume Content Area */}
            <div className="bg-white p-8 md:p-12 text-slate-900 overflow-y-auto print:p-0 print:overflow-visible" id="resume-document">
              {/* Header */}
              <header className="border-b-4 border-primary-600 pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-display font-black tracking-tighter uppercase mb-2">
                    {RESUME_DATA.name}
                  </h1>
                  <p className="text-xl text-primary-600 font-bold uppercase tracking-wide">
                    {RESUME_DATA.role}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-primary-600" /> {RESUME_DATA.contact.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-primary-600" /> +{RESUME_DATA.contact.phone}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-primary-600" /> Bangalore, India
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin size={14} className="text-primary-600" /> linkedin.com/in/thejas
                  </div>
                </div>
              </header>

              <div className="grid md:grid-cols-3 gap-10">
                {/* Left Column - Main Info */}
                <div className="md:col-span-2 space-y-10">
                  {/* Summary */}
                  <section>
                    <h2 className="text-lg font-display font-bold uppercase tracking-widest text-primary-600 mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                      Professional Summary
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                      {RESUME_DATA.summary}
                    </p>
                  </section>

                  {/* Experience */}
                  <section>
                    <h2 className="text-lg font-display font-bold uppercase tracking-widest text-primary-600 mb-6 flex items-center gap-2 border-b border-slate-200 pb-2">
                      Experience
                    </h2>
                    <div className="space-y-8">
                      {EXPERIENCE.slice(0, 5).map((exp) => (
                        <div key={exp.id}>
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-bold text-lg text-slate-900">{exp.role}</h3>
                              <p className="text-primary-600 font-bold">{exp.company}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-bold text-slate-800">{exp.period}</p>
                              <p className="text-xs text-slate-500">{exp.location}</p>
                            </div>
                          </div>
                          <p className="text-sm text-slate-600 mb-3 italic">{exp.description}</p>
                          <ul className="space-y-1.5">
                            {exp.points?.map((point, i) => (
                              <li key={i} className="text-sm text-slate-700 flex gap-2">
                                <span className="text-primary-600 font-bold">•</span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Key Projects */}
                  <section className="print:break-before-page">
                    <h2 className="text-lg font-display font-bold uppercase tracking-widest text-primary-600 mb-6 flex items-center gap-2 border-b border-slate-200 pb-2">
                      Key Projects
                    </h2>
                    <div className="grid grid-cols-1 gap-6">
                      {PROJECTS.filter(p => p.githubUrl).slice(0, 4).map((project) => (
                        <div key={project.id} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                          <h3 className="font-bold text-slate-900 mb-1 flex justify-between">
                            {project.title}
                            <span className="text-[10px] font-mono bg-slate-200 px-2 py-0.5 rounded text-slate-600">GITHUB_REF</span>
                          </h3>
                          <p className="text-sm text-slate-600 mb-2">{project.description}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.slice(0, 4).map(tag => (
                              <span key={tag} className="text-[9px] font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded uppercase border border-primary-100">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Right Column - Skills & Education */}
                <div className="space-y-10">
                  {/* Skills Grid */}
                  <section>
                    <h2 className="text-lg font-display font-bold uppercase tracking-widest text-primary-600 mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                      Technical Arsenal
                    </h2>
                    <div className="space-y-4">
                      {['Language', 'Web', 'Database', 'AI/ML', 'Tool'].map(category => (
                        <div key={category}>
                          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{category}</h4>
                          <div className="flex flex-wrap gap-2">
                            {SKILLS.filter(s => s.category === category).map(skill => (
                              <span key={skill.name} className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded border border-slate-200">
                                {skill.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Education */}
                  <section>
                    <h2 className="text-lg font-display font-bold uppercase tracking-widest text-primary-600 mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                      Education
                    </h2>
                    <div className="space-y-6">
                      {EDUCATION.map((edu, i) => (
                        <div key={i} className="relative pl-4 border-l-2 border-primary-500">
                          <h4 className="font-bold text-sm text-slate-900 leading-tight">{edu.degree}</h4>
                          <p className="text-xs text-primary-600 font-bold mb-1">{edu.status}</p>
                          <p className="text-[11px] text-slate-500 font-medium">{edu.institution}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Certifications Highlights */}
                  <section>
                    <h2 className="text-lg font-display font-bold uppercase tracking-widest text-primary-600 mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                      Top Certifications
                    </h2>
                    <div className="space-y-2">
                      {['Microsoft Learn', 'Celonis', 'UiPath', 'Google', 'AWS', 'HackerRank'].map(issuer => (
                        <div key={issuer} className="flex justify-between items-center text-xs font-bold text-slate-700 bg-slate-50 p-2 rounded border border-slate-100">
                          {issuer}
                          <span className="text-primary-600">VERIFIED</span>
                        </div>
                      ))}
                      <p className="text-[10px] text-center text-slate-400 mt-4 italic">
                        + 150 more certifications available on digital archive.
                      </p>
                    </div>
                  </section>
                </div>
              </div>

              {/* Footer */}
              <footer className="mt-12 pt-8 border-t border-slate-200 text-center text-[10px] text-slate-400 uppercase tracking-[0.3em] font-bold">
                Generated via thejassreenivasu.dev // Professional Protocol v3.0
              </footer>
            </div>
          </motion.div>

          {/* Print Styles */}
          <style dangerouslySetInnerHTML={{ __html: `
            @media print {
              @page { size: A4; margin: 15mm; }
              body { background: white !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
              .fixed, .backdrop-blur-md, #chat-widget { display: none !important; }
              .relative.w-full { box-shadow: none !important; margin: 0 !important; max-width: none !important; position: static !important; }
              #resume-document { padding: 0 !important; width: 100% !important; height: auto !important; }
              .print\\:hidden { display: none !important; }
              .print\\:break-before-page { break-before: page; }
            }
          `}} />
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
