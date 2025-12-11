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
  Layout,
  Globe
} from 'lucide-react';

export const RESUME_DATA = {
  name: "Thejas Sreenivasu",
  role: "Innovative MCA Student | AI & Full-Stack Developer",
  summary: "Innovative MCA student with expertise in AI, full-stack web development, and cybersecurity solutions. Skilled in designing and implementing real-world projects that integrate machine learning, IoT, cloud computing, and data security. Passionate about creating scalable, user-friendly applications that bridge academic research with industry needs.",
  contact: {
    email: "thejas.sreenivasu@example.com", 
    github: "https://github.com/Thejas10042001", 
    linkedin: "https://linkedin.com/in/thejas", 
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
    description: "An interactive and infinite knowledge exploration interface for Wikipedia content.",
    longDescription: "Infinite Wik is a modern web application that reimagines how users explore Wikipedia. By leveraging React for a dynamic frontend and integrating directly with Wikipedia APIs, it provides an infinite scrolling experience that seamlessly connects related topics, allowing users to dive down 'rabbit holes' of knowledge without tab fatigue.",
    features: [
      "Infinite scroll architecture for seamless reading",
      "Dynamic content fetching from Wikipedia API",
      "Interactive knowledge graph visualization",
      "Clean, distraction-free reading mode"
    ],
    tags: ["React", "API Integration", "Web"],
    icon: Globe,
    githubUrl: "https://github.com/Thejas10042001/Infinite-Wik"
  },
  {
    id: "ai-portfolio",
    title: "AI Portfolio Website",
    description: "A dynamic portfolio website featuring an interactive AI chatbot powered by Google Gemini API.",
    longDescription: "This portfolio is not just a static display of projects; it's an interactive experience. Built with React, Tailwind CSS, and Framer Motion, it features a custom-built AI chatbot powered by Google's Gemini API. The AI is trained on my professional background, allowing visitors to ask questions about my skills, experience, and projects in natural language.",
    features: [
      "Context-aware AI Chatbot using Gemini API",
      "Dynamic animations with Framer Motion",
      "Responsive Glassmorphism Design",
      "Real-time filtering and interactive project cards"
    ],
    tags: ["React", "Gemini API", "Tailwind", "Framer Motion"],
    icon: Sparkles,
  },
  {
    id: "video-analysis",
    title: "Video Analysis",
    description: "A comprehensive system for processing and analyzing video content to extract meaningful insights.",
    longDescription: "A robust computer vision project designed to analyze video streams in real-time. It uses advanced machine learning models to detect objects, track movements, and classify activities within the video feed. This tool is applicable in security surveillance, traffic monitoring, and sports analytics.",
    features: [
      "Object Detection and Tracking",
      "Activity Recognition",
      "Frame-by-frame data extraction",
      "Automated report generation"
    ],
    tags: ["Computer Vision", "Video Processing", "AI"],
    icon: Video,
    githubUrl: "https://github.com/Thejas10042001/Video-Analysis-"
  },
  {
    id: "video-learning",
    title: "Video to Learning App",
    description: "An innovative platform designed to convert educational video content into structured interactive learning materials.",
    longDescription: "This platform transforms standard educational videos into interactive learning experiences. By processing video content, it automatically generates transcripts, key concept summaries, and quizzes, making learning more active and measurable for students.",
    features: [
      "Automatic transcript generation",
      "Key concept extraction",
      "Quiz generation from video content",
      "Interactive note-taking interface"
    ],
    tags: ["Education", "Video Processing", "AI"],
    icon: Video,
    githubUrl: "https://github.com/Thejas10042001/Video-to-Learning-App"
  },
  {
    id: "human-safety",
    title: "Human Safety Precautions",
    description: "A safety compliance system designed to monitor and detect human safety precautions in various environments.",
    longDescription: "This project utilizes computer vision to enhance workplace safety. By monitoring camera feeds, it automatically detects if personnel are wearing required Personal Protective Equipment (PPE) such as helmets, vests, and masks, and alerts supervisors of any violations.",
    features: [
      "PPE Detection (Helmets, Vests, Masks)",
      "Real-time alerting system",
      "Violation logging and reporting",
      "High-accuracy object detection models"
    ],
    tags: ["AI", "Computer Vision", "Safety"],
    icon: ShieldCheck,
    githubUrl: "https://github.com/Thejas10042001/Human-Safety-Precautions-"
  },
  {
    id: "cnn-visualization",
    title: "CNN Visualization",
    description: "A deep learning visualization tool that illustrates the internal layers and feature maps of Convolutional Neural Networks.",
    longDescription: "An educational tool helping students and researchers understand the 'black box' of Convolutional Neural Networks. It visualizes internal feature maps and filter activations in real-time, showing exactly what the network sees at each layer.",
    features: [
      "Layer-wise feature map visualization",
      "Filter activation heatmaps",
      "Interactive network architecture diagram",
      "Support for custom image input"
    ],
    tags: ["Deep Learning", "CNN", "Visualization", "Python"],
    icon: Brain,
    githubUrl: "https://github.com/Thejas10042001/CNN-VISUALTION"
  },
  {
    id: "image-to-code",
    title: "Image to Code",
    description: "An innovative tool that converts images into executable code, bridging the gap between design and implementation.",
    longDescription: "Leverages generative AI to convert UI sketches, wireframes, or screenshots into working HTML/CSS code. This tool significantly speeds up the prototyping process for developers and designers by automating the initial coding phase.",
    features: [
        "Screenshot to HTML/CSS conversion",
        "Support for modern frameworks (Tailwind/Bootstrap)",
        "Dark/Light mode detection",
        "Live code preview"
    ],
    tags: ["AI", "Computer Vision", "Code Generation"],
    icon: Image,
    githubUrl: "https://github.com/Thejas10042001/Image-to-code"
  },
  {
    id: "neurolens-guardian",
    title: "NeuroLens Meeting Guardian",
    description: "An advanced AI monitoring and security system for virtual meetings, ensuring a safe and compliant environment.",
    longDescription: "A security compliance tool for virtual meetings that monitors the participant's environment. It uses computer vision to detect unauthorized individuals, recording devices, or security breaches in the background, ensuring confidential discussions remain private.",
    features: [
        "Unauthorized person detection",
        "Recording device detection",
        "Real-time privacy alerts",
        "Meeting compliance reporting"
    ],
    tags: ["AI", "Security", "Monitoring"],
    icon: ShieldCheck,
    githubUrl: "https://github.com/Thejas10042001/NeuroLens-Meeting-Guardian"
  },
  {
    id: "mca-project",
    title: "MCA Final Project",
    description: "A comprehensive academic project demonstrating advanced concepts in software development and system architecture.",
    longDescription: "My Master of Computer Applications final project serves as a culmination of my academic studies. It integrates advanced software engineering principles, featuring a scalable architecture, comprehensive testing suites, and a full-stack implementation solving a complex real-world problem.",
    features: [
        "Microservices architecture",
        "End-to-end implementation",
        "Comprehensive testing coverage",
        "Scalable database design"
    ],
    tags: ["Academic", "Full Stack", "Research"],
    icon: GraduationCap,
    githubUrl: "https://github.com/Thejas10042001/MCA-PROEJCT"
  },
  {
    id: "update-meeting",
    title: "Update Meeting",
    description: "A meeting management and status update tracking system designed to streamline team communication.",
    longDescription: "A streamlined web application for managing daily stand-ups and status updates. It allows remote teams to stay aligned without long synchronous meetings by providing a structured platform for asynchronous progress reporting.",
    features: [
        "Asynchronous status updates",
        "Team velocity tracking",
        "Blocker highlighting",
        "Automated summary reports"
    ],
    tags: ["Web", "Management", "Communication"],
    icon: Briefcase,
    githubUrl: "https://github.com/Thejas10042001/UPDATE-MEETING"
  },
  {
    id: "neuro-lens-meeting",
    title: "Neuro Lens Meeting",
    description: "A specialized video conferencing tool focusing on intelligent analysis and user experience.",
    longDescription: "A next-generation video conferencing platform that enhances user engagement through real-time AI analytics. It provides insights into participant sentiment and engagement levels to help hosts conduct more effective meetings.",
    features: [
        "Real-time engagement analytics",
        "Participant sentiment analysis",
        "Automated meeting minutes",
        "High-quality video streaming"
    ],
    tags: ["Video", "AI", "Real-time"],
    icon: Video,
    githubUrl: "https://github.com/Thejas10042001/Neuro-lens-meeting"
  },
  {
    id: "movie-analytics",
    title: "Movie Analytics Dashboard",
    description: "Interactive dashboard for visualizing movie trends, ratings, and box office data.",
    longDescription: "An interactive data analytics dashboard designed for film enthusiasts and industry analysts. It processes large datasets of movie information to visualize trends in genres, box office performance, and audience ratings over time.",
    features: [
      "Interactive data visualizations",
      "Trend analysis over time",
      "Comparative movie metrics",
      "Genre performance breakdown"
    ],
    tags: ["Data Analytics", "Visualization", "Dashboard"],
    icon: Film,
    githubUrl: "https://github.com/Thejas10042001/Movie-Analytics-Dashboard"
  },
  {
    id: "job-market",
    title: "Job Market Analyzers",
    description: "Analytical tool designed to interpret job market trends and demand using data gathering and processing techniques.",
    longDescription: "A data analytics pipeline that scrapes and processes job postings to identify trending skills, salary ranges, and demand distribution across different geographies. Helps job seekers and recruiters understand current market dynamics.",
    features: [
        "Automated data aggregation",
        "Skill demand analysis",
        "Salary estimation models",
        "Geographic trend mapping"
    ],
    tags: ["Data Analytics", "Python", "Insights"],
    icon: TrendingUp,
    githubUrl: "https://github.com/Thejas10042001/JOB-MARKET-ANALYZERS-"
  },
  {
    id: "mood2food",
    title: "Mood2Food",
    description: "AI-powered mood sensing & food recommendation web/app with emotion detection, recipe API integration.",
    longDescription: "Mood2Food bridges the gap between how we feel and what we eat. Using facial recognition technology, it detects the user's current emotion and recommends recipes or restaurants that scientifically or culturally match that mood to improve well-being.",
    features: [
      "Facial expression emotion detection",
      "Mood-based recipe recommendation algorithm",
      "Restaurant finder integration",
      "User preference learning"
    ],
    tags: ["AI", "Web/App", "API Integration"],
    icon: Brain,
  },
  {
    id: "stockgenius",
    title: "StockGenius AI",
    description: "Real-time Indian stock market analytics platform with 17+ AI-driven modules for trading strategies.",
    longDescription: "A comprehensive platform for the Indian stock market that employs over 17 distinct AI modules. It analyzes real-time market data to provide predictive insights, trading strategies, and portfolio health checks for retail investors.",
    features: [
      "Real-time data processing",
      "17+ Custom AI modules",
      "Predictive analytics for price trends",
      "Portfolio management insights"
    ],
    tags: ["AI", "FinTech", "Analytics"],
    icon: TrendingUp,
  },
  {
    id: "phishguard",
    title: "PhishGuard AI",
    description: "AI-based phishing website & email detector for real-time cybersecurity protection.",
    longDescription: "PhishGuard AI is a proactive cybersecurity tool that detects phishing attempts in real-time. By analyzing URL patterns, page content, and email headers using machine learning models, it warns users before they enter sensitive information on malicious sites.",
    features: [
        "Real-time URL scanning",
        "Heuristic content analysis",
        "Zero-day phishing detection",
        "Browser extension integration"
    ],
    tags: ["Cybersecurity", "AI", "Security"],
    icon: ShieldCheck,
  },
  {
    id: "ecotrack",
    title: "EcoTrack",
    description: "Carbon footprint tracker with AI-powered lifestyle recommendations.",
    longDescription: "EcoTrack is an IoT-enabled application designed to help individuals track and reduce their carbon footprint. It monitors energy usage and travel habits, providing AI-powered, personalized recommendations for a more sustainable lifestyle.",
    features: [
        "IoT device integration",
        "Carbon footprint calculation",
        "Personalized sustainability tips",
        "Progress tracking and gamification"
    ],
    tags: ["IoT", "Sustainability", "AI"],
    icon: Leaf,
  },
  {
    id: "weather-monitoring",
    title: "IoT Weather Monitoring",
    description: "ESP8266-based IoT solution for real-time climate data collection.",
    longDescription: "A hardware-software integration project using ESP8266 microcontrollers to gather hyper-local weather data. Sensors collect temperature, humidity, and air quality metrics, which are then transmitted to a cloud dashboard for real-time monitoring and analysis.",
    features: [
        "ESP8266 sensor integration",
        "Real-time cloud dashboard",
        "Historical data logging",
        "Alerts for extreme conditions"
    ],
    tags: ["IoT", "Hardware", "Sensors"],
    icon: CloudRain,
  },
  {
    id: "online-voting",
    title: "Online Voting System",
    description: "Aadhar OTP simulation with secure login and voting mechanism.",
    longDescription: "A secure electronic voting prototype that simulates Aadhar-based authentication. It ensures unique and verifiable votes through a secure login mechanism and OTP verification, addressing common challenges in digital voting systems.",
    features: [
        "Biometric/OTP simulation",
        "Secure candidate database",
        "Admin dashboard for results",
        "Voter anonymity protection"
    ],
    tags: ["Security", "Web", "Simulation"],
    icon: Vote,
  },
  {
    id: "timetable-gen",
    title: "Teacher Timetable Generator",
    description: "Automated scheduling system with breaks and subject allocations.",
    longDescription: "A constraint satisfaction system that automates the complex task of generating conflict-free timetables for schools and colleges. It considers teacher availability, room capacity, and subject requirements to produce optimal schedules.",
    features: [
        "Conflict detection algorithm",
        "Resource optimization",
        "Drag-and-drop manual adjustments",
        "Export to PDF/Excel"
    ],
    tags: ["Automation", "Algorithms", "Web"],
    icon: CalendarClock,
  },
];

export const SYSTEM_PROMPT = `
You are an AI assistant for Thejas Sreenivasu's portfolio website. Your role is to professionally and enthusiastically represent Thejas to potential employers or collaborators.

**Thejas's Profile:**
- **Role:** MCA Student, AI & Full-Stack Developer.
- **Education:** 
  - MCA from RVIT, JP Nagar (VTU) (Ongoing).
  - BCA from KLE Society Degree College, Bangalore (Completed).
- **Key Strengths:** AI/ML, Full-Stack Web Development (MERN, Java), Cybersecurity, IoT.
- **Location:** Bangalore, India.

**Technical Skills:**
- Languages: Python, Java, JavaScript, PHP, C/C++, SQL.
- Web: React, Node.js, Express, Tailwind CSS, Bootstrap, HTML/CSS.
- AI/ML: TensorFlow.js, Scikit-learn, XGBoost, OpenAI/Gemini APIs, Computer Vision, CNNs.
- Databases: MongoDB, MySQL (RDBMS), Firebase.
- Tools: Git/GitHub, VS Code, Android Studio, Netlify, Render.

**Projects:**
1. **Infinite Wik:** Infinite knowledge exploration interface for Wikipedia.
2. **Human Safety Precautions:** AI safety compliance monitoring using computer vision.
3. **CNN Visualization:** Deep learning tool to visualize CNN layers.
4. **Image to Code:** Converts images to executable code using AI.
5. **NeuroLens Meeting Guardian:** AI security system for virtual meetings.
6. **Update Meeting:** Meeting management and tracking system.
7. **Neuro Lens Meeting:** AI-enhanced video conferencing tool.
8. **Movie Analytics Dashboard:** Data visualization for movie trends.
9. **Job Market Analyzers:** Tool for analyzing job market data.
10. **Video to Learning App:** Educational video transformation platform.
11. **Video Analysis:** Advanced video content analysis and processing tool.
12. **Mood2Food:** AI mood-based food recommendation.
13. **StockGenius AI:** Stock market analytics with 17+ AI modules.
14. **PhishGuard AI:** Phishing detection system.
15. **EcoTrack:** Carbon footprint tracker.
16. **IoT Weather System:** Real-time weather monitoring using ESP8266.
17. **Online Voting System:** Secure voting with OTP simulation.
18. **MCA Final Project:** Advanced software development academic project.
19. **AI Portfolio Website:** This website, powered by Gemini API.

**Instructions:**
- Answer questions in the first person ("I am capable of...", "My project involves...").
- Keep answers concise, professional, and engaging.
- If asked about specific code or implementations, refer them to the GitHub profile: ${RESUME_DATA.contact.github}
- Highlight problem-solving skills and adaptability.
- If asked about contact info, provide email: ${RESUME_DATA.contact.email} or LinkedIn.
`;