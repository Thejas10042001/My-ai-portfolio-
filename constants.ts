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
    email: "thejasssreenivasu@gmail.com", 
    phone: "919179533131",
    github: "https://github.com/Thejas10042001", 
    linkedin: "https://www.linkedin.com/in/thejas-sreenivasu-2677ba1b8", 
    instagram: "https://www.instagram.com/_vinay_so_sreenivas_/",
    avatarUrl: "https://www.bing.com/images/search?view=detailV2&ccid=fSz%2fu%2frZ&id=E5F3DC502922E9B07A8AEE7C47307894A08D05CF&thid=OIP.fSz_u_rZ6u4559ALYO_p3AHaJQ&mediaurl=https%3a%2f%2flookaside.instagram.com%2fseo%2fgoogle_widget%2fcrawler%2f%3fmedia_id%3d3529285837613033141&exph=1800&expw=1440&q=thejas+sreenivasu&FORM=IRPRST&ck=0DBE38134CED9DEE54FB7C39E177EAB6&selectedIndex=0&itb=0"
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
    longDescription: "Addressed the fragmentation of online knowledge discovery by building a unified platform that eliminates pagination friction. Infinite Wik fetches data from Wikipedia APIs dynamically, allowing users to scroll endlessly through related topics. This seamless interface significantly increases user engagement and encourages deeper exploration of complex subjects without interruption.",
    features: [
      "Seamless infinite scrolling for uninterrupted reading",
      "Dynamic data fetching from Wikipedia APIs",
      "Fully responsive design optimized for all devices",
      "Instant search functionality with debouncing"
    ]
  },
  {
    id: "video-analysis",
    title: "Video Analysis",
    description: "A comprehensive video processing tool using computer vision to analyze and extract insights from video content.",
    tags: ["Computer Vision", "AI", "Python", "Video"],
    icon: Video,
    githubUrl: "https://github.com/Thejas10042001/Video-Analysis-",
    longDescription: "Solved the challenge of manual video review in surveillance and content monitoring by creating an automated analysis system. Using advanced computer vision techniques, this tool detects objects, tracks motion, and identifies events in real-time, drastically reducing the time and human effort required to process large volumes of video footage.",
    features: [
      "Real-time video processing using OpenCV",
      "YOLO-based object detection and classification",
      "Advanced motion tracking algorithms",
      "Automated event reporting and logging"
    ]
  },
  {
    id: "video-learning",
    title: "Video to Learning App",
    description: "Transforms educational videos into structured learning materials using AI to generate notes and summaries.",
    tags: ["AI", "Education", "Video Processing"],
    icon: Video,
    githubUrl: "https://github.com/Thejas10042001/Video-to-Learning-App",
    longDescription: "Tackled the issue of passive learning from video lectures by developing an AI-driven tool that converts video content into active study aids. The application automatically transcribes audio, extracts key concepts, and generates summaries and quizzes, empowering students to retain information more effectively and review material efficiently.",
    features: [
      "Automated transcription of video lectures",
      "AI-driven extraction of key concepts and summaries",
      "Generation of structured study notes",
      "Interactive quiz generation for self-assessment"
    ]
  },
  {
    id: "human-safety",
    title: "Human Safety Precautions",
    description: "An AI-based system designed to monitor and enforce safety protocols by detecting safety gear violations and potential hazards in real-time using computer vision.",
    tags: ["AI", "Computer Vision", "Safety", "Python"],
    icon: ShieldCheck,
    githubUrl: "https://github.com/Thejas10042001/Human-Safety-Precautions-",
    longDescription: "Addressed critical workplace safety concerns by deploying a computer vision system that monitors environments 24/7. The system instantly detects if workers are missing Personal Protective Equipment (PPE) like helmets or vests and identifies hazardous zones, providing immediate alerts to prevent accidents before they occur.",
    features: [
      "Real-time detection of PPE violations (helmets, vests)",
      "Instant alerts for hazardous zone entry",
      "Automated logging of safety incidents",
      "High-accuracy computer vision model deployment"
    ]
  },
  {
    id: "cnn-visualization",
    title: "CNN Visualization",
    description: "A deep learning visualization tool that illustrates the internal layers and feature maps of Convolutional Neural Networks.",
    tags: ["Deep Learning", "CNN", "Visualization", "Python"],
    icon: Brain,
    githubUrl: "https://github.com/Thejas10042001/CNN-VISUALTION",
    longDescription: "Demystified the 'black box' nature of Deep Learning models for students and researchers. This tool visually renders the activation maps and filters of Convolutional Neural Networks layer by layer, helping users intuitively understand how the model extracts features from images, making complex AI concepts accessible and transparent.",
    features: [
      "Visualizes internal CNN layers in real-time",
      "Extracts and displays feature activation maps",
      "Interactive exploration of model architecture",
      "Educational tool for understanding Deep Learning"
    ]
  },
  {
    id: "image-to-code",
    title: "Image to Code",
    description: "An innovative tool that converts images into executable code, bridging the gap between design and implementation using AI.",
    tags: ["AI", "Computer Vision", "Code Generation"],
    icon: Image,
    githubUrl: "https://github.com/Thejas10042001/Image-to-code",
    longDescription: "Streamlined the frontend development workflow by automating the conversion of UI mockups into code. By leveraging generative AI models to analyze design images, this tool produces clean, ready-to-use HTML/CSS or React code, significantly reducing the repetitive manual effort required during the design-to-development handoff.",
    features: [
      "Converts UI images to clean HTML/CSS code",
      "Leverages Generative AI for layout analysis",
      "Downloadable source code for immediate use",
      "Syntax highlighting for generated code preview"
    ]
  },
  {
    id: "neurolens-guardian",
    title: "NeuroLens Meeting Guardian",
    description: "An advanced AI monitoring and security system for virtual meetings, ensuring a safe and compliant collaboration environment.",
    tags: ["AI", "Security", "Monitoring"],
    icon: ShieldCheck,
    githubUrl: "https://github.com/Thejas10042001/NeuroLens-Meeting-Guardian",
    longDescription: "Addressed security vulnerabilities in remote collaboration by creating a real-time meeting guardian. This system uses AI to authenticate participants, detect unauthorized access, and monitor compliance with organizational policies during virtual meetings, ensuring sensitive discussions remain secure in a distributed work environment.",
    features: [
      "Biometric participant authentication",
      "Real-time detection of unauthorized persons",
      "Automated compliance monitoring",
      "Secure session management dashboard"
    ]
  },
  {
    id: "mca-project",
    title: "MCA Academic Project",
    description: "A major academic project demonstrating advanced proficiency in software engineering and application development within the MCA curriculum.",
    tags: ["MCA", "Academic", "Full Stack"],
    icon: GraduationCap,
    githubUrl: "https://github.com/Thejas10042001/MCA-PROEJCT",
    longDescription: "A comprehensive capstone project that synthesizes the full spectrum of MCA curriculum knowledge. It involves the end-to-end development of a complex software solution, demonstrating mastery in system architecture, database design, full-stack implementation, and rigorous testing methodologies to solve a significant real-world problem.",
    features: [
      "Implemented robust full-stack architecture",
      "Scalable database design and optimization",
      "Advanced authentication and role-based security",
      "Comprehensive system documentation"
    ]
  },
  {
    id: "update-meeting",
    title: "Update Meeting",
    description: "A meeting management and scheduling application designed to streamline updates and collaboration.",
    tags: ["Scheduling", "Management", "Web"],
    icon: CalendarClock,
    githubUrl: "https://github.com/Thejas10042001/UPDATE-MEETING",
    longDescription: "Solved the inefficiency of manual scheduling and fragmented team communication. This application centralizes meeting management, allowing teams to seamlessly schedule updates, share agendas, and track follow-ups. By integrating calendar features and automated notifications, it reduces administrative overhead and ensures teams stay aligned.",
    features: [
      "Seamless integration with Google Calendar",
      "Automated scheduling based on availability",
      "Centralized agenda management system",
      "Automated email notifications and reminders"
    ]
  },
  {
    id: "neuro-lens",
    title: "Neuro Lens Meeting",
    description: "AI-powered meeting analysis and insights platform designed to enhance virtual collaboration through real-time processing.",
    tags: ["AI", "Meeting", "Analytics"],
    icon: Video,
    githubUrl: "https://github.com/Thejas10042001/Neuro-lens-meeting",
    longDescription: "Improved virtual meeting productivity by providing actionable insights into participant engagement. This platform analyzes audio and visual cues to gauge sentiment and attention levels, helping organizers understand meeting dynamics and making remote collaboration more effective and engaging for all participants.",
    features: [
      "Real-time sentiment analysis of participants",
      "Tracking of engagement and attention levels",
      "Automated topic modeling and summarization",
      "Detailed post-meeting analytics reports"
    ]
  },
  {
    id: "movie-analytics",
    title: "Movie Analytics Dashboard",
    description: "Interactive data analytics dashboard for visualizing movie trends, box office collections, and genre popularity using advanced data visualization techniques.",
    tags: ["Data Analytics", "Visualization", "Dashboard"],
    icon: Film,
    githubUrl: "https://github.com/Thejas10042001/Movie-Analytics-Dashboard",
    longDescription: "Empowered data-driven decision making in the entertainment domain by consolidating vast movie datasets into an interactive dashboard. Users can identify emerging trends, correlate budget with box office success, and analyze genre popularity over time, turning raw data into visual narratives that reveal the mechanics of the film industry.",
    features: [
      "Interactive visualization of box office trends",
      "Advanced filtering by genre, year, and budget",
      "Correlation analysis of budget vs. revenue",
      "Responsive dashboard for data exploration"
    ]
  },
  {
    id: "job-market",
    title: "Job Market Analyzers",
    description: "A comprehensive data analysis tool designed to scrape and analyze job market trends, identifying key skill demands and salary distributions using Python.",
    tags: ["Data Analytics", "Python", "Visualization", "Scraping"],
    icon: Briefcase,
    githubUrl: "https://github.com/Thejas10042001/JOB-MARKET-ANALYZERS-",
    longDescription: "Addressed the information gap for job seekers by automating the analysis of current market demands. By scraping and processing job postings, this tool highlights trending skills, salary ranges, and role requirements, enabling candidates to align their learning paths with industry needs and make informed career decisions.",
    features: [
      "Automated scraping of major job portals",
      "NLP-based extraction of key skills",
      "Visual analysis of salary distributions",
      "Identification of high-demand technologies"
    ]
  },
  {
    id: "ai-portfolio",
    title: "AI Portfolio Website",
    description: "A dynamic, animated personal portfolio website featuring an interactive AI chatbot powered by Google Gemini (Google AI Studio) that answers questions about my resume and experience.",
    tags: ["Google AI Studio", "Gemini API", "React", "Framer Motion"],
    icon: Sparkles,
    longDescription: "Reimagined the traditional static resume by creating an interactive, AI-driven experience. This portfolio integrates the Gemini API to allow recruiters and visitors to 'chat' with my professional profile. It solves the problem of static information delivery by providing instant, context-aware answers about my skills and experience in a modern, engaging format.",
    features: [
      "Integrated Gemini API for AI chat capabilities",
      "Smooth Framer Motion animations and transitions",
      "Fully responsive and modern Tailwind CSS design",
      "Context-aware answers based on resume data"
    ]
  },
  {
    id: "mood2food",
    title: "Mood2Food",
    description: "AI-powered mood sensing & food recommendation web/app with emotion detection, recipe API integration, restaurant finder, and dummy food ordering system.",
    tags: ["AI", "React", "Emotion Detection", "Food API"],
    icon: Brain,
    longDescription: "Connected emotional well-being with nutrition by developing an app that recommends food based on user mood. Using AI for emotion detection, it provides personalized comfort food recipes or restaurant suggestions, solving the 'what to eat' dilemma while catering to the user's emotional state for a holistic lifestyle experience.",
    features: [
      "AI-based detection of user emotions",
      "Integration with external Recipe APIs",
      "Location-based restaurant finder",
      "Simulated food ordering system flow"
    ]
  },
  {
    id: "stockgenius",
    title: "StockGenius AI",
    description: "Real-time Indian stock market analytics platform with 17+ AI-driven modules for trading strategies, predictions, and portfolio insights.",
    tags: ["FinTech", "AI/ML", "Analytics", "Real-time"],
    icon: TrendingUp,
    longDescription: "Democratized access to sophisticated financial analysis for retail investors. This platform integrates over 17 AI models to process real-time market data, predicting trends and offering actionable trading strategies. It empowers users to make data-backed investment decisions in the volatile Indian stock market, reducing reliance on intuition.",
    features: [
      "17+ specialized AI modules for market analysis",
      "Real-time streaming of stock market data",
      "Comprehensive portfolio management tools",
      "Predictive modeling for price trends"
    ]
  },
  {
    id: "phishguard",
    title: "PhishGuard AI",
    description: "AI-based phishing website & email detector for real-time cybersecurity protection.",
    tags: ["Cybersecurity", "AI", "Web Safety"],
    icon: ShieldCheck,
    longDescription: "Combated the rising threat of digital fraud with an AI-powered detection system. PhishGuard analyzes URL patterns and email content in real-time to identify malicious phishing attempts that traditional filters might miss. It acts as a proactive shield, protecting users from identity theft and securing sensitive personal data during browsing.",
    features: [
      "Real-time scanning of malicious URLs",
      "NLP analysis of email content for phishing",
      "Automated threat reporting system",
      "Browser extension for proactive protection"
    ]
  },
  {
    id: "ecotrack",
    title: "EcoTrack",
    description: "Carbon footprint tracker with AI-powered lifestyle recommendations.",
    tags: ["Sustainability", "AI", "Tracker"],
    icon: Leaf,
    longDescription: "Tackled the challenge of individual climate action by making carbon footprint tracking personal and actionable. EcoTrack calculates emissions from daily activities and uses AI to suggest tailored lifestyle changes. It motivates users to adopt sustainable habits by visualizing the direct impact of their choices on the environment.",
    features: [
      "Accurate carbon footprint calculation algorithms",
      "AI-driven personalized sustainability tips",
      "Visual tracking of emission reduction progress",
      "Gamified sustainability goals and badges"
    ]
  },
  {
    id: "iot-weather",
    title: "IoT Weather Monitor",
    description: "ESP8266-based IoT solution for real-time climate data collection.",
    tags: ["IoT", "Hardware", "Real-time Data"],
    icon: CloudRain,
    longDescription: "Solved the need for hyper-local weather data by building a cost-effective IoT monitoring station. Using ESP8266 microcontrollers, this system collects precise temperature and humidity readings and broadcasts them to a web dashboard, proving the viability of scalable, low-cost hardware for environmental monitoring networks.",
    features: [
      "Real-time data collection from ESP8266 sensors",
      "Live web dashboard for climate monitoring",
      "Logging of historical weather patterns",
      "Automated alerts for extreme conditions"
    ]
  },
  {
    id: "voting-system",
    title: "Online Voting System",
    description: "Aadhar OTP simulation with secure login and voting mechanism.",
    tags: ["Security", "Web", "Simulation"],
    icon: Vote,
    longDescription: "Addressed the integrity and accessibility issues of traditional voting methods. This prototype simulates a secure, remote voting process using Aadhar-based OTP authentication. It demonstrates how digital identity verification can ensure one-person-one-vote security while making the democratic process accessible from anywhere.",
    features: [
      "Simulation of secure Aadhar-based OTP login",
      "Tamper-proof vote recording mechanism",
      "Comprehensive admin panel for election management",
      "Robust voter identity verification flow"
    ]
  },
  {
    id: "timetable",
    title: "Timetable Generator",
    description: "Automated scheduling system with breaks and subject allocations.",
    tags: ["Automation", "Algorithms", "Productivity"],
    icon: CalendarClock,
    longDescription: "Eliminated the complex manual labor of academic scheduling. This algorithmic tool generates conflict-free timetables for schools and colleges, accounting for teacher availability, room constraints, and subject requirements. It optimizes resource allocation and saves countless hours of administrative planning time.",
    features: [
      "Algorithmic detection of scheduling conflicts",
      "Automated generation of class timetables",
      "Optimized allocation of teachers and rooms",
      "Export capabilities for generated schedules"
    ]
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