import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase, Zap, Star, Target, Trophy, Swords, MapPin, Cpu, Terminal, ShieldCheck } from 'lucide-react';

const ExperienceCard: React.FC<{ exp: typeof EXPERIENCE[0], index: number }> = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative h-full"
    >
      <div className="bg-slate-900/60 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 group-hover:border-primary-500 group-hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.3)] transition-all duration-300 relative overflow-hidden h-full flex flex-col">
        
        {/* Dynamic Quest Badge - Appears on Hover */}
        <motion.div 
          initial={{ opacity: 0, x: 20, rotate: 45 }}
          whileHover={{ opacity: 1, x: 0, rotate: 0 }}
          className="absolute top-4 right-4 z-30 text-primary-400 pointer-events-none"
        >
          <div className="flex flex-col items-center">
            <ShieldCheck size={28} className="drop-shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
            <span className="text-[8px] font-mono font-bold mt-1 bg-primary-500 text-white px-1.5 rounded">COMPLETED</span>
          </div>
        </motion.div>

        {/* RPG Quest ID Badge */}
        <div className="absolute top-0 right-0 p-3 bg-primary-500/10 rounded-bl-3xl border-l border-b border-primary-500/20 group-hover:bg-primary-500/20 transition-colors">
          <span className="text-[10px] font-mono font-bold text-primary-400 tracking-tighter uppercase">QUEST_ID // 00{index + 1}</span>
        </div>

        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-3 border border-slate-700 overflow-hidden shadow-lg group-hover:rotate-3 transition-transform">
              <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-yellow-500 text-slate-900 p-1 rounded-lg shadow-lg">
              <Star size={12} fill="currentColor" />
            </div>
          </div>
          
          <div className="flex-1 pr-10">
            <h3 className="text-xl font-display font-bold text-white leading-tight group-hover:text-primary-400 transition-colors">
              {exp.role}
            </h3>
            <div className="flex items-center gap-2 text-primary-500 font-mono text-xs uppercase tracking-widest mt-1">
              <Briefcase size={12} /> {exp.company}
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex flex-wrap gap-3 text-[10px] font-mono">
            <div className="flex items-center gap-1.5 bg-slate-950 px-2 py-1 rounded border border-slate-800 text-slate-400 group-hover:border-primary-500/30 transition-colors">
              <Target size={12} className="text-primary-500" /> {exp.period}
            </div>
            <div className="flex items-center gap-1.5 bg-slate-950 px-2 py-1 rounded border border-slate-800 text-slate-400 group-hover:border-primary-500/30 transition-colors">
              <MapPin size={12} className="text-primary-500" /> {exp.location}
            </div>
            <div className="flex items-center gap-1.5 bg-primary-500/10 px-2 py-1 rounded border border-primary-500/20 text-primary-400">
              <Zap size={12} /> {exp.type}
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed font-sans italic border-l-2 border-primary-500/20 pl-3 group-hover:text-slate-300 transition-colors">
            {exp.description}
          </p>

          {/* Achievement Points */}
          {exp.points && exp.points.length > 0 && (
            <div className="pt-4 border-t border-slate-800">
              <div className="flex items-center gap-1.5 text-[9px] font-mono text-primary-500/80 uppercase tracking-widest font-bold mb-3">
                <Swords size={12} /> MISSION_OBJECTIVES
              </div>
              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-[11px] text-slate-400 flex items-start gap-2 group-hover:text-slate-300 transition-colors">
                    <div className="w-1 h-1 bg-primary-500 rounded-full mt-1.5 shrink-0 group-hover:shadow-[0_0_8px_rgba(14,165,233,1)] transition-all" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stats Section */}
          {exp.stats && exp.stats.length > 0 && (
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800">
              {exp.stats.map((stat, i) => (
                <div key={i} className="text-center p-2 bg-slate-950 rounded-xl border border-slate-800 group-hover:border-primary-500/20 transition-colors">
                  <div className="text-sm font-bold text-white group-hover:text-primary-400 transition-colors">{stat.value}</div>
                  <div className="text-[8px] font-mono text-primary-500 uppercase tracking-tighter">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* XP Progression Bar */}
        <div className="mt-6 pt-4 border-t border-slate-800/50">
          <div className="flex justify-between text-[8px] font-mono text-slate-500 mb-1 font-bold">
            <span className="group-hover:text-primary-500 transition-colors">LEVEL_UP_PROGRESS</span>
            <span className="flex items-center gap-1"><Cpu size={8} /> RANK: S-TIER</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${98 - index * 3}%` }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-primary-600 via-purple-500 to-primary-400 shadow-[0_0_15px_rgba(14,165,233,0.6)]" 
            />
          </div>
        </div>

        {/* Scanline Effect on Hover */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-b from-transparent via-primary-500 to-transparent h-20 w-full animate-scanline" />
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      {/* Visual background details */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-primary-500/10 border border-primary-500/30 text-primary-400 font-mono text-xs font-bold mb-6 tracking-widest uppercase shadow-[0_0_20px_rgba(14,165,233,0.1)]">
            <Trophy size={14} className="text-yellow-500 animate-bounce" />
            CAREER ACHIEVEMENTS UNLOCKED
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase italic tracking-tighter">
            Mission <span className="text-primary-500">History</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {EXPERIENCE.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>

        {/* Bottom decorative terminal text */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em]">
            <Terminal size={12} />
            SYSTEM_STATUS: ALL_OBJECTIVES_ACTIVE
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;