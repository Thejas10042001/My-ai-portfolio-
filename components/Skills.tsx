import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { 
  Terminal, 
  Globe, 
  Database, 
  Brain, 
  Smartphone, 
  Wrench, 
  Code,
  Cpu
} from 'lucide-react';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Language': return Terminal;
      case 'Web': return Globe;
      case 'Database': return Database;
      case 'AI/ML': return Brain;
      case 'Mobile': return Smartphone;
      case 'Tool': return Wrench;
      default: return Code;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400">Tools and technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => {
            const Icon = getCategoryIcon(category);
            
            return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-primary-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-2 flex items-center gap-2">
                <Icon className="text-primary-400" size={20} />
                {category}
              </h3>
              <div className="space-y-4">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300 font-medium text-sm flex items-center gap-2">
                        {/* Icon representing the skill category next to the skill name */}
                        <Icon size={14} className="text-slate-500" />
                        {skill.name}
                      </span>
                      <span className="text-primary-400 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-gradient-to-r from-primary-600 to-purple-500 h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default Skills;