import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CERTIFICATES } from '../constants';
import { 
  ExternalLink, 
  Award, 
  Calendar, 
  ShieldCheck, 
  X, 
  ChevronRight,
  Database,
  Terminal,
  FileCode,
  Settings,
  Cpu,
  Loader2,
  Search,
  Trophy
} from 'lucide-react';

const Certificates: React.FC = () => {
  const [selectedIssuer, setSelectedIssuer] = useState<string | null>(null);
  const [isDecrypting, setIsDecrypting] = useState(false);

  // Group certificates by issuer
  const issuers = useMemo(() => {
    const groups: Record<string, typeof CERTIFICATES> = {};
    CERTIFICATES.forEach(cert => {
      if (!groups[cert.issuer]) groups[cert.issuer] = [];
      groups[cert.issuer].push(cert);
    });
    return Object.entries(groups).map(([name, certs]) => {
      let description = `Technical credentials authorized by ${name}.`;
      if (name === 'Microsoft Learn') {
        description = "Comprehensive mastery of Microsoft ecosystem including Azure Cloud infrastructure, advanced Cybersecurity (MS-500), Power Platform automation, and cutting-edge AI services.";
      } else if (name === 'Celonis') {
        description = "A global leader in Process Mining and Execution Management, providing cutting-edge data science solutions to visualize, optimize, and automate business processes across entire enterprises.";
      } else if (name === 'UiPath') {
        description = "A global leader in enterprise Robotic Process Automation (RPA), providing a comprehensive platform for end-to-end automation, AI center integration, and complex workflow management.";
      } else if (name === 'HackerRank') {
        description = "A leading technology platform that specializes in assessing developers' coding skills through standardized tests, competitive programming, and verified technical skills across diverse domains.";
      } else if (name === 'Great Learning') {
        description = "A global leader in professional learning, empowering professionals with cutting-edge expertise in Data Science, Machine Learning, and Big Data technologies.";
      } else if (name === 'Google') {
        description = "Global innovator in tech and cloud. Mastery in Data Analytics, Python scripting, and Android ecosystem development.";
      } else if (name === 'Autodesk') {
        description = "Global leader in design software. Mastery in CAD, BIM, and Manufacturing automation for Industry 4.0.";
      } else if (name === 'Automation Anywhere') {
        description = "World leader in RPA. Certified in building intelligent, scalable, and resilient bots using Automation 360.";
      } else if (name === 'AWS') {
        description = "The world's most comprehensive cloud platform. Expertise in Cloud architecture, security, and AI streaming media.";
      } else if (name === 'CISCO') {
        description = "Global leader in networking and security. Certified in network architecture, cybersecurity, and IoT application development.";
      } else if (name === 'UC San Diego & HSE') {
        description = "Academic excellence in Computer Science. Specialized in Data Structures, algorithmic efficiency, and theoretical foundations.";
      }
      
      return {
        name,
        certs,
        logo: certs[0].issuerLogo,
        description
      };
    });
  }, []);

  const currentIssuerData = issuers.find(i => i.name === selectedIssuer);

  const handleOpen = (name: string) => {
    setSelectedIssuer(name);
    setIsDecrypting(true);
    setTimeout(() => setIsDecrypting(false), 800);
  };

  return (
    <section id="certificates" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 border border-primary-500/20 rounded-full animate-spin-slow" />
        <div className="bg-grid w-full h-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-primary-500/10 border border-primary-500/30 text-primary-400 font-mono text-xs font-bold mb-6 tracking-widest uppercase">
            <Cpu size={14} className="animate-pulse" />
            Centralized Credentials // Industry Mastery
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white tracking-tighter uppercase italic">
            Professional <span className="text-primary-500">Archives</span>
          </h2>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto rounded-full mb-12" />
        </motion.div>

        {/* Issuer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1500px] mx-auto">
          {issuers.map((issuer, index) => (
            <motion.div
              key={issuer.name}
              layoutId={`issuer-card-${issuer.name}`}
              onClick={() => handleOpen(issuer.name)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-slate-900/60 rounded-3xl border border-slate-800 hover:border-primary-500/50 transition-all duration-500 cursor-pointer overflow-hidden p-6 shadow-2xl backdrop-blur-md"
            >
              <div className="absolute -bottom-10 -left-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Settings size={180} className="animate-spin-slow text-primary-400" />
              </div>

              <div className="flex flex-col items-center text-center relative z-10">
                <div className="relative w-24 h-24 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-primary-500/10 rounded-3xl blur-xl animate-pulse group-hover:bg-primary-500/20" />
                  <div className="relative w-full h-full bg-slate-800/80 rounded-3xl p-4 flex items-center justify-center border border-slate-700 shadow-2xl backdrop-blur-xl">
                    <img 
                      src={issuer.logo} 
                      alt={issuer.name} 
                      className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" 
                      loading="lazy"
                    />
                  </div>
                </div>
                
                <div className="font-mono text-[9px] text-primary-500/60 mb-2 tracking-tighter">
                  VAULT_AUTH: {issuer.name.replace(/\s+|&/g, '_').toUpperCase()}
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {issuer.name}
                </h3>
                
                <p className="text-slate-400 text-[11px] leading-relaxed mb-6 px-2 font-sans italic opacity-80 min-h-[4rem]">
                  {issuer.description}
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-primary-400 font-mono text-[9px] font-bold group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-500 transition-all uppercase tracking-widest shadow-lg">
                  Access Records ({issuer.certs.length})
                  <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-slate-700 group-hover:border-primary-500 transition-colors" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-slate-700 group-hover:border-primary-500 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {selectedIssuer && currentIssuerData && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIssuer(null)}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl"
            />
            
            <motion.div
              layoutId={`issuer-card-${selectedIssuer}`}
              className="w-full max-w-5xl max-h-[90vh] bg-slate-900 border border-primary-500/30 shadow-[0_0_80px_-10px_rgba(14,165,233,0.4)] relative z-10 flex flex-col overflow-hidden rounded-[2.5rem]"
            >
              <div className="p-8 md:p-12 border-b border-slate-800 flex flex-col md:flex-row items-center gap-10 bg-slate-800/40 relative">
                <div className="w-24 h-24 bg-slate-800 rounded-2xl p-4 shadow-2xl shrink-0 flex items-center justify-center border border-slate-700">
                  <img src={currentIssuerData.logo} alt={selectedIssuer} className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2 font-mono text-primary-500 text-xs">
                    <Terminal size={14} />
                    STREAM_ACCESS: {selectedIssuer.replace(/\s+|&/g, '_').toUpperCase()}_MASTER_LIST
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3 uppercase tracking-tighter">
                    {selectedIssuer} <span className="text-primary-500">Vault</span>
                  </h2>
                  <p className="text-slate-400 text-sm max-w-2xl font-mono leading-relaxed">{currentIssuerData.description}</p>
                </div>
                <button
                  onClick={() => setSelectedIssuer(null)}
                  className="absolute top-6 right-6 p-3 bg-slate-900/50 hover:bg-primary-500 text-slate-400 hover:text-white rounded-xl border border-slate-800 transition-all z-20"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-8 custom-scrollbar relative bg-slate-900/80">
                <AnimatePresence>
                  {isDecrypting ? (
                    <motion.div 
                      key="loader"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 z-50"
                    >
                      <Loader2 className="w-12 h-12 text-primary-500 animate-spin mb-4" />
                      <div className="font-mono text-primary-500 text-sm animate-pulse">EXTRACTING_RECORDS...</div>
                    </motion.div>
                  ) : (
                    <div className="grid lg:grid-cols-2 gap-6">
                      {currentIssuerData.certs.map((cert, idx) => (
                        <motion.div
                          key={cert.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className="group/item bg-slate-800/30 p-6 rounded-3xl border border-slate-800 hover:border-primary-500/40 transition-all flex flex-col gap-6"
                        >
                          <div className="flex items-start justify-between">
                            <div className="p-4 bg-slate-950 rounded-2xl text-primary-400 border border-slate-800 shadow-inner group-hover/item:text-white group-hover/item:bg-primary-500 transition-all duration-500">
                              {cert.icon ? <cert.icon size={24} /> : <Award size={24} />}
                            </div>
                            <div className="text-right">
                              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800">
                                <Calendar size={12} className="text-primary-500" />
                                {cert.date}
                              </div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-display font-bold text-white text-lg mb-3 leading-tight group-hover/item:text-primary-400 transition-colors">
                              {cert.title}
                            </h4>
                            <p className="text-slate-400 text-xs mb-6 italic line-clamp-3">"{cert.description}"</p>
                          </div>
                          <div className="flex flex-wrap items-center justify-between pt-6 border-t border-slate-800 gap-4">
                            <span className="text-[9px] font-mono font-bold text-primary-400/80 bg-primary-500/10 px-3 py-1 rounded-md uppercase border border-primary-500/20">{cert.category}</span>
                            <motion.a
                              href={cert.link}
                              target="_blank"
                              rel="noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-3 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-mono text-xs font-bold transition-all shadow-xl group/btn"
                            >
                              <FileCode size={16} /> VIEW_RECORD
                              <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </motion.a>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </AnimatePresence>
              </div>

              <div className="p-6 bg-slate-950/90 border-t border-slate-800 text-center relative overflow-hidden">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono text-slate-500 font-bold uppercase tracking-[0.2em]">
                  <ShieldCheck size={14} className="text-primary-500" />
                  AUTHENTICATED_ENDPOINT: PORTFOLIO_V3_MASTER
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;