
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Github, Linkedin, MapPin, MessageCircle, 
  Instagram, Twitter, FileText, Eye, Activity, 
  Globe, Heart, Zap
} from 'lucide-react';
import { RESUME_DATA } from '../constants';

const EngagementHub: React.FC = () => {
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [activeNodes, setActiveNodes] = useState(0);

  useEffect(() => {
    const baseViews = 15740;
    const localViews = parseInt(localStorage.getItem('thejas_vault_views') || '0');
    const isNewSession = !sessionStorage.getItem('session_active');
    const updatedLocalViews = isNewSession ? localViews + 1 : localViews;
    
    if (isNewSession) {
      sessionStorage.setItem('session_active', 'true');
      localStorage.setItem('thejas_vault_views', updatedLocalViews.toString());
    }
    
    setViews(baseViews + updatedLocalViews);

    const baseLikes = 842;
    const localLikes = parseInt(localStorage.getItem('thejas_vault_likes') || '0');
    setLikes(baseLikes + localLikes);
    setHasLiked(localStorage.getItem('has_endorsed') === 'true');

    const interval = setInterval(() => {
      setActiveNodes(Math.floor(Math.random() * 7) + 4);
    }, 4000);
    setActiveNodes(Math.floor(Math.random() * 7) + 4);

    return () => clearInterval(interval);
  }, []);

  const handleLike = () => {
    if (hasLiked) return;
    const newLocalLikes = parseInt(localStorage.getItem('thejas_vault_likes') || '0') + 1;
    localStorage.setItem('thejas_vault_likes', newLocalLikes.toString());
    localStorage.setItem('has_endorsed', 'true');
    setLikes(prev => prev + 1);
    setHasLiked(true);
  };

  return (
    <div className="flex flex-col items-center md:items-end gap-3">
      <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
        {/* Like Button */}
        <motion.button
          onClick={handleLike}
          whileHover={!hasLiked ? { scale: 1.05 } : {}}
          whileTap={!hasLiked ? { scale: 0.95 } : {}}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all shadow-sm ${
            hasLiked 
              ? 'bg-pink-500/10 border-pink-500/30 text-pink-500' 
              : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-pink-500/50 hover:text-pink-400'
          }`}
        >
          <Heart size={14} fill={hasLiked ? "currentColor" : "none"} />
          <span className="text-xs font-semibold">
            {likes.toLocaleString()} Likes
          </span>
        </motion.button>

        {/* View & Live Stats */}
        <div className="flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700 backdrop-blur-sm">
          <div className="flex items-center gap-1.5 border-r border-slate-700 pr-3">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
              {activeNodes} Online
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Eye size={14} className="text-primary-400" />
            <span className="text-[10px] font-medium text-white tracking-wide">
              {views.toLocaleString()} Views
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContactProps {
  openResume?: () => void;
}

const Contact: React.FC<ContactProps> = ({ openResume }) => {
  const socialLinks = [
    { icon: MessageCircle, href: `https://wa.me/${RESUME_DATA.contact.phone}`, show: true },
    { icon: Mail, href: `mailto:${RESUME_DATA.contact.email}`, show: true },
    { icon: Github, href: RESUME_DATA.contact.github, show: true },
    { icon: Linkedin, href: RESUME_DATA.contact.linkedin, show: true },
    { icon: Instagram, href: RESUME_DATA.contact.instagram, show: !!RESUME_DATA.contact.instagram },
    { icon: Twitter, href: RESUME_DATA.contact.x, show: !!RESUME_DATA.contact.x }
  ];

  return (
    <footer id="contact" className="py-24 bg-slate-900/50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
            <p className="mt-4 text-slate-400">Let's build something amazing together.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Connect with me</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.filter(link => link.show).map((link, index) => (
                  <motion.a 
                    key={index}
                    href={link.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-slate-800 rounded-lg text-slate-400 border border-slate-700 hover:border-primary-500 hover:text-primary-400 transition-all"
                  >
                    <link.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-bold text-white mb-4 italic">{RESUME_DATA.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{RESUME_DATA.role}</p>
              
              <motion.button 
                onClick={openResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-medium transition-all shadow-lg"
              >
                <FileText size={18} />
                Generate Resume PDF
              </motion.button>
              
              <div className="mt-8 w-full border-t border-slate-700 pt-6">
                <EngagementHub />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800 text-sm text-slate-500">
            <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Thejas Sreenivasu. All rights reserved.</p>
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-primary-500" />
                  <span>Bangalore, India</span>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Available for work</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
