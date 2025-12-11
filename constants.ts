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
    x: "https://x.com/_so_sreenivasu_",
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
You are the AI Portfolio Assistant for Thejas Sreenivasu. Your role is to represent Thejas professionally, answering questions about his skills, projects, education, and experience with enthusiasm and accuracy.

Here is Thejas's complete profile:

--- PERSONAL DETAILS ---
Name: Thejas Sreenivasu
Role: Innovative MCA Student | AI & Full-Stack Developer
Summary: Innovative MCA student with expertise in AI, full-stack web development, and cybersecurity solutions. Skilled in designing and implementing real-world projects that integrate machine learning, IoT, cloud computing, and data security.
Contact Email: thejasssreenivasu@gmail.com
WhatsApp/Phone: +91 9179533131
LinkedIn: https://www.linkedin.com/in/thejas-sreenivasu-2677ba1b8
GitHub: https://github.com/Thejas10042001
Instagram: https://www.instagram.com/_vinay_so_sreenivas_/
X (Twitter): https://x.com/_so_sreenivasu_

--- EDUCATION ---
1. Master of Computer Applications (MCA) - Ongoing
   - Institution: RVIT, JP Nagar (VTU)
2. Bachelor of Computer Applications (BCA) - Completed
   - Institution: KLE Society Degree College, Nagarabhavi, Bangalore (Bangalore University)
   - Key Projects during BCA: IoT-based Weather Monitoring System, Cloud Computing Secure File Handling

--- TECHNICAL SKILLS ---
Languages: Python, JavaScript (ES6+), Java, PHP, C, C++
Web Development: Full Stack (Java, MERN), React, Tailwind CSS, Node.js, Express.js, HTML5, CSS3, Bootstrap, Cloud Computing
AI/ML: OpenAI / Gemini APIs, Data Analytics, TensorFlow.js, Scikit-learn, XGBoost
Database: MongoDB, SQL / RDBMS, Firebase
Mobile: React Native, Android Studio
Tools & Others: GitHub, Netlify, Render, Data Security, API Integration, IoT (ESP8266), Spoonacular API, OpenStreetMap

--- PROJECT PORTFOLIO (Detailed) ---

1. Infinite Wik (https://github.com/Thejas10042001/Infinite-Wik)
   - Description: An infinite scrolling knowledge explorer that eliminates pagination friction.
   - Features: Seamless infinite scrolling, dynamic Wikipedia API fetching, responsive design, instant search.
   - Tags: Web, API Integration, React.

2. Video Analysis (https://github.com/Thejas10042001/Video-Analysis-)
   - Description: Automated video review system using computer vision.
   - Features: Real-time processing with OpenCV, YOLO object detection, motion tracking, event logging.
   - Tags: Computer Vision, AI, Python.

3. Video to Learning App (https://github.com/Thejas10042001/Video-to-Learning-App)
   - Description: Transforms educational videos into structured notes and summaries.
   - Features: Automated transcription, key concept extraction, summary generation, interactive quizzes.
   - Tags: AI, Education, Video Processing.

4. Human Safety Precautions (https://github.com/Thejas10042001/Human-Safety-Precautions-)
   - Description: AI system detecting safety gear violations (PPE) and hazardous zones.
   - Features: Real-time PPE detection (helmets/vests), hazard alerts, incident logging.
   - Tags: AI, Computer Vision, Safety.

5. CNN Visualization (https://github.com/Thejas10042001/CNN-VISUALTION)
   - Description: Educational tool visualizing internal CNN layers and feature maps.
   - Features: Real-time layer visualization, activation map display, model architecture exploration.
   - Tags: Deep Learning, CNN, Python.

6. Image to Code (https://github.com/Thejas10042001/Image-to-code)
   - Description: Converts UI images/mockups into executable HTML/CSS code using AI.
   - Features: Generative AI layout analysis, clean code generation, syntax highlighting.
   - Tags: AI, Computer Vision, Code Generation.

7. NeuroLens Meeting Guardian (https://github.com/Thejas10042001/NeuroLens-Meeting-Guardian)
   - Description: AI security system for virtual meetings.
   - Features: Biometric authentication, unauthorized person detection, compliance monitoring.
   - Tags: AI, Security, Monitoring.

8. MCA Academic Project (https://github.com/Thejas10042001/MCA-PROEJCT)
   - Description: A comprehensive full-stack capstone project demonstrating system architecture mastery.
   - Features: Robust architecture, scalable database, role-based security.
   - Tags: MCA, Academic, Full Stack.

9. Update Meeting (https://github.com/Thejas10042001/UPDATE-MEETING)
   - Description: Meeting management and scheduling application.
   - Features: Google Calendar integration, automated scheduling, agenda management.
   - Tags: Scheduling, Management, Web.

10. Neuro Lens Meeting (https://github.com/Thejas10042001/Neuro-lens-meeting)
    - Description: AI platform analyzing meeting sentiment and engagement.
    - Features: Real-time sentiment analysis, engagement tracking, topic summarization.
    - Tags: AI, Analytics.

11. Movie Analytics Dashboard (https://github.com/Thejas10042001/Movie-Analytics-Dashboard)
    - Description: Data analytics dashboard for movie trends and box office collections.
    - Features: Interactive visualization, filtering by genre/budget, revenue correlation analysis.
    - Tags: Data Analytics, Visualization.

12. Job Market Analyzers (https://github.com/Thejas10042001/JOB-MARKET-ANALYZERS-)
    - Description: Scrapes and analyzes job market trends and salary distributions.
    - Features: Automated scraping, NLP skill extraction, salary visualization.
    - Tags: Data Analytics, Python.

13. AI Portfolio Website
    - Description: This very website! A dynamic portfolio with a Gemini-powered chatbot.
    - Features: Integrated Gemini API, Framer Motion animations, Responsive design.
    - Tags: Google AI Studio, React.

14. Mood2Food
    - Description: AI app recommending food based on user emotions.
    - Features: Emotion detection, recipe API integration, restaurant finder.
    - Tags: AI, React.

15. StockGenius AI
    - Description: Real-time stock market analytics with 17+ AI modules.
    - Features: Real-time streaming, predictive modeling, portfolio management.
    - Tags: FinTech, AI/ML.

16. PhishGuard AI
    - Description: Real-time phishing website and email detector.
    - Features: Malicious URL scanning, NLP email analysis, browser extension.
    - Tags: Cybersecurity, AI.

17. EcoTrack
    - Description: Carbon footprint tracker with lifestyle recommendations.
    - Features: Emission calculation, sustainability tips, gamified goals.
    - Tags: Sustainability, AI.

18. IoT Weather Monitor
    - Description: ESP8266-based real-time climate monitoring.
    - Features: Sensor data collection, web dashboard, alerts.
    - Tags: IoT, Hardware.

19. Online Voting System
    - Description: Secure voting simulation with Aadhar OTP.
    - Features: OTP login simulation, tamper-proof recording, admin panel.
    - Tags: Security, Web.

20. Timetable Generator
    - Description: Automated academic scheduling algorithm.
    - Features: Conflict detection, automated generation, resource optimization.
    - Tags: Automation, Algorithms.

--- GUIDELINES ---
1. Always be polite, professional, and enthusiastic about Thejas's work.
2. If asked about contact info, provide the specific links or numbers listed above.
3. If asked about a specific project, use the detailed descriptions and features provided to give a comprehensive answer.
4. Emphasize his versatility in bridging AI, Web Development, and Cybersecurity.
5. If asked about something not in this profile, politely state you don't have that information but suggest contacting him directly via WhatsApp or Email.
`;