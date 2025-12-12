import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION, RESUME_DATA } from '../constants';
import { GraduationCap, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <motion.span
                  whileInView={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Briefcase className="text-primary-400" />
                </motion.span>
                Professional Profile
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {RESUME_DATA.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {['Problem Solving', 'Leadership', 'Creativity', 'Adaptability'].map((skill, i) => (
                  <motion.span 
                    key={skill} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <motion.span
                  whileInView={{ y: [0, -5, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <GraduationCap className="text-primary-400" />
                </motion.span>
                Education
              </h3>
              <div className="space-y-8">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-slate-700">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-900 border-2 border-primary-500 rounded-full" />
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <p className="text-primary-400 text-sm mb-1">{edu.status}</p>
                    <p className="text-slate-500 text-sm">{edu.institution}</p>
                    {edu.details && (
                      <ul className="mt-2 list-disc list-inside text-slate-400 text-sm">
                        {edu.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;