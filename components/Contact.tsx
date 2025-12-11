import React from 'react';
import { Mail, Github, Linkedin, MapPin, MessageCircle, Instagram } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold font-display text-white mb-2">Let's Work Together</h2>
            <p className="text-slate-400">Open to new opportunities and collaborations.</p>
          </div>
          
          <div className="flex gap-4">
            <a href={`https://wa.me/${RESUME_DATA.contact.phone}`} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-white hover:bg-primary-600 transition-all hover:-translate-y-1">
              <MessageCircle size={20} />
            </a>
            <a href={`mailto:${RESUME_DATA.contact.email}`} className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-white hover:bg-primary-600 transition-all hover:-translate-y-1">
              <Mail size={20} />
            </a>
            <a href={RESUME_DATA.contact.github} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-white hover:bg-primary-600 transition-all hover:-translate-y-1">
              <Github size={20} />
            </a>
            <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-white hover:bg-primary-600 transition-all hover:-translate-y-1">
              <Linkedin size={20} />
            </a>
            {RESUME_DATA.contact.instagram && (
              <a href={RESUME_DATA.contact.instagram} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-white hover:bg-primary-600 transition-all hover:-translate-y-1">
                <Instagram size={20} />
              </a>
            )}
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