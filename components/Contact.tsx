import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, MessageCircle, Instagram, Twitter, Download } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Contact: React.FC = () => {
  const socialLinks = [
    { 
      icon: MessageCircle, 
      href: `https://wa.me/${RESUME_DATA.contact.phone}`, 
      show: true 
    },
    { 
      icon: Mail, 
      href: `mailto:${RESUME_DATA.contact.email}`, 
      show: true 
    },
    { 
      icon: Github, 
      href: RESUME_DATA.contact.github, 
      show: true 
    },
    { 
      icon: Linkedin, 
      href: RESUME_DATA.contact.linkedin, 
      show: true 
    },
    { 
      icon: Instagram, 
      href: RESUME_DATA.contact.instagram, 
      show: !!RESUME_DATA.contact.instagram 
    },
    { 
      icon: Twitter, 
      href: RESUME_DATA.contact.x, 
      show: !!RESUME_DATA.contact.x 
    }
  ];

  return (
    <footer id="contact" className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="text-center md:text-left space-y-4">
            <div>
              <h2 className="text-2xl font-bold font-display text-white mb-2">Let's Work Together</h2>
              <p className="text-slate-400">Open to new opportunities and collaborations.</p>
            </div>
            
            <motion.a 
              href="https://drive.google.com/file/d/1F1Rw-MUSSky1zAOf1Cxdm8X5lDttd6A_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-full border border-slate-700 hover:border-slate-600 transition-colors group cursor-pointer"
            >
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              <span>Download Resume</span>
            </motion.a>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.filter(link => link.show).map((link, index) => (
              <motion.a 
                key={index}
                href={link.href} 
                target="_blank" 
                rel="noreferrer" 
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-white hover:bg-primary-600 border border-slate-700 hover:border-primary-500 transition-colors shadow-sm"
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Thejas Sreenivasu. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
             <MapPin size={14} />
             <span>Bangalore, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;