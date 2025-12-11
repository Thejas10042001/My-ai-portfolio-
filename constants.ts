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
  Image,
  Globe
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
    id: "infinite-wik",
    title: "Infinite Wik",
    description: "An infinite scrolling knowledge explorer that allows seamless navigation through wiki-style content.",
    tags: ["Web", "API Integration", "React", "Infinite Scroll"],
    icon: Globe,
    githubUrl: "https://github.com/Thejas10042001/Infinite-Wik",
    longDescription: "A web application designed to provide an endless stream of knowledge. Users can search and browse through wiki articles with an infinite scroll interface, making information discovery seamless and engaging.",
    features: ["Infinite scrolling", "Wiki API integration", "Responsive design", "Search functionality"]
  },
  {
    id: "video-analysis",
    title: "Video Analysis",
    description: "A comprehensive video processing tool using computer vision to analyze and extract insights from video content.",
    tags: ["Computer Vision", "AI", "Python", "Video"],
    icon: Video,
    githubUrl: "https://github.com/Thejas10042001/Video-Analysis-",
    longDescription: "An advanced video analysis system capable of processing video streams for various applications such as object tracking, motion detection, and automated event recognition using deep learning models.",
    features: ["Real-time video processing", "Object detection", "Motion tracking", "Automated reporting"]
  },
  {
    id: "video-learning",
    title: "Video to Learning App",
    description: "Transforms educational videos into structured learning materials using AI to generate notes and summaries.",
    tags: ["AI", "Education", "Video Processing"],
    icon: Video,
    githubUrl: "https://github.com/Thejas10042001/Video-to-Learning-App",
    longDescription: "An intelligent educational tool that processes video content to extract key information, generating comprehensive study notes, summaries, and potentially quizzes to enhance the learning experience from video lectures.",
    features: ["Automated video transcription", "Key point extraction", "Study note generation", "Interactive learning interface"]
  },
  {
    id: "human-safety",
    title: "Human Safety Precautions",
    description: "An AI-based system designed to monitor and enforce safety protocols by detecting safety gear violations and potential hazards in real-time using computer vision.",
    tags: ["AI", "Computer Vision", "Safety", "Python"],
    icon: ShieldCheck,
    githubUrl: "https://github.com/Thejas10042001/Human-Safety-Precautions-",
    longDescription: "A computer vision system that enhances workplace safety by automatically detecting if workers are wearing required safety gear (helmets, vests) and identifying potential hazards in real-time.",
    features: ["Real-time object detection", "PPE violation alerts", "Hazard identification", "Automated reporting"]
  },
  {
    id: "cnn-visualization",
    title: "CNN Visualization",
    description: "A deep learning visualization tool that illustrates the internal layers and feature maps of Convolutional Neural Networks.",
    tags: ["Deep Learning", "CNN", "Visualization", "Python"],
    icon: Brain,
    githubUrl: "https://github.com/Thejas10042001/CNN-VISUALTION",
    longDescription: "An educational tool designed to demystify Convolutional Neural Networks by visualizing how different layers process images, showing feature maps and activation patterns.",
    features: ["Layer-wise visualization", "Feature map extraction", "Interactive model exploration", "Educational insights"]
  },
  {
    id: "image-to-code",
    title: "Image to Code",
    description: "An innovative tool that converts images into executable code, bridging the gap between design and implementation using AI.",
    tags: ["AI", "Computer Vision", "Code Generation"],
    icon: Image,
    githubUrl: "https://github.com/Thejas10042001/Image-to-code",
    longDescription: "Uses generative AI to analyze design images (UI mockups) and automatically generate the corresponding HTML/CSS or React code, accelerating the frontend development process.",
    features: ["Image analysis", "Automated code generation", "Syntax highlighting", "Downloadable source code"]
  },
  {
    id: "neurolens-guardian",
    title: "NeuroLens Meeting Guardian",
    description: "An advanced AI monitoring and security system for virtual meetings, ensuring a safe and compliant collaboration environment.",
    tags: ["AI", "Security", "Monitoring"],
    icon: ShieldCheck,
    githubUrl: "https://github.com/Thejas10042001/NeuroLens-Meeting-Guardian",
    longDescription: "A security solution for virtual meetings that uses AI to detect unauthorized participants, monitor for compliance breaches, and ensure a secure communication channel.",
    features: ["Participant authentication", "Real-time anomaly detection", "Compliance monitoring", "Secure session management"]
  },
  {
    id: "mca-project",
    title: "MCA Academic Project",
    description: "A major academic project demonstrating advanced proficiency in software engineering and application development within the MCA curriculum.",
    tags: ["MCA", "Academic", "Full Stack"],
    icon: GraduationCap,
    githubUrl: "https://github.com/Thejas10042001/MCA-PROEJCT",
    longDescription: "A capstone project for the MCA degree, showcasing comprehensive full-stack development skills, system architecture design, and problem-solving abilities applied to a significant real-world problem.",
    features: ["Full-stack architecture", "Database design", "Authentication & Security", "Comprehensive documentation"]
  },
  {
    id: "update-meeting",
    title: "Update Meeting",
    description: "A meeting management and scheduling application designed to streamline updates and collaboration.",
    tags: ["Scheduling", "Management", "Web"],
    icon: CalendarClock,
    githubUrl: "https://github.com/Thejas10042001/UPDATE-MEETING",
    longDescription: "A web application designed to optimize the process of scheduling and managing team update meetings, featuring calendar integration and automated notifications.",
    features: ["Calendar integration", "Automated scheduling", "Meeting agenda management", "Team notifications"]
  },
  {
    id: "neuro-lens",
    title: "Neuro Lens Meeting",
    description: "AI-powered meeting analysis and insights platform designed to enhance virtual collaboration through real-time processing.",
    tags: ["AI", "Meeting", "Analytics"],
    icon: Video,
    githubUrl: "https://github.com/Thejas10042001/Neuro-lens-meeting",
    longDescription: "Analyzes virtual meeting dynamics using AI to provide insights on participant engagement, sentiment analysis, and discussion topics to improve meeting productivity.",
    features: ["Sentiment analysis", "Engagement tracking", "Topic modeling", "Post-meeting analytics"]
  },
  {
    id: "movie-analytics",
    title: "Movie Analytics Dashboard",
    description: "Interactive data analytics dashboard for visualizing movie trends, box office collections, and genre popularity using advanced data visualization techniques.",
    tags: ["Data Analytics", "Visualization", "Dashboard"],
    icon: Film,
    githubUrl: "https://github.com/Thejas10042001/Movie-Analytics-Dashboard",
    longDescription: "A comprehensive dashboard allowing users to explore movie datasets, visualize trends over time, and analyze the success factors of films based on genre, budget, and ratings.",
    features: ["Interactive charts", "Data filtering", "Trend analysis", "Responsive design"]
  },
  {
    id: "job-market",
    title: "Job Market Analyzers",
    description: "A comprehensive data analysis tool designed to scrape and analyze job market trends, identifying key skill demands and salary distributions using Python.",
    tags: ["Data Analytics", "Python", "Visualization", "Scraping"],
    icon: Briefcase,
    githubUrl: "https://github.com/Thejas10042001/JOB-MARKET-ANALYZERS-",
    longDescription: "Automates the collection of job posting data to analyze market trends, helping job seekers understand high-demand skills and salary benchmarks in the tech industry.",
    features: ["Web scraping", "Keyword extraction", "Salary distribution analysis", "Skill demand visualization"]
  },
  {
    id: "ai-portfolio",
    title: "AI Portfolio Website",
    description: "A dynamic, animated personal portfolio website featuring an interactive AI chatbot powered by Google Gemini (Google AI Studio) that answers questions about my resume and experience.",
    tags: ["Google AI Studio", "Gemini API", "React", "Framer Motion"],
    icon: Sparkles,
    longDescription: "This very website! It showcases my skills and projects while integrating a generative AI chatbot trained on my resume data to answer visitor queries in real-time.",
    features: ["Gemini API Integration", "Framer Motion Animations", "Responsive Tailwind Design", "Interactive Chatbot"]
  },
  {
    id: "mood2food",
    title: "Mood2Food",
    description: "AI-powered mood sensing & food recommendation web/app with emotion detection, recipe API integration, restaurant finder, and dummy food ordering system.",
    tags: ["AI", "React", "Emotion Detection", "Food API"],
    icon: Brain,
    longDescription: "An innovative app that detects user emotion through facial analysis or text input and recommends food recipes or restaurants that match their current mood.",
    features: ["Emotion detection", "Recipe API integration", "Restaurant finder", "Food ordering simulation"]
  },
  {
    id: "stockgenius",
    title: "StockGenius AI",
    description: "Real-time Indian stock market analytics platform with 17+ AI-driven modules for trading strategies, predictions, and portfolio insights.",
    tags: ["FinTech", "AI/ML", "Analytics", "Real-time"],
    icon: TrendingUp,
    longDescription: "A robust financial analytics platform tailored for the Indian stock market, utilizing machine learning algorithms to predict trends and offer actionable trading strategies.",
    features: ["17+ AI modules", "Real-time data streaming", "Portfolio management", "Predictive analytics"]
  },
  {
    id: "phishguard",
    title: "PhishGuard AI",
    description: "AI-based phishing website & email detector for real-time cybersecurity protection.",
    tags: ["Cybersecurity", "AI", "Web Safety"],
    icon: ShieldCheck,
    longDescription: "A cybersecurity tool that uses machine learning models to analyze URLs and email content in real-time to detect and block potential phishing attempts.",
    features: ["Real-time URL scanning", "Email content analysis", "Threat reporting", "Browser extension integration"]
  },
  {
    id: "ecotrack",
    title: "EcoTrack",
    description: "Carbon footprint tracker with AI-powered lifestyle recommendations.",
    tags: ["Sustainability", "AI", "Tracker"],
    icon: Leaf,
    longDescription: "Helps users calculate their carbon footprint based on daily activities and provides AI-driven recommendations to reduce their environmental impact.",
    features: ["Carbon footprint calculator", "Personalized recommendations", "Progress tracking", "Sustainability goals"]
  },
  {
    id: "iot-weather",
    title: "IoT Weather Monitor",
    description: "ESP8266-based IoT solution for real-time climate data collection.",
    tags: ["IoT", "Hardware", "Real-time Data"],
    icon: CloudRain,
    longDescription: "A hardware-software integrated system using ESP8266 microcontrollers to collect temperature and humidity data, displaying it on a real-time web dashboard.",
    features: ["Sensor data collection", "Real-time dashboard", "Historical data logging", "Alert system"]
  },
  {
    id: "voting-system",
    title: "Online Voting System",
    description: "Aadhar OTP simulation with secure login and voting mechanism.",
    tags: ["Security", "Web", "Simulation"],
    icon: Vote,
    longDescription: "A secure electronic voting system prototype that simulates Aadhar-based authentication using OTPs to ensure voter identity and vote integrity.",
    features: ["OTP authentication simulation", "Secure vote recording", "Admin panel", "Voter verification"]
  },
  {
    id: "timetable",
    title: "Timetable Generator",
    description: "Automated scheduling system with breaks and subject allocations.",
    tags: ["Automation", "Algorithms", "Productivity"],
    icon: CalendarClock,
    longDescription: "An algorithmic solution for educational institutions to automatically generate conflict-free class timetables considering teacher availability and room constraints.",
    features: ["Conflict detection", "Automated scheduling", "Teacher allocation", "Export options"]
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
1. Video Analysis: AI video processing tool (https://github.com/Thejas10042001/Video-Analysis-).
2. Video to Learning App: AI tool transforming videos to learning materials (https://github.com/Thejas10042001/Video-to-Learning-App).
3. Human Safety Precautions: AI safety monitoring (https://github.com/Thejas10042001/Human-Safety-Precautions-).
4. CNN Visualization: Deep learning visualization tool (https://github.com/Thejas10042001/CNN-VISUALTION).
5. Image to Code: AI tool converting images to code (https://github.com/Thejas10042001/Image-to-code).
6. NeuroLens Meeting Guardian: AI meeting security/monitoring (https://github.com/Thejas10042001/NeuroLens-Meeting-Guardian).
7. MCA Academic Project: Comprehensive academic project (https://github.com/Thejas10042001/MCA-PROEJCT).
8. Update Meeting: Meeting management and scheduling application (https://github.com/Thejas10042001/UPDATE-MEETING).
9. Neuro Lens Meeting: AI-powered meeting analysis (https://github.com/Thejas10042001/Neuro-lens-meeting).
10. Movie Analytics Dashboard: Interactive dashboard for movie trends (https://github.com/Thejas10042001/Movie-Analytics-Dashboard).
11. Job Market Analyzers: Data analysis tool for job market trends (https://github.com/Thejas10042001/JOB-MARKET-ANALYZERS-).
12. AI Portfolio Website: Dynamic site with Gemini-powered chatbot (Google AI Studio).
13. Mood2Food: AI mood sensing & food recommendation.
14. StockGenius AI: Real-time stock analytics with 17+ AI modules.
15. PhishGuard AI: AI phishing detector.
16. EcoTrack: Carbon footprint tracker.
17. IoT Weather Monitoring: ESP8266 based.
18. Online Voting System: Secure voting with OTP simulation.
19. Teacher Timetable Generator: Automated scheduling.
20. Infinite Wik: Infinite scrolling knowledge explorer (https://github.com/Thejas10042001/Infinite-Wik).

Soft Skills: Problem-Solving, Creativity, Adaptability, Collaboration, Leadership, Time Management.
Interests: AI/ML, Cybersecurity, Cloud Security, Full-Stack, FinTech, IoT, Data Analytics.

Answer questions about Thejas based ONLY on this information. If asked about something not in the resume, politely say you don't have that information.
`;