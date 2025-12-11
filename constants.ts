import { Project, Skill, Education } from './types';
import { 
  Brain, 
  TrendingUp, 
  ShieldCheck, 
  Leaf, 
  CloudRain, 
  Vote, 
  CalendarClock,
  Sparkles,
  Smartphone,
  Code,
  Briefcase,
  Film,
  Video,
  GraduationCap,
  Image
} from 'lucide-react';

export const RESUME_DATA = {
  name: "Thejas Sreenivasu",
  role: "Innovative MCA Student | AI & Full-Stack Developer",
  summary: "Innovative MCA student with expertise in AI, full-stack web development, and cybersecurity solutions. Skilled in designing and implementing real-world projects that integrate machine learning, IoT, cloud computing, and data security. Passionate about creating scalable, user-friendly applications that bridge academic research with industry needs.",
  contact: {
    email: "thejas.sreenivasu@example.com", // Placeholder
    github: "https://github.com/Thejas10042001", 
    linkedin: "https://linkedin.com/in/thejas", // Placeholder
  }
};

export const EDUCATION: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "RVIT, JP Nagar (VTU)",
    status: "Ongoing",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "KLE Society Degree College, Nagarabhavi, Bangalore (Bangalore University)",
    status: "Completed",
    details: ["Projects: IoT-based Weather Monitoring System, Cloud Computing Secure File Handling"]
  }
];

export const SKILLS: Skill[] = [
  // Programming
  { name: "Python", category: "Language", level: 90 },
  { name: "JavaScript (ES6+)", category: "Language", level: 85 },
  { name: "Java", category: "Language", level: 80 },
  { name: "PHP", category: "Language", level: 75 },
  { name: "C / C++", category: "Language", level: 75 },
  
  // Web Development
  { name: "Full Stack (Java, MERN)", category: "Web", level: 85 },
  { name: "React / Tailwind CSS", category: "Web", level: 85 },
  { name: "Node.js / Express.js", category: "Web", level: 80 },
  { name: "HTML5 / CSS3 / Bootstrap", category: "Web", level: 90 },
  { name: "Cloud Computing", category: "Web", level: 75 },
  
  // AI/ML
  { name: "Data Analytics", category: "AI/ML", level: 80 },
  { name: "TensorFlow.js / Scikit-learn", category: "AI/ML", level: 75 },
  { name: "XGBoost", category: "AI/ML", level: 70 },
  { name: "OpenAI / Gemini APIs", category: "AI/ML", level: 85 },
  
  // Database
  { name: "MongoDB", category: "Database", level: 80 },
  { name: "SQL / RDBMS", category: "Database", level: 80 },
  { name: "Firebase", category: "Database", level: 75 },
  
  // Mobile & Tools
  { name: "React Native", category: "Mobile", level: 70 },
  { name: "Android Studio", category: "Mobile", level: 65 },
  { name: "GitHub / Netlify / Render", category: "Tool", level: 80 },
  { name: "IoT (ESP8266)", category: "Tool", level: 75 },
  { name: "Data Security", category: "Tool", level: 75 },
  { name: "API Integration", category: "Tool", level: 85 },
];

export const PROJECTS: Project[] = [
  {
    id: "cnn-visualization",
    title: "CNN Visualization",
    description: "A deep learning visualization tool that illustrates the internal layers and feature maps of Convolutional Neural Networks.",
    tags: ["Deep Learning", "CNN", "Visualization", "Python"],
    icon: Brain,
    githubUrl: "https://github.com/Thejas10042001/CNN-VISUALTION"
  },
  {
    id: "image-to-code",
    title: "Image to Code",
    description: "An innovative tool that converts images into executable code, bridging the gap between design and implementation using AI.",
    tags: ["AI", "Computer Vision", "Code Generation"],
    icon: Image,
    githubUrl: "https://github.com/Thejas10042001/Image-to-code"
  },
  {
    id: "neurolens-guardian",
    title: "NeuroLens Meeting Guardian",
    description: "An advanced AI monitoring and security system for virtual meetings, ensuring a safe and compliant collaboration environment.",
    tags: ["AI", "Security", "Monitoring"],
    icon: ShieldCheck,
    githubUrl: "https://github.com/Thejas10042001/NeuroLens-Meeting-Guardian"
  },
  {
    id: "mca-project",
    title: "MCA Academic Project",
    description: "A major academic project demonstrating advanced proficiency in software engineering and application development within the MCA curriculum.",
    tags: ["MCA", "Academic", "Full Stack"],
    icon: GraduationCap,
    githubUrl: "https://github.com/Thejas10042001/MCA-PROEJCT"
  },
  {
    id: "update-meeting",
    title: "Update Meeting",
    description: "A meeting management and scheduling application designed to streamline updates and collaboration.",
    tags: ["Scheduling", "Management", "Web"],
    icon: CalendarClock,
    githubUrl: "https://github.com/Thejas10042001/UPDATE-MEETING"
  },
  {
    id: "neuro-lens",
    title: "Neuro Lens Meeting",
    description: "AI-powered meeting analysis and insights platform designed to enhance virtual collaboration through real-time processing.",
    tags: ["AI", "Meeting", "Analytics"],
    icon: Video,
    githubUrl: "https://github.com/Thejas10042001/Neuro-lens-meeting"
  },
  {
    id: "movie-analytics",
    title: "Movie Analytics Dashboard",
    description: "Interactive data analytics dashboard for visualizing movie trends, box office collections, and genre popularity using advanced data visualization techniques.",
    tags: ["Data Analytics", "Visualization", "Dashboard"],
    icon: Film,
    githubUrl: "https://github.com/Thejas10042001/Movie-Analytics-Dashboard"
  },
  {
    id: "job-market",
    title: "Job Market Analyzers",
    description: "A comprehensive data analysis tool designed to scrape and analyze job market trends, identifying key skill demands and salary distributions using Python.",
    tags: ["Data Analytics", "Python", "Visualization", "Scraping"],
    icon: Briefcase,
    githubUrl: "https://github.com/Thejas10042001/JOB-MARKET-ANALYZERS-"
  },
  {
    id: "ai-portfolio",
    title: "AI Portfolio Website",
    description: "A dynamic, animated personal portfolio website featuring an interactive AI chatbot powered by Google Gemini (Google AI Studio) that answers questions about my resume and experience.",
    tags: ["Google AI Studio", "Gemini API", "React", "Framer Motion"],
    icon: Sparkles
  },
  {
    id: "mood2food",
    title: "Mood2Food",
    description: "AI-powered mood sensing & food recommendation web/app with emotion detection, recipe API integration, restaurant finder, and dummy food ordering system.",
    tags: ["AI", "React", "Emotion Detection", "Food API"],
    icon: Brain
  },
  {
    id: "stockgenius",
    title: "StockGenius AI",
    description: "Real-time Indian stock market analytics platform with 17+ AI-driven modules for trading strategies, predictions, and portfolio insights.",
    tags: ["FinTech", "AI/ML", "Analytics", "Real-time"],
    icon: TrendingUp
  },
  {
    id: "phishguard",
    title: "PhishGuard AI",
    description: "AI-based phishing website & email detector for real-time cybersecurity protection.",
    tags: ["Cybersecurity", "AI", "Web Safety"],
    icon: ShieldCheck
  },
  {
    id: "ecotrack",
    title: "EcoTrack",
    description: "Carbon footprint tracker with AI-powered lifestyle recommendations.",
    tags: ["Sustainability", "AI", "Tracker"],
    icon: Leaf
  },
  {
    id: "iot-weather",
    title: "IoT Weather Monitor",
    description: "ESP8266-based IoT solution for real-time climate data collection.",
    tags: ["IoT", "Hardware", "Real-time Data"],
    icon: CloudRain
  },
  {
    id: "voting-system",
    title: "Online Voting System",
    description: "Aadhar OTP simulation with secure login and voting mechanism.",
    tags: ["Security", "Web", "Simulation"],
    icon: Vote
  },
  {
    id: "timetable",
    title: "Timetable Generator",
    description: "Automated scheduling system with breaks and subject allocations.",
    tags: ["Automation", "Algorithms", "Productivity"],
    icon: CalendarClock
  }
];

export const SYSTEM_PROMPT = `
You are an AI assistant for Thejas Sreenivasu's portfolio. You are helpful, professional, and concise.
Here is Thejas's Resume content:

Name: Thejas Sreenivasu
Profile: Innovative MCA student with expertise in AI, full-stack web development, and cybersecurity solutions.
Github Profile: https://github.com/Thejas10042001

Education: 
1. MCA (Ongoing) from RVIT, JP Nagar (VTU).
2. BCA from KLE Society Degree College, Nagarabhavi, Bangalore (Bangalore University) - Completed. Projects: IoT Weather Monitoring, Cloud Secure File Handling.

Skills: 
- Languages: C, C++, Java, Python, JavaScript, PHP.
- Web: HTML5, CSS3, Tailwind CSS, Bootstrap, Node.js, Express.js, Full Stack (Java, MERN), Cloud Computing.
- Database: MongoDB, Firebase, SQL, RDBMS.
- AI/ML: TensorFlow.js, scikit-learn, XGBoost, OpenAI APIs, Google Gemini API, Data Analytics.
- Mobile: React Native, Android Studio.
- Tools: GitHub, Netlify, Render, Spoonacular API, OpenStreetMap, IoT (ESP8266), Data Security, API Integration.

Projects:
1. CNN Visualization: Deep learning visualization tool (https://github.com/Thejas10042001/CNN-VISUALTION).
2. Image to Code: AI tool converting images to code (https://github.com/Thejas10042001/Image-to-code).
3. NeuroLens Meeting Guardian: AI meeting security/monitoring (https://github.com/Thejas10042001/NeuroLens-Meeting-Guardian).
4. MCA Academic Project: Comprehensive academic project (https://github.com/Thejas10042001/MCA-PROEJCT).
5. Update Meeting: Meeting management and scheduling application (https://github.com/Thejas10042001/UPDATE-MEETING).
6. Neuro Lens Meeting: AI-powered meeting analysis (https://github.com/Thejas10042001/Neuro-lens-meeting).
7. Movie Analytics Dashboard: Interactive dashboard for movie trends (https://github.com/Thejas10042001/Movie-Analytics-Dashboard).
8. Job Market Analyzers: Data analysis tool for job market trends (https://github.com/Thejas10042001/JOB-MARKET-ANALYZERS-).
9. AI Portfolio Website: Dynamic site with Gemini-powered chatbot (Google AI Studio).
10. Mood2Food: AI mood sensing & food recommendation.
11. StockGenius AI: Real-time stock analytics with 17+ AI modules.
12. PhishGuard AI: AI phishing detector.
13. EcoTrack: Carbon footprint tracker.
14. IoT Weather Monitoring: ESP8266 based.
15. Online Voting System: Secure voting with OTP simulation.
16. Teacher Timetable Generator: Automated scheduling.

Soft Skills: Problem-Solving, Creativity, Adaptability, Collaboration, Leadership, Time Management.
Interests: AI/ML, Cybersecurity, Cloud Security, Full-Stack, FinTech, IoT, Data Analytics.

Answer questions about Thejas based ONLY on this information. If asked about something not in the resume, politely say you don't have that information.
`;