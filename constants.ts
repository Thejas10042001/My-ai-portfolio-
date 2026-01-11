
import { Project, Skill, Education, Certificate } from './types';
import { 
  Brain, 
  TrendingUp, 
  ShieldCheck, 
  Shield,
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
  Globe,
  Award,
  Box,
  PenTool,
  Car,
  Map,
  Lightbulb,
  Settings,
  Bot,
  FileSpreadsheet,
  Zap,
  Activity,
  Maximize,
  Cloud,
  Lock,
  Database,
  Wifi,
  Monitor,
  Mic,
  FolderOpen,
  Network,
  Terminal,
  Layers,
  Layout,
  MousePointer2,
  Palette,
  CheckCircle,
  Lightbulb as Idea,
  BarChart,
  FileCode,
  Search,
  Cpu,
  BarChart3,
  Link,
  Table,
  Eye,
  FileSearch,
  Key,
  Flame,
  Binary,
  Globe as WebIcon,
  Server,
  Layers as SoftwareIcon,
  Braces,
  Atom,
  MousePointer,
  Variable,
  Workflow,
  ClipboardCheck,
  Trophy,
  ShieldAlert,
  Fingerprint,
  HardDrive,
  Activity as AnalyticsIcon
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
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
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
  // Language
  { name: "Python", category: "Language", level: 90 },
  { name: "JavaScript (ES6+)", category: "Language", level: 85 },
  { name: "Java", category: "Language", level: 80 },
  { name: "PHP", category: "Language", level: 75 },
  { name: "C / C++", category: "Language", level: 75 },
  // Web
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
  // Mobile
  { name: "React Native", category: "Mobile", level: 70 },
  { name: "Android Studio", category: "Mobile", level: 65 },
  // Tool
  { name: "GitHub / Netlify / Render", category: "Tool", level: 80 },
  { name: "IoT (ESP8266)", category: "Tool", level: 75 },
  { name: "Data Security", category: "Tool", level: 75 },
  { name: "API Integration", category: "Tool", level: 85 },
];

export const CERTIFICATES: Certificate[] = [
  // --- MICROSOFT LEARN ---
  {
    id: "ms-insider-risk",
    title: "Trophy: Manage insider risk in Microsoft 365",
    issuer: "Microsoft Learn",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    description: "Advanced competency in identifying, investigating, and remediating malicious and inadvertent activities within an organization using Microsoft 365 risk management tools.",
    date: "14/10/2022",
    link: "https://learn.microsoft.com/en-in/users/11263963/?tab=tab-trophies",
    icon: Trophy,
    category: "Security"
  },
  {
    id: "ms-500-p4",
    title: "Trophy: MS-500 part 4: Manage Governance and Compliance",
    issuer: "Microsoft Learn",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    description: "Mastery of governance and compliance features, focusing on sensitive data types, retention policies, and eDiscovery workflows in M365.",
    date: "14/10/2022",
    link: "https://learn.microsoft.com/en-in/users/11263963/?tab=tab-trophies",
    icon: ShieldCheck,
    category: "Security"
  },
  {
    id: "ms-sc-400",
    title: "Trophy: SC-400: Implement Data Lifecycle and Records Management",
    issuer: "Microsoft Learn",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    description: "Specialized training in information protection, data loss prevention, and managing the lifecycle of organizational data.",
    date: "14/10/2022",
    link: "https://learn.microsoft.com/en-in/users/11263963/?tab=tab-trophies",
    icon: Database,
    category: "Data Compliance"
  },
  {
    id: "ms-500-p3",
    title: "Trophy: MS-500 part 3 - Implement and manage information protection",
    issuer: "Microsoft Learn",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    description: "Implementing and managing encryption, sensitivity labels, and secure information types to protect critical digital assets.",
    date: "14/10/2022",
    link: "https://learn.microsoft.com/en-in/users/11263963/?tab=tab-trophies",
    icon: Lock,
    category: "Security"
  },
  {
    id: "ms-500-p2",
    title: "Trophy: MS-500 part 2 - Implement and manage threat protection",
    issuer: "Microsoft Learn",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    description: "Advanced threat defense implementation, including Microsoft Defender for Office 365, Cloud Apps, and Endpoint security architectures.",
    date: "14/10/2022",
    link: "https://learn.microsoft.com/en-in/users/11263963/?tab=tab-trophies",
    icon: ShieldAlert,
    category: "Security"
  },
  {
    id: "ms-500-p1",
    title: "Trophy: MS-500 part 1 - Implement and manage identity and access",
    issuer: "Microsoft Learn",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    description: "Strategic implementation of Azure AD, conditional access policies, and identity protection mechanisms for enterprise-level security.",
    date: "14/10/2022",
    link: "https://learn.microsoft.com/en-in/users/11263963/?tab=tab-trophies",
    icon: Fingerprint,
    category: "Identity"
  },
  {
    id: "ms-pl-900",
    title: "Trophy: PL-900: Microsoft Power Platform Fundamentals",
    issuer: "Microsoft Learn",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    description: "Core knowledge of the Power Platform ecosystem, including Power Apps, Power Automate, Power BI, and Power Virtual Agents.",
    date: "31/8/2022",
    link: "https://learn.microsoft.com/en-in/users/11263963/?tab=tab-trophies",
    icon: Zap,
    category: "Power Platform"
  },
  {
    id: "ms-azure-data-analytics",
    title: "Trophy: Azure Data Fundamentals: Data Analytics",
    issuer: "Microsoft Learn",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    description: "Understanding analytical workloads, data visualization principles, and modern data warehouse solutions in the Azure cloud.",
    date: "31/8/2022",
    link: "https://learn.microsoft.com/en-in/users/11263963/?tab=tab-trophies",
    icon: BarChart,
    category: "Data"
  },
  {
    id: "ms-azure-non-relational",
    title: "Trophy: Azure Data Fundamentals: Non-relational data",
    issuer: "Microsoft Learn",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    description: "Expertise in managing NoSQL workloads, Azure Cosmos DB, and blob storage for unstructured and semi-structured data.",
    date: "31/8/2022",
    link: "https://learn.microsoft.com/en-in/users/11263963/?tab=tab-trophies",
    icon: HardDrive,
    category: "Cloud Data"
  },
  {
    id: "ms-azure-relational",
    title: "Trophy: Azure Data Fundamentals: Relational data",
    issuer: "Microsoft Learn",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    description: "Deep dive into Azure SQL services, database management, and relational data modeling in a cloud environment.",
    date: "31/8/2022",
    link: "https://learn.microsoft.com/en-in/users/11263963/?tab=tab-trophies",
    icon: Database,
    category: "Cloud Data"
  },
  {
    id: "ms-azure-core-data",
    title: "Trophy: Azure Data Fundamentals: Core data concepts",
    issuer: "Microsoft Learn",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    description: "Foundational training on data roles, processing methods, and core database architectures in Microsoft Azure.",
    date: "31/8/2022",
    link: "https://learn.microsoft.com/en-in/users/11263963/?tab=tab-trophies",
    icon: AnalyticsIcon,
    category: "Data"
  },
  {
    id: "ms-azure-fundamentals",
    title: "Trophy: Microsoft Azure Fundamentals: Core Concepts",
    issuer: "Microsoft Learn",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    description: "Mastery of core cloud services, architectural components, and Azure governance models.",
    date: "28/8/2021",
    link: "https://learn.microsoft.com/en-in/users/11263963/?tab=tab-trophies",
    icon: Cloud,
    category: "Azure"
  },
  {
    id: "ms-azure-ai-conv",
    title: "Trophy: Azure AI Fundamentals: Conversational AI",
    issuer: "Microsoft Learn",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    description: "Implementing intelligent bots and Q&A services using Azure AI Bot Service and Language understanding.",
    date: "28/8/2021",
    link: "https://learn.microsoft.com/en-in/users/11263963/?tab=tab-trophies",
    icon: Mic,
    category: "AI"
  },
  {
    id: "ms-azure-ai-nlp",
    title: "Trophy: Azure AI Fundamentals: NLP",
    issuer: "Microsoft Learn",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    description: "Mastering Natural Language Processing (NLP) solutions including sentiment analysis, key phrase extraction, and entity recognition.",
    date: "28/8/2021",
    link: "https://learn.microsoft.com/en-in/users/11263963/?tab=tab-trophies",
    icon: Sparkles,
    category: "AI"
  },
  {
    id: "ms-azure-ai-cv",
    title: "Trophy: Azure AI Fundamentals: Computer Vision",
    issuer: "Microsoft Learn",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    description: "Implementing image analysis, object detection, and face recognition capabilities using Azure AI Vision services.",
    date: "28/8/2021",
    link: "https://learn.microsoft.com/en-in/users/11263963/?tab=tab-trophies",
    icon: Eye,
    category: "AI"
  },
  {
    id: "ms-azure-ai-visual",
    title: "Trophy: Azure AI Fundamentals: Visual tools for ML",
    issuer: "Microsoft Learn",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    description: "Building machine learning models without coding using Azure Machine Learning designer and Automated ML.",
    date: "28/8/2021",
    link: "https://learn.microsoft.com/en-in/users/11263963/?tab=tab-trophies",
    icon: PenTool,
    category: "Machine Learning"
  },
  {
    id: "ms-azure-ai-start",
    title: "Trophy: Azure AI Fundamentals: Get started with AI",
    issuer: "Microsoft Learn",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    description: "Comprehensive introduction to AI concepts, ethical considerations, and fundamental services in the Azure ecosystem.",
    date: "28/8/2021",
    link: "https://learn.microsoft.com/en-in/users/11263963/?tab=tab-trophies",
    icon: Brain,
    category: "AI"
  },
  // --- Selected MS Modules ---
  {
    id: "ms-dot-net-intro",
    title: "Badge: Introduction to .NET",
    issuer: "Microsoft Learn",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    description: "Foundation in .NET ecosystem, including CLI tools, platform capabilities, and application types.",
    date: "18/12/2022",
    link: "https://learn.microsoft.com/en-in/users/11263963/?tab=tab-badges",
    icon: Code,
    category: "Development"
  },
  {
    id: "ms-defender-endpoint",
    title: "Badge: Protect against threats with Microsoft Defender for Endpoint",
    issuer: "Microsoft Learn",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    description: "Managing enterprise endpoint security and response using advanced threat detection and remediation.",
    date: "14/10/2022",
    link: "https://learn.microsoft.com/en-in/users/11263963/?tab=tab-badges",
    icon: ShieldCheck,
    category: "Cybersecurity"
  },
  {
    id: "ms-power-automate-intro",
    title: "Badge: Describe building automation with Microsoft Power Automate",
    issuer: "Microsoft Learn",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    description: "Proficiency in creating business workflows and process automations without complex code.",
    date: "31/8/2022",
    link: "https://learn.microsoft.com/en-in/users/11263963/?tab=tab-badges",
    icon: Bot,
    category: "Automation"
  },

  // --- CELONIS ---
  {
    id: "celonis-process-automation",
    title: "Process Automation Bootcamp",
    issuer: "Celonis",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Celonis_Logo.png",
    description: "Intensive training on process mining and automation strategies to optimize business execution and identify operational inefficiencies.",
    date: "31-08-2022",
    link: "https://drive.google.com/file/d/1RcOOGxNWsVkWpWpKIa7IGSRIwRl1IP3I/view?usp=sharing",
    icon: ClipboardCheck,
    category: "Process Mining"
  },

  // --- UI PATH ---
  {
    id: "uipath-ai-center",
    title: "Diploma of Completion: UiPath AI Center Overview",
    issuer: "UiPath",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/UiPath_Logo.svg/1024px-UiPath_Logo.svg.png",
    description: "Mastered the integration of machine learning models into RPA workflows using the UiPath AI Center platform.",
    date: "10/05/2021",
    link: "https://drive.google.com/file/d/1IlGaY1qpWKGeQSB7X7yR6eOm295_HCyX/view?usp=sharing",
    icon: Brain,
    category: "AI/Automation"
  },
  {
    id: "uipath-intro-rpa",
    title: "Diploma of Completion: Introduction to RPA and Automation",
    issuer: "UiPath",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/UiPath_Logo.svg/1024px-UiPath_Logo.svg.png",
    description: "Foundational knowledge of Enterprise Automation and the methodology of Robotic Process Automation.",
    date: "10/06/2021",
    link: "https://drive.google.com/file/d/1q8AXkpzhDevivIbZdSeC6Y_PWv3xSOBh/view?usp=sharing",
    icon: Zap,
    category: "RPA Foundations"
  },
  {
    id: "uipath-variables-studio",
    title: "Diploma of Completion: Variables, Arguments and Control Flow in Studio",
    issuer: "UiPath",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/UiPath_Logo.svg/1024px-UiPath_Logo.svg.png",
    description: "Technical training on managing data flow, complex logic, and variable handling in UiPath Studio (v2019.4).",
    date: "10/09/2021",
    link: "https://drive.google.com/file/d/1EGqoWmZbbtL81u2msSjMVlLc-igyWe2U/view?usp=sharing",
    icon: Workflow,
    category: "Technical Automation"
  },
  {
    id: "uipath-studiox-start",
    title: "Diploma of Completion: Get Started With StudioX",
    issuer: "UiPath",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/UiPath_Logo.svg/1024px-UiPath_Logo.svg.png",
    description: "Proficiency in rapid automation development using StudioX, focusing on user-centric business task automation.",
    date: "12/18/2021",
    link: "https://drive.google.com/file/d/1SPjcEEIFUzUF4f-CS8xVe9kEK7wi8Icz/view?usp=sharing",
    icon: Bot,
    category: "No-Code RPA"
  },
  {
    id: "uipath-step-into-rpa",
    title: "Diploma of Completion: Step into RPA",
    issuer: "UiPath",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/UiPath_Logo.svg/1024px-UiPath_Logo.svg.png",
    description: "Explored advanced RPA applications and hands-on laboratory exercises for complex enterprise scenarios.",
    date: "12/14/2021",
    link: "https://drive.google.com/file/d/1LRecOWgKEuvZebhQdC1oOlJf5zAtd0qW/view?usp=sharing",
    icon: Settings,
    category: "RPA Mastery"
  },
  {
    id: "uipath-assistant",
    title: "Diploma of Completion: UiPath Assistant",
    issuer: "UiPath",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/UiPath_Logo.svg/1024px-UiPath_Logo.svg.png",
    description: "Learned to manage and execute attended automations through the desktop-based UiPath Assistant interface.",
    date: "06/14/2021",
    link: "https://drive.google.com/file/d/1ee2Ws5qgrRKFL4Q7hnxt64JptOtiYGu7/view?usp=sharing",
    icon: MousePointer,
    category: "Desktop Automation"
  },
  {
    id: "uipath-task-capture",
    title: "Diploma of Completion: UiPath Task Capture",
    issuer: "UiPath",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/UiPath_Logo.svg/1024px-UiPath_Logo.svg.png",
    description: "Mastering the tool for documentating business processes automatically and generating Process Definition Documents (PDD).",
    date: "06/14/2021",
    link: "https://drive.google.com/file/d/1e_Zj4z4eCsyGk5zWZhS60A55ttTwNCXy/view?usp=sharing",
    icon: Activity,
    category: "Process Discovery"
  },
  {
    id: "uipath-finance-accounting",
    title: "Diploma of Completion: RPA in Finance and Accounting",
    issuer: "UiPath",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/UiPath_Logo.svg/1024px-UiPath_Logo.svg.png",
    description: "Specialized training on applying robotic automation to financial reporting, accounts payable, and auditing processes.",
    date: "06/07/2021",
    link: "https://drive.google.com/file/d/1_9jUtDggxiW2MEK-6bOBAjlsphbnltlD/view?usp=sharing",
    icon: BarChart3,
    category: "FinTech Automation"
  },
  {
    id: "uipath-starter",
    title: "Diploma of Completion: RPA Starter",
    issuer: "UiPath",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/UiPath_Logo.svg/1024px-UiPath_Logo.svg.png",
    description: "Comprehensive introduction to the UiPath platform ecosystem and basic automation design principles.",
    date: "06/07/2021",
    link: "https://drive.google.com/file/d/1_CRjnJ4UMqRxKzJY1GbClJDaPh4FV2sv/view?usp=sharing",
    icon: Sparkles,
    category: "Entry Level"
  },

  // --- HACKERRANK ---
  {
    id: "hr-software-engineer",
    title: "Software Engineer",
    issuer: "HackerRank",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    description: "Verified role certification demonstrating comprehensive skills in data structures, algorithms, and software engineering principles.",
    date: "2023",
    link: "https://www.hackerrank.com/certificates/iframe/2e927e4c8ff5",
    icon: SoftwareIcon,
    category: "Verified Role"
  },
  {
    id: "hr-frontend-react",
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    description: "Professional certification validating expertise in building scalable frontend applications using the React framework.",
    date: "2023",
    link: "https://www.hackerrank.com/certificates/iframe/f46057afcd1e",
    icon: Layout,
    category: "Web Development"
  },
  {
    id: "hr-sql-adv",
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    description: "Advanced competency in SQL, including complex queries, database optimization, and data manipulation at scale.",
    date: "2023",
    link: "https://www.hackerrank.com/certificates/iframe/20d3727ce0c4",
    icon: Database,
    category: "Data"
  },
  {
    id: "hr-prob-solve-int",
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    description: "Verified skills in intermediate algorithms and data structures through competitive coding challenges.",
    date: "2023",
    link: "https://www.hackerrank.com/certificates/iframe/e0fb4c1dd189",
    icon: Brain,
    category: "Algorithms"
  },
  {
    id: "hr-go-int",
    title: "Go (Intermediate)",
    issuer: "HackerRank",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    description: "Validated intermediate-level proficiency in Go (Golang), focusing on concurrency patterns and backend performance.",
    date: "2023",
    link: "https://www.hackerrank.com/certificates/iframe/20c86aa76467",
    icon: Code,
    category: "Programming"
  },
  {
    id: "hr-angular-int",
    title: "Angular (Intermediate)",
    issuer: "HackerRank",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    description: "Mastery of intermediate Angular concepts including services, dependency injection, and complex component architecture.",
    date: "2023",
    link: "https://www.hackerrank.com/certificates/iframe/bc2fe0155e6f",
    icon: WebIcon,
    category: "Frontend"
  },
  {
    id: "hr-js-int",
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    description: "Intermediate JavaScript certification covering closures, prototypes, and asynchronous programming patterns.",
    date: "2023",
    link: "https://www.hackerrank.com/certificates/iframe/be103206333b",
    icon: Braces,
    category: "Language"
  },
  {
    id: "hr-rest-api-int",
    title: "Rest API (Intermediate)",
    issuer: "HackerRank",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    description: "Verified skill in designing and consuming RESTful services with advanced request handling and data processing.",
    date: "2023",
    link: "https://www.hackerrank.com/profile/thejasssreenivasu",
    icon: Server,
    category: "API Design"
  },
  {
    id: "hr-python-basic",
    title: "Python (Basic)",
    issuer: "HackerRank",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    description: "Foundational Python certification validating core syntax and basic algorithmic logic.",
    date: "2022",
    link: "https://www.hackerrank.com/certificates/iframe/f6f231422928",
    icon: FileCode,
    category: "Language"
  },
  {
    id: "hr-react-basic",
    title: "React (Basic)",
    issuer: "HackerRank",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    description: "Core React concepts including state management, props, and fundamental component lifecycles.",
    date: "2022",
    link: "https://www.hackerrank.com/certificates/iframe/435c8a92bb0d",
    icon: Atom,
    category: "Frontend"
  },
  {
    id: "hr-angular-basic",
    title: "Angular (Basic)",
    issuer: "HackerRank",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    description: "Foundational Angular skills including templates, data binding, and basic routing.",
    date: "2022",
    link: "https://www.hackerrank.com/certificates/iframe/10a0471bf290",
    icon: WebIcon,
    category: "Frontend"
  },
  {
    id: "hr-gold-badge",
    title: "Problem Solving Badge: GOLD",
    issuer: "HackerRank",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    description: "Earned Gold status in Problem Solving through consistent competitive programming, amassing 2221 points.",
    date: "Active",
    link: "https://www.hackerrank.com/profile/thejasssreenivasu",
    icon: Award,
    category: "Badge"
  },
  {
    id: "hr-silver-python",
    title: "Python Badge: SILVER",
    issuer: "HackerRank",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    description: "Silver level badge in Python, demonstrating advanced language proficiency with 115 points earned.",
    date: "Active",
    link: "https://www.hackerrank.com/profile/thejasssreenivasu",
    icon: Flame,
    category: "Badge"
  },
  {
    id: "hr-silver-ruby",
    title: "Ruby Badge: SILVER",
    issuer: "HackerRank",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    description: "Silver level badge in Ruby development, amassing 250 points through various coding challenges.",
    date: "Active",
    link: "https://www.hackerrank.com/profile/thejasssreenivasu",
    icon: Binary,
    category: "Badge"
  },

  // --- GREAT LEARNING ---
  {
    id: "gl-python-ml",
    title: "Python for Machine Learning",
    issuer: "Great Learning",
    issuerLogo: "https://mma.prnewswire.com/media/1458111/Great_Learning_Logo.jpg?p=facebook",
    description: "Comprehensive training in Python programming specifically for building and deploying robust machine learning models using Scikit-Learn.",
    date: "April 2021",
    link: "https://drive.google.com/file/d/16Npj01z2kQNkbXjClfSsR44rfFgzELvX/view?usp=sharing",
    icon: FileCode,
    category: "Machine Learning"
  },
  {
    id: "gl-pyspark",
    title: "Spark: PySpark",
    issuer: "Great Learning",
    issuerLogo: "https://mma.prnewswire.com/media/1458111/Great_Learning_Logo.jpg?p=facebook",
    description: "Big data processing with Apache Spark using the Python API, focusing on RDDs, DataFrames, and scalable data engineering pipelines.",
    date: "April 2021",
    link: "https://drive.google.com/file/d/1ZVW_SSSkzRk2pfHqaRUjgTOieqFmp-kE/view?usp=sharing",
    icon: Database,
    category: "Big Data"
  },
  {
    id: "gl-supervised-ml",
    title: "Supervised ML with Tree-based Models",
    issuer: "Great Learning",
    issuerLogo: "https://mma.prnewswire.com/media/1458111/Great_Learning_Logo.jpg?p=facebook",
    description: "Advanced study of ensemble learning techniques, including Decision Trees, Random Forests, and Gradient Boosting algorithms.",
    date: "April 2021",
    link: "https://drive.google.com/file/d/11yqirJ2cDZLktbyebzsuNHfOGf-CP8P7/view?usp=sharing",
    icon: Brain,
    category: "AI/ML"
  },
  {
    id: "gl-cloud-adv",
    title: "Cloud Foundations Advance",
    issuer: "Great Learning",
    issuerLogo: "https://mma.prnewswire.com/media/1458111/Great_Learning_Logo.jpg?p=facebook",
    description: "Expert exploration of cloud computing architectures, virtualization technologies, and advanced distributed system deployment.",
    date: "Nov 2020",
    link: "https://drive.google.com/file/d/14nCwTxYLbR_2gbzJtIweCjmdxMaE3Aax/view?usp=sharing",
    icon: Cloud,
    category: "Cloud"
  },
  {
    id: "gl-power-bi",
    title: "Data Visualization using Power BI",
    issuer: "Great Learning",
    issuerLogo: "https://mma.prnewswire.com/media/1458111/Great_Learning_Logo.jpg?p=facebook",
    description: "Mastering Power BI for creating dynamic dashboards, data transformations, and deriving actionable business intelligence.",
    date: "Nov 2020",
    link: "https://drive.google.com/file/d/1R1rMqihVI7HjYjWoD6acpi5k3zrGQCpo/view?usp=sharing",
    icon: BarChart,
    category: "Data Viz"
  },
  {
    id: "gl-deep-learning",
    title: "Introduction to Deep Learning",
    issuer: "Great Learning",
    issuerLogo: "https://mma.prnewswire.com/media/1458111/Great_Learning_Logo.jpg?p=facebook",
    description: "Foundational training in artificial neural networks, backpropagation mechanics, and introductory deep architecture concepts.",
    date: "Nov 2020",
    link: "https://drive.google.com/file/d/1c1Dz0AR-sdv8Cu43_G4jOKQOyUYzfIxp/view?usp=sharing",
    icon: Cpu,
    category: "Deep Learning"
  },
  {
    id: "gl-blockchain",
    title: "Blockchain Basics",
    issuer: "Great Learning",
    issuerLogo: "https://mma.prnewswire.com/media/1458111/Great_Learning_Logo.jpg?p=facebook",
    description: "Understanding decentralized ledgers, cryptography, smart contracts, and the architectural foundations of Web3 technology.",
    date: "Nov 2020",
    link: "https://drive.google.com/file/d/1rJZJjwMir4uKw7eyg-PmdmzHxHy445J6/view?usp=sharing",
    icon: Link,
    category: "Web3"
  },
  {
    id: "gl-ds-c",
    title: "Data Structures in C",
    issuer: "Great Learning",
    issuerLogo: "https://mma.prnewswire.com/media/1458111/Great_Learning_Logo.jpg?p=facebook",
    description: "Technical implementation of core data structures like Linked Lists, Stacks, Queues, and Trees using the C programming language.",
    date: "Nov 2020",
    link: "https://drive.google.com/file/d/14k6Oo5KLACNKzIIpGsgHYP7C1ddX9hWn/view?usp=sharing",
    icon: Table,
    category: "Computer Science"
  },
  {
    id: "gl-aws-beg",
    title: "AWS for Beginners",
    issuer: "Great Learning",
    issuerLogo: "https://mma.prnewswire.com/media/1458111/Great_Learning_Logo.jpg?p=facebook",
    description: "Foundational overview of Amazon Web Services, covering EC2 compute, S3 storage, and basic IAM security configurations.",
    date: "Nov 2020",
    link: "https://drive.google.com/file/d/1d-bLVbHDwWnKWMqBDaHs0x9cr1luaSG5/view?usp=sharing",
    icon: Cloud,
    category: "Cloud"
  },
  {
    id: "gl-android",
    title: "Android Application Development",
    issuer: "Great Learning",
    issuerLogo: "https://mma.prnewswire.com/media/1458111/Great_Learning_Logo.jpg?p=facebook",
    description: "Hands-on native mobile development using Android Studio, focusing on UI layouts, activities, and application lifecycle management.",
    date: "Nov 2020",
    link: "https://drive.google.com/file/d/1cuy2DTKmvulzHaz3WR8uygNXTcCfzeJe/view?usp=sharing",
    icon: Smartphone,
    category: "Mobile"
  },
  {
    id: "gl-cv-ess",
    title: "Computer Vision Essentials",
    issuer: "Great Learning",
    issuerLogo: "https://mma.prnewswire.com/media/1458111/Great_Learning_Logo.jpg?p=facebook",
    description: "Implementing core computer vision algorithms for image processing, edge detection, and basic feature extraction.",
    date: "April 2021",
    link: "https://drive.google.com/file/d/1q5I8IjafvAbBxrxfmFmsVo9h8k4CD2Dq/view?usp=sharing",
    icon: Eye,
    category: "Computer Vision"
  },
  {
    id: "gl-hacking",
    title: "Introduction to Ethical Hacking",
    issuer: "Great Learning",
    issuerLogo: "https://mma.prnewswire.com/media/1458111/Great_Learning_Logo.jpg?p=facebook",
    description: "Fundamentals of cybersecurity, covering penetration testing methodology, threat modeling, and defensive system hardening.",
    date: "April 2021",
    link: "https://drive.google.com/file/d/1k38rV-rnfgHTDTMke_-80NMdAehKfARA/view?usp=sharing",
    icon: Key,
    category: "Cybersecurity"
  },
  {
    id: "gl-ds-found",
    title: "Data Science Foundations",
    issuer: "Great Learning",
    issuerLogo: "https://mma.prnewswire.com/media/1458111/Great_Learning_Logo.jpg?p=facebook",
    description: "A comprehensive lifecycle overview of data science, ranging from statistical analysis to predictive insights and storytelling.",
    date: "April 2021",
    link: "https://drive.google.com/file/d/17p3hyn0wTdZSzKTSLo_ru1FBdLn3YQ92/view?usp=sharing",
    icon: FileSearch,
    category: "Data Science"
  },

  // --- GOOGLE ---
  {
    id: "google-foundations-data",
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
    description: "Introductory module of the Google Data Analytics Professional Certificate, establishing fundamental concepts in data-driven decision making.",
    date: "Jan 16, 2023",
    link: "https://drive.google.com/file/d/11n7_ccbbxMi2V-t3ongjf65kfnl4CvPe/view?usp=sharing",
    icon: Database,
    category: "Data Analytics"
  },
  {
    id: "google-data-analytics",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
    description: "In-depth specialization covering the complete data analysis lifecycle, including cleaning, analysis, and visualization using R and SQL.",
    date: "Jan 17, 2023",
    link: "https://drive.google.com/file/d/1OPw0nWhxz_e5qWFXlK-Xfcki5G_XDA4i/view?usp=sharing",
    icon: BarChart,
    category: "Professional Certificate"
  },
  {
    id: "google-python-crash",
    title: "Crash Course on Python",
    issuer: "Google",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
    description: "Hands-on Python programming focusing on script automation, basic syntax, and data structures to solve complex computational problems.",
    date: "Aug 14, 2022",
    link: "https://drive.google.com/file/d/1QSpAN264Q8nTDVAzXvCjPqyP8gaSA1K7/view?usp=sharing",
    icon: FileCode,
    category: "Programming"
  },
  {
    id: "google-prepare-data",
    title: "Prepare Data for Exploration",
    issuer: "Google",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
    description: "Mastering techniques to ensure data integrity, organizing data for analysis, and performing foundational exploration in spreadsheet software.",
    date: "Jan 17, 2022",
    link: "https://drive.google.com/file/d/17EOmnvpPzn_JuXZuVQn3gcqlipS2e7oX/view?usp=sharing",
    icon: Search,
    category: "Data Preparation"
  },
  {
    id: "google-dev-theme",
    title: "Badge: Theme and Animation",
    issuer: "Google",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
    description: "Earned for mastering UI styling, custom themes, and motion design principles within Android application development.",
    date: "Sep 2, 2022",
    link: "https://g.dev/thejassreenivasu",
    icon: Palette,
    category: "Android UI"
  },
  {
    id: "google-dev-ui-state",
    title: "Badge: Interacting with UI and State",
    issuer: "Google",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
    description: "Recognized for proficiency in managing application state and creating responsive, interactive user interfaces for mobile devices.",
    date: "Sep 2, 2022",
    link: "https://g.dev/thejassreenivasu",
    icon: MousePointer2,
    category: "Android Dev"
  },
  {
    id: "google-dev-25-codelabs",
    title: "Completed 25 Codelabs Milestone",
    issuer: "Google",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
    description: "Awarded for completing 25 distinct Google Developer codelabs, demonstrating broad technical curiosity and hands-on implementation.",
    date: "Aug 31, 2022",
    link: "https://g.dev/thejassreenivasu",
    icon: CheckCircle,
    category: "Developer Milestone"
  },
  {
    id: "google-dev-kotlin-intro",
    title: "Badge: Introduction to Programming in Kotlin",
    issuer: "Google",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
    description: "Verified foundational skills in Kotlin, the modern preferred language for high-performance Android application development.",
    date: "Aug 31, 2022",
    link: "https://g.dev/thejassreenivasu",
    icon: Code,
    category: "Kotlin"
  },
  {
    id: "google-dev-kotlin-fundamentals",
    title: "Badge: Kotlin Fundamentals",
    issuer: "Google",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
    description: "Advanced competency in Kotlin's core principles, including object-oriented programming and functional syntax elements.",
    date: "Aug 31, 2022",
    link: "https://g.dev/thejassreenivasu",
    icon: Terminal,
    category: "Kotlin"
  },
  {
    id: "google-dev-add-button",
    title: "Badge: Add a Button to an App",
    issuer: "Google",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
    description: "Practical achievement in implementing event-driven UI components and basic interactive logic in Android Studio.",
    date: "Aug 31, 2022",
    link: "https://g.dev/thejassreenivasu",
    icon: MousePointer2,
    category: "Android Basics"
  },
  {
    id: "google-dev-android-studio",
    title: "Badge: Set up Android Studio",
    issuer: "Google",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
    description: "Demonstrated ability to configure the Android development environment and deploy initial test applications to emulators and devices.",
    date: "Aug 31, 2022",
    link: "https://g.dev/thejassreenivasu",
    icon: Settings,
    category: "Environment"
  },
  {
    id: "google-dev-basic-layout",
    title: "Badge: Build a Basic Layout",
    issuer: "Google",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
    description: "Recognized for successfully building structural layouts using ConstraintLayout and other Jetpack Compose/XML components.",
    date: "Aug 31, 2022",
    link: "https://g.dev/thejassreenivasu",
    icon: Layout,
    category: "UI Design"
  },

  // --- AUTODESK ---
  {
    id: "autodesk-design-thinking",
    title: "Principles of Design Thinking",
    issuer: "Autodesk",
    issuerLogo: "https://thumbs.dreamstime.com/b/autodesk-logo-editorial-illustrative-white-background-icon-vector-logos-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-210442293.jpg",
    description: "A specialized course focused on user-centric problem solving, empathy mapping, and creative iteration to develop innovative solutions.",
    date: "12/21/2020",
    link: "https://drive.google.com/file/d/1PySvIRofdaa4pvJYJKJo6obi-vSmd6Vr/view?usp=sharing",
    icon: Lightbulb,
    category: "Design Thinking"
  },
  {
    id: "autodesk-3d-modeling",
    title: "Introduction to 3D Modeling for Manufacturing",
    issuer: "Autodesk",
    issuerLogo: "https://thumbs.dreamstime.com/b/autodesk-logo-editorial-illustrative-white-background-icon-vector-logos-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-210442293.jpg",
    description: "Mastered the core concepts of parametric 3D design and digital prototyping specifically tailored for modern manufacturing workflows.",
    date: "12/21/2020",
    link: "https://drive.google.com/file/d/1wm-YEg7J6QD95ed_mTErlLixI1M18jOP/view?usp=sharing",
    icon: Box,
    category: "Engineering"
  },
  {
    id: "autodesk-cad-cam",
    title: "Integrated CAD/CAM/CNC: Create a CO2 Car",
    issuer: "Autodesk",
    issuerLogo: "https://thumbs.dreamstime.com/b/autodesk-logo-editorial-illustrative-white-background-icon-vector-logos-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-210442293.jpg",
    description: "Learned end-to-end engineering from conceptual CAD design to CAM toolpath generation and CNC production of a high-speed CO2 vehicle.",
    date: "12/21/2020",
    link: "https://drive.google.com/file/d/1eNk5AReAlKRR-gTvuDuYezVpLd4D-JcU/view?usp=sharing",
    icon: Car,
    category: "Engineering"
  },
  {
    id: "autodesk-autocad-prep",
    title: "Autodesk Certified Professional Prep: AutoCAD",
    issuer: "Autodesk",
    issuerLogo: "https://thumbs.dreamstime.com/b/autodesk-logo-editorial-illustrative-white-background-icon-vector-logos-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-210442293.jpg",
    description: "Advanced training in precision drafting and design using AutoCAD, covering professional workflows for architectural and drafting standards.",
    date: "12/21/2020",
    link: "https://drive.google.com/file/d/1srfq5rqzhbFjUxN_E6_Nhq57QpdASkIm/view?usp=sharing",
    icon: PenTool,
    category: "Drafting"
  },
  {
    id: "autodesk-bim",
    title: "BIM: Highway and Transportation Infrastructure",
    issuer: "Autodesk",
    issuerLogo: "https://thumbs.dreamstime.com/b/autodesk-logo-editorial-illustrative-white-background-icon-vector-logos-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-210442293.jpg",
    description: "Comprehensive study of Building Information Modeling (BIM) principles applied to roads, highways, and transport network infrastructure.",
    date: "12/21/2020",
    link: "https://drive.google.com/file/d/16SrwMW10G9iIQrgWmRf4Ts2CtzRrOGG-/view?usp=sharing",
    icon: Map,
    category: "Infrastructure"
  },

  // --- AUTOMATION ANYWHERE ---
  {
    id: "aa-rpa-getting-started",
    title: "Getting Started with Robotic Process Automation (RPA)",
    issuer: "Automation Anywhere",
    issuerLogo: "https://cdn.freelogovectors.net/wp-content/uploads/2020/06/automation-anywhere-logo.png",
    description: "Foundational course on RPA concepts, exploring how software bots can emulate human actions to automate repetitive business tasks.",
    date: "12/30/2020",
    link: "https://drive.google.com/file/d/17jc37ZdfeFKYw6deXm1gI_BrUfluOWZW/view?usp=sharing",
    icon: Zap,
    category: "RPA"
  },
  {
    id: "aa-hello-a2019",
    title: "Hello A2019 Bot: Getting Started with Building Bots",
    issuer: "Automation Anywhere",
    issuerLogo: "https://cdn.freelogovectors.net/wp-content/uploads/2020/06/automation-anywhere-logo.png",
    description: "Hands-on bot development using the cloud-native Automation 360 platform, mastering initial steps of digital automation.",
    date: "12/30/2020",
    link: "https://drive.google.com/file/d/17jc37ZdfeFKYw6deXm1gI_BrUfluOWZW/view?usp=sharing",
    icon: Bot,
    category: "Bot Dev"
  },
  {
    id: "aa-rpa-vs-traditional",
    title: "RPA is Simple yet Powerful vs Traditional Automation",
    issuer: "Automation Anywhere",
    issuerLogo: "https://cdn.freelogovectors.net/wp-content/uploads/2020/06/automation-anywhere-logo.png",
    description: "Strategic analysis comparing low-code RPA benefits against traditional coding for speed and efficiency.",
    date: "12/30/2020",
    link: "https://drive.google.com/file/d/1csCnbBgWs1jGX7jjQWR5yRq2CH1zljIW/view?usp=sharing",
    icon: Brain,
    category: "Strategy"
  },
  {
    id: "aa-excel-advanced",
    title: "Automating Tasks Using Automation 360 Excel Advanced",
    issuer: "Automation Anywhere",
    issuerLogo: "https://cdn.freelogovectors.net/wp-content/uploads/2020/06/automation-anywhere-logo.png",
    description: "Mastering complex Excel manipulation and data processing within automated workflows.",
    date: "07/30/2021",
    link: "https://drive.google.com/file/d/14PFK14mCCwDe66iWocytCo5k4YTDY6ig/view?usp=sharing",
    icon: FileSpreadsheet,
    category: "Data Automation"
  },
  {
    id: "aa-universal-recorder",
    title: "Automating Tasks Using Automation 360 Universal Recorder",
    issuer: "Automation Anywhere",
    issuerLogo: "https://cdn.freelogovectors.net/wp-content/uploads/2020/06/automation-anywhere-logo.png",
    description: "Precision capture of user interactions across diverse applications using the Universal Recorder tool.",
    date: "07/30/2021",
    link: "https://drive.google.com/file/d/14PFK14mCCwDe66iWocytCo5k4YTDY6ig/view?usp=sharing",
    icon: Activity,
    category: "Bot Interaction"
  },
  {
    id: "aa-scalable-bots",
    title: "Building Scalable Bots Using Automation 360",
    issuer: "Automation Anywhere",
    issuerLogo: "https://cdn.freelogovectors.net/wp-content/uploads/2020/06/automation-anywhere-logo.png",
    description: "Engineering principles for bots that perform consistently across enterprise-scale environments.",
    date: "07/30/2021",
    link: "https://drive.google.com/file/d/1OjduOAqfCp0dBiDk8suYzXzZg-sD69BT/view?usp=sharing",
    icon: Maximize,
    category: "Architecture"
  },
  {
    id: "aa-resilient-bots",
    title: "Building Resilient Bots Using Automation 360",
    issuer: "Automation Anywhere",
    issuerLogo: "https://cdn.freelogovectors.net/wp-content/uploads/2020/06/automation-anywhere-logo.png",
    description: "Implementing self-healing logic and advanced error handling to maintain high bot uptime.",
    date: "07/30/2021",
    link: "https://drive.google.com/file/d/1ymvoD-AgcB6I_lUVPedW6vn7psmUbATL/view?usp=sharing",
    icon: ShieldCheck,
    category: "Resilience"
  },

  // --- AWS ---
  {
    id: "aws-practitioner",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    description: "Comprehensive introduction to AWS cloud concepts, security, core services, and foundational architecture.",
    date: "12 Feb 2021",
    link: "https://drive.google.com/file/d/17rEdB_avc3pryldcG5SKvhzyENvAh6R3/view?usp=sharing",
    icon: Cloud,
    category: "Cloud Essentials"
  },
  {
    id: "aws-kinesis-msk",
    title: "AWS PartnerCast: Amazon Kinesis & MSK",
    issuer: "AWS",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    description: "Technical update on real-time data streaming capabilities using Kinesis and Managed Streaming for Kafka (MSK).",
    date: "19 April 2021",
    link: "https://drive.google.com/file/d/1MFY9CaruLKKX_bzVc30SRMwxt_C3u_uW/view?usp=sharing",
    icon: Activity,
    category: "Streaming Data"
  },
  {
    id: "aws-streaming-ai",
    title: "Streaming Video with AI Services",
    issuer: "AWS",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    description: "Implementing automated captions, subtitles, and audio tracks for video streams using AWS AI tools like Transcribe and Translate.",
    date: "14 June 2021",
    link: "https://drive.google.com/file/d/1e3Mzu0iXp87jzcWr2SgNynrQYFfgpRHL/view?usp=sharing",
    icon: Video,
    category: "AI & Media"
  },
  {
    id: "aws-security-2nd-ed",
    title: "AWS Security Fundamentals (2nd Ed)",
    issuer: "AWS",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    description: "Deep dive into securing cloud workloads, covering identity management, data protection, and network security foundations.",
    date: "14 June 2021",
    link: "https://drive.google.com/file/d/1eHWWLre-mt_PiQV2Kq8yOjxRKyYmOu-5/view?usp=sharing",
    icon: Lock,
    category: "Cloud Security"
  },
  {
    id: "aws-ml-security",
    title: "AWS Machine Learning Security",
    issuer: "AWS",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    description: "Specialized training in securing ML pipelines, protecting models, and ensuring data privacy within the AWS ecosystem.",
    date: "14 June 2021",
    link: "https://drive.google.com/file/d/1eMUpvWJa7-fbf6Ks4BTD6ayzMPb1rjTD/view?usp=sharing",
    icon: Brain,
    category: "AI Security"
  },
  {
    id: "aws-serverless-biz",
    title: "APN Navigate: Serverless - Business",
    issuer: "AWS",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    description: "Strategic perspectives on leveraging serverless architectures to drive business agility and cost optimization.",
    date: "20 April 2021",
    link: "https://drive.google.com/file/d/18yt3kY45XVZdmFy6a02jwJtERehwnznL/view?usp=sharing",
    icon: Zap,
    category: "Serverless"
  },
  {
    id: "aws-iot-citizen",
    title: "IoT First Class Cloud Citizen",
    issuer: "AWS",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    description: "Integrating physical hardware with AWS cloud for robust data collection, device management, and real-time processing.",
    date: "20 April 2021",
    link: "https://drive.google.com/file/d/1HmyJUjvSXSf53loMrrDbGFNn4i9snq4h/view?usp=sharing",
    icon: Wifi,
    category: "IoT"
  },
  {
    id: "aws-athena-lake-glue",
    title: "AWS PartnerCast: Athena, Lake Formation & Glue",
    issuer: "AWS",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    description: "Technical training on building modern serverless data lakes and ETL pipelines for high-scale analytics.",
    date: "19 April 2021",
    link: "https://drive.google.com/file/d/1pGk9X4VsGS2yFN9z_0m3XeElGxT06zHU/view?usp=sharing",
    icon: Database,
    category: "Big Data"
  },
  {
    id: "aws-ec2-intro",
    title: "Introduction to Amazon EC2",
    issuer: "AWS",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    description: "Foundational knowledge of Elastic Computer Cloud for provisioning, managing, and scaling virtual servers.",
    date: "12 Feb 2021",
    link: "https://drive.google.com/file/d/1rS95dwqvmFUkYNDDORLofEJY3wyeM4CR/view?usp=sharing",
    icon: Monitor,
    category: "Compute"
  },
  {
    id: "aws-academy-foundations",
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "AWS",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    description: "Comprehensive academic program covering cloud computing concepts, core services, and architectural best practices.",
    date: "05/27/2022",
    link: "https://drive.google.com/file/d/11BDeslrsDTComK8sdLzjvS5uVySw3NVk/view?usp=sharing",
    icon: GraduationCap,
    category: "Education"
  },
  {
    id: "aws-vpc-vpn-support",
    title: "AWS Effective Support Case: VPC/VPN",
    issuer: "AWS",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    description: "Mastering diagnostic workflows for hybrid cloud networking connectivity through partner-led support.",
    date: "17 April 2021",
    link: "https://drive.google.com/file/d/1I9kyy7xZnDADZL2l3I59HwFVbbNH2ZBC/view?usp=sharing",
    icon: Network,
    category: "Networking"
  },
  {
    id: "aws-serverless-dotnet",
    title: "Serverless .NET Applications on AWS",
    issuer: "AWS",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    description: "Building enterprise-grade applications with .NET Core using AWS Lambda for serverless backends.",
    date: "17 April 2021",
    link: "https://drive.google.com/file/d/1IQVZGJNbeVeW0CXMZdXpDlI6lAI7CCpq/view?usp=sharing",
    icon: Code,
    category: "Development"
  },
  {
    id: "aws-cloudwatch-agent",
    title: "Amazon CloudWatch Agent Optimization",
    issuer: "AWS",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    description: "Deploying and fine-tuning monitoring agents for advanced observability and system logging across EC2 fleets.",
    date: "17 April 2021",
    link: "https://drive.google.com/file/d/1IRVq3v6KbUJKKTOIydCFvLhqLY-mooHV/view?usp=sharing",
    icon: Activity,
    category: "Monitoring"
  },
  {
    id: "aws-cloud-101",
    title: "AWS Educate: Cloud Computing 101",
    issuer: "AWS",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    description: "Academic exploration of the fundamental technologies and business value of the modern cloud computing era.",
    date: "17 April 2021",
    link: "https://drive.google.com/file/d/1IxOTVmPV9vhHCaacyBFFjG7vL4MYWJCs/view?usp=sharing",
    icon: Cloud,
    category: "Foundations"
  },
  {
    id: "aws-alexa-readiness",
    title: "Exam Readiness: Alexa Skill Builder",
    issuer: "AWS",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    description: "Preparation for building complex voice interactions, Interaction Models, and conversational AI for voice-first devices.",
    date: "15 Feb 2021",
    link: "https://drive.google.com/file/d/1eDCjKRelHfKT4d5Cka-DfwyPDoiJbRqV/view?usp=sharing",
    icon: Mic,
    category: "Voice AI"
  },
  {
    id: "aws-folder-more",
    title: "Additional AWS Technical Certifications",
    issuer: "AWS",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    description: "A comprehensive repository of further specialized training modules and partner-level AWS technical certifications.",
    date: "2021-2022",
    link: "https://drive.google.com/drive/folders/1euxEhFtQoTVenALU35-B2SKWZkiGNs4L?usp=drive_link",
    icon: FolderOpen,
    category: "Advanced Cloud"
  },

  // --- CISCO ---
  {
    id: "cisco-cyber-ict",
    title: "Cybersecurity Essentials (ICT Academy)",
    issuer: "CISCO",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1024px-Cisco_logo_blue_2016.svg.png",
    description: "Mastering foundational security principles, threat landscape analysis, and implementation of robust network defense strategies.",
    date: "14 Oct 2021",
    link: "https://drive.google.com/file/d/1MvHVPdedp8UvxM_5fesiJ6E0d3X6-s0R/view?usp=sharing",
    icon: ShieldCheck,
    category: "Security"
  },
  {
    id: "cisco-cyber-netacad",
    title: "Cybersecurity Essentials (Networking Academy)",
    issuer: "CISCO",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1024px-Cisco_logo_blue_2016.svg.png",
    description: "Advanced training in securing confidential data, identifying vulnerabilities, and protecting enterprise-level digital assets.",
    date: "27 Jul 2021",
    link: "https://drive.google.com/file/d/1MvHVPdedp8UvxM_5fesiJ6E0d3X6-s0R/view?usp=sharing",
    icon: Lock,
    category: "Security"
  },
  {
    id: "cisco-linux-unhatched",
    title: "Partner: NDG Linux Unhatched",
    issuer: "CISCO",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1024px-Cisco_logo_blue_2016.svg.png",
    description: "Hands-on proficiency in the Linux command line and foundational system administration for backend and server environments.",
    date: "19 Dec 2020",
    link: "https://drive.google.com/file/d/1MvHVPdedp8UvxM_5fesiJ6E0d3X6-s0R/view?usp=sharing",
    icon: Terminal,
    category: "OS Foundations"
  },
  {
    id: "cisco-cyber-global",
    title: "Cybersecurity Essentials (Global Academy)",
    issuer: "CISCO",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1024px-Cisco_logo_blue_2016.svg.png",
    description: "Strategic study of procedural controls, technical safeguards, and incident response protocols in a modern security environment.",
    date: "19 Dec 2020",
    link: "https://drive.google.com/file/d/1MvHVPdedp8UvxM_5fesiJ6E0d3X6-s0R/view?usp=sharing",
    icon: Shield,
    category: "Security"
  },
  {
    id: "cisco-packet-tracer",
    title: "Introduction to Packet Tracer",
    issuer: "CISCO",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1024px-Cisco_logo_blue_2016.svg.png",
    description: "Learning network simulation and configuration to build, troubleshoot, and visualize complex virtual network topologies.",
    date: "19 Dec 2020",
    link: "https://drive.google.com/file/d/1MvHVPdedp8UvxM_5fesiJ6E0d3X6-s0R/view?usp=sharing",
    icon: Layers,
    category: "Networking"
  },
  {
    id: "cisco-entrepreneurship",
    title: "Entrepreneurship",
    issuer: "CISCO",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1024px-Cisco_logo_blue_2016.svg.png",
    description: "Merging technical innovation with business strategy, focusing on the steps to launch and manage a successful tech-driven venture.",
    date: "19 Dec 2020",
    link: "https://drive.google.com/file/d/1MvHVPdedp8UvxM_5fesiJ6E0d3X6-s0R/view?usp=sharing",
    icon: Idea,
    category: "Business"
  },
  {
    id: "cisco-intro-cyber-ict",
    title: "Introduction to Cybersecurity",
    issuer: "CISCO",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1024px-Cisco_logo_blue_2016.svg.png",
    description: "Foundational course establishing core security awareness, covering malware, social engineering, and basic protection techniques.",
    date: "18 Dec 2020",
    link: "https://drive.google.com/file/d/1MvHVPdedp8UvxM_5fesiJ6E0d3X6-s0R/view?usp=sharing",
    icon: Brain,
    category: "Security"
  },
  {
    id: "cisco-net-essentials",
    title: "Networking Essentials",
    issuer: "CISCO",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1024px-Cisco_logo_blue_2016.svg.png",
    description: "Deep dive into network protocols, hardware, IP addressing, and the foundational architecture of the modern internet.",
    date: "27 Jul 2021",
    link: "https://drive.google.com/file/d/1MvHVPdedp8UvxM_5fesiJ6E0d3X6-s0R/view?usp=sharing",
    icon: Network,
    category: "Networking"
  },
  {
    id: "cisco-intro-cyber-netacad",
    title: "Introduction to Cybersecurity (NetAcad)",
    issuer: "CISCO",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1024px-Cisco_logo_blue_2016.svg.png",
    description: "Professional certification from the Cisco Networking Academy focusing on the vital importance of security for businesses.",
    date: "27 Jul 2021",
    link: "https://drive.google.com/file/d/1MvHVPdedp8UvxM_5fesiJ6E0d3X6-s0R/view?usp=sharing",
    icon: ShieldCheck,
    category: "Security"
  },

  // --- UC SAN DIEGO & HSE ---
  {
    id: "ucsd-hse-data-structures",
    title: "Data Structures",
    issuer: "UC San Diego & HSE",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/UCSD_Seal.svg/1024px-UCSD_Seal.svg.png",
    description: "Advanced academic course on data structure implementation, algorithmic complexity, and efficient data handling.",
    date: "2021",
    link: "https://drive.google.com/file/d/1cnNFHvcyknwiWLdP5wG8E0v6iHHo_fcU/view?usp=sharing",
    icon: Database,
    category: "Algorithms"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "infinite-wik",
    title: "Infinite Wik",
    description: "An infinite scrolling knowledge explorer that allows seamless navigation through wiki-style content.",
    tags: ["Web", "API Integration", "React", "Infinite Scroll"],
    icon: Globe,
    githubUrl: "https://github.com/Thejas10042001/Infinite-Wik",
    longDescription: "Infinite Wik was designed to bridge the gap in digital knowledge consumption by eliminating the static nature of traditional encyclopedic websites. By leveraging high-performance API calls and React's efficient rendering, I built a 'knowledge feed' that keeps users engaged. The main technical challenge was managing memory and DOM performance as the scroll deepens, which was solved through virtualized list techniques and lazy-loading of media assets.",
    features: [
      "Dynamic data fetching from Wikipedia Rest APIs", 
      "Optimized scroll performance with Intersection Observer", 
      "Contextual recommendation engine based on current view", 
      "Dark-mode optimized responsive design",
      "One-click source validation and verification"
    ]
  },
  {
    id: "video-analysis",
    title: "Video Analysis",
    description: "A comprehensive video processing tool using computer vision to analyze and extract insights from video content.",
    tags: ["Computer Vision", "AI", "Python", "Video"],
    icon: Video,
    githubUrl: "https://github.com/Thejas10042001/Video-Analysis-",
    longDescription: "This project addresses the critical need for automated security and content moderation. Developed using OpenCV and Python, the system performs real-time frame analysis to detect anomalies or specific object patterns. I implemented a robust pipeline that includes noise reduction, background subtraction, and object tracking. The result is a high-accuracy system capable of processing 30+ frames per second on standard hardware.",
    features: [
      "Real-time object detection using YOLOv8 models", 
      "Motion heat-map generation for high-traffic zones", 
      "Automated event tagging and time-stamped logging", 
      "Support for multi-stream IP camera integration",
      "Low-latency processing optimized for edge devices"
    ]
  },
  {
    id: "video-learning",
    title: "Video to Learning App",
    description: "Transforms educational videos into structured learning materials using AI to generate notes and summaries.",
    tags: ["AI", "Education", "Video Processing"],
    icon: Video,
    githubUrl: "https://github.com/Thejas10042001/Video-to-Learning-App",
    longDescription: "The 'Video to Learning App' aims to democratize education by making video content more accessible and interactive. By integrating Generative AI, the app converts spoken words into structured text and subsequently into study materials. I used Whisper for high-fidelity transcription and fine-tuned LLMs for summarizing complex academic topics. This tool significantly reduces the time students spend taking manual notes from video lectures.",
    features: [
      "Multilingual audio-to-text transcription using Whisper AI", 
      "AI-driven summary generation with key concept extraction", 
      "Automated flashcard and quiz generation from lecture content", 
      "Searchable timestamped index for long educational videos",
      "Interactive note-taking interface synchronized with playback"
    ]
  },
  {
    id: "human-safety",
    title: "Human Safety Precautions",
    description: "An AI-based system designed to monitor and enforce safety protocols by detecting safety gear violations.",
    tags: ["AI", "Computer Vision", "Safety", "Python"],
    icon: ShieldCheck,
    githubUrl: "https://github.com/Thejas10042001/Human-Safety-Precautions-",
    longDescription: "Focused on industrial safety, this project utilizes Computer Vision to detect PPE (Personal Protective Equipment) in real-time. The system is trained to recognize helmets, vests, and goggles. I addressed the challenge of variable lighting and occlusion in industrial environments by using a custom-trained dataset. It acts as a 24/7 safety supervisor, significantly reducing the risk of workplace accidents.",
    features: [
      "Custom-trained CNN for PPE detection (Helmet, Vest, Goggles)", 
      "Audio-visual alarm system for immediate violation alerts", 
      "Admin dashboard with real-time safety compliance metrics", 
      "Historical data logging for safety audits and reporting",
      "Cloud-ready architecture for remote site monitoring"
    ]
  },
  {
    id: "cnn-visualization",
    title: "CNN Visualization",
    description: "A deep learning visualization tool that illustrates the internal layers and feature maps of CNNs.",
    tags: ["Deep Learning", "CNN", "Visualization", "Python"],
    icon: Brain,
    githubUrl: "https://github.com/Thejas10042001/CNN-VISUALTION",
    longDescription: "One of the biggest hurdles in AI adoption is the 'black box' problem. This project visualizes what a Convolutional Neural Network 'sees' at each layer. By extracting and rendering feature maps and filter weights, I created an educational tool that helps researchers understand model behavior. This project uses PyTorch and Matplotlib to provide an interactive look into the mathematical layers of deep learning models.",
    features: [
      "Layer-by-layer activation map visualization", 
      "Filter weight rendering and kernel analysis", 
      "Guided backpropagation for feature importance mapping", 
      "Interactive model selection and image input testing",
      "Real-time rendering of convolutional mathematical operations"
    ]
  },
  {
    id: "image-to-code",
    title: "Image to Code",
    description: "An innovative tool that converts images into executable code, bridging the gap between design and implementation.",
    tags: ["AI", "Computer Vision", "Code Generation"],
    icon: Image,
    githubUrl: "https://github.com/Thejas10042001/Image-to-code",
    longDescription: "The 'Image to Code' tool is a productivity multiplier for frontend developers. It uses Multi-modal AI to analyze UI mockups and translate them into clean, responsive HTML/CSS or React code. I integrated Gemini's Vision capabilities to handle layout understanding and semantic tagging. The system doesn't just produce code; it produces organized, modular components that follow modern web standards.",
    features: [
      "AI-powered layout and component recognition", 
      "Instant conversion to React, HTML5, and Tailwind CSS", 
      "Semantic HTML generation for better SEO and accessibility", 
      "Real-time live preview of the generated frontend",
      "Asset extraction and automatic CSS variable generation"
    ]
  },
  {
    id: "neurolens-guardian",
    title: "NeuroLens Meeting Guardian",
    description: "Advanced AI monitoring and security system for virtual meetings, ensuring a safe collaboration environment.",
    tags: ["AI", "Security", "Monitoring"],
    icon: ShieldCheck,
    githubUrl: "https://github.com/Thejas10042001/NeuroLens-Meeting-Guardian",
    longDescription: "NeuroLens Meeting Guardian provides an extra layer of security for corporate and academic virtual meetings. It uses facial recognition and anomaly detection to identify unauthorized participants. I implemented a secure authentication system that runs silently in the background of meeting platforms. The system also monitors for inappropriate content or policy violations, ensuring a safe and professional environment.",
    features: [
      "Continuous biometric authentication for participants", 
      "Unauthorized presence alerts with instant lock-out", 
      "Automated attendance tracking and identity verification", 
      "Real-time content filtering and policy enforcement",
      "Encrypted security logs for post-meeting review"
    ]
  },
  {
    id: "mca-project",
    title: "MCA Academic Project",
    description: "A major academic project demonstrating advanced proficiency in software engineering and application development.",
    tags: ["MCA", "Academic", "Full Stack"],
    icon: GraduationCap,
    githubUrl: "https://github.com/Thejas10042001/MCA-PROEJCT",
    longDescription: "This capstone project showcases the full software development lifecycle (SDLC) from requirement analysis to deployment. It is a comprehensive enterprise application involving complex database relations, multi-user authentication, and a scalable cloud-hosted backend. I focused on clean architecture and design patterns to ensure the code is maintainable and scalable, meeting the high standards of the MCA curriculum.",
    features: [
      "Comprehensive Full-Stack architecture (MERN/Java)", 
      "Advanced RDBMS schema design with data integrity checks", 
      "Role-based Access Control (RBAC) and JWT security", 
      "RESTful API design with full documentation (Swagger)",
      "Automated CI/CD pipeline for cloud deployment"
    ]
  },
  {
    id: "update-meeting",
    title: "Update Meeting",
    description: "A meeting management and scheduling application designed to streamline updates and collaboration.",
    tags: ["Scheduling", "Management", "Web"],
    icon: CalendarClock,
    githubUrl: "https://github.com/Thejas10042001/UPDATE-MEETING",
    longDescription: "Modern teams struggle with meeting fatigue. 'Update Meeting' optimizes the scheduling process by finding the perfect time slots based on collective availability. I built this using a sophisticated graph-based algorithm to handle conflicting timezones and varying work hours. It integrates with major calendar providers to ensure all data is synchronized and up-to-date, reducing administrative overhead.",
    features: [
      "Intelligent time-slot recommendation engine", 
      "Conflict detection and automatic rescheduling", 
      "Multi-calendar synchronization (Google, Outlook)", 
      "Automated agenda and meeting minutes distribution",
      "Interactive team availability heat-map"
    ]
  },
  {
    id: "neuro-lens",
    title: "Neuro Lens Meeting",
    description: "AI-powered meeting analysis platform designed to enhance virtual collaboration through real-time processing.",
    tags: ["AI", "Meeting", "Analytics"],
    icon: Video,
    githubUrl: "https://github.com/Thejas10042001/Neuro-lens-meeting",
    longDescription: "This platform focuses on the 'human' side of virtual interaction. By analyzing non-verbal cues and sentiment during a meeting, Neuro Lens provides insights into team engagement and morale. I used affective computing models to process facial expressions and voice tone. The dashboard provides managers with actionable feedback on meeting effectiveness, helping to build better remote team cultures.",
    features: [
      "Real-time sentiment and engagement tracking", 
      "Automated topic modeling and keyword extraction", 
      "AI-generated actionable insights for meeting leads", 
      "Speaker diarization and talk-time distribution analysis",
      "Post-meeting sentiment trend reports"
    ]
  },
  {
    id: "movie-analytics",
    title: "Movie Analytics Dashboard",
    description: "Interactive dashboard for visualizing movie trends, box office collections, and genre popularity.",
    tags: ["Data Analytics", "Visualization", "Dashboard"],
    icon: Film,
    githubUrl: "https://github.com/Thejas10042001/Movie-Analytics-Dashboard",
    longDescription: "Using a dataset of over 50,000 movies, this dashboard provides a high-level view of the film industry's evolution. I focused on data storytelling, using interactive charts to show correlations between budget, genre, and critical reception. The technical stack involves D3.js for custom visualizations and Python for data cleaning. It allows users to drill down from global trends to specific studios or actors.",
    features: [
      "Interactive multi-dimensional data filtering", 
      "Budget vs. Revenue correlation heat-maps", 
      "Actor and Director influence network graphs", 
      "Genre popularity trends over multiple decades",
      "Real-time data fetching from TMDB and IMDb APIs"
    ]
  },
  {
    id: "job-market",
    title: "Job Market Analyzers",
    description: "A comprehensive data analysis tool designed to scrape and analyze job market trends and skill demands.",
    tags: ["Data Analytics", "Python", "Visualization", "Scraping"],
    icon: Briefcase,
    githubUrl: "https://github.com/Thejas10042001/JOB-MARKET-ANALYZERS-",
    longDescription: "In a rapidly changing tech world, this tool helps professionals stay ahead. It scrapes job boards like LinkedIn and Indeed to identify the most in-demand skills in real-time. I implemented Natural Language Processing (NLP) to extract technical requirements from job descriptions. The app provides a personalized 'gap analysis' for users, suggesting skills they need to learn to meet their career goals.",
    features: [
      "Automated web scraping of multiple job platforms", 
      "NLP-based skill demand and tech stack extraction", 
      "Salary benchmarking by region and experience level", 
      "Personalized skill-gap analysis and learning path suggestions",
      "Interactive hiring trend dashboards for tech sectors"
    ]
  },
  {
    id: "ai-portfolio",
    title: "AI Portfolio Website",
    description: "Dynamic portfolio featuring an interactive Gemini-powered AI chatbot that answers resume questions.",
    tags: ["Google AI Studio", "Gemini API", "React", "Framer Motion"],
    icon: Sparkles,
    longDescription: "This website itself is a project! It redefines the personal portfolio by making it a living, interactive experience. I integrated the Gemini 1.5 Flash API to create a chatbot that knows my resume by heart. The UI is built for performance and aesthetics, utilizing Framer Motion for high-end animations and Tailwind CSS for a responsive, modern layout that works flawlessly on all devices.",
    features: [
      "Gemini AI integration with context-aware resume chat", 
      "High-performance animations using Framer Motion", 
      "Fully responsive, dark-mode first design", 
      "Dynamic data-driven components (Skills, Projects, Certs)",
      "Zero-latency navigation with React single-page architecture"
    ]
  },
  {
    id: "mood2food",
    title: "Mood2Food",
    description: "AI-powered mood sensing & food recommendation app with emotion detection and recipe integration.",
    tags: ["AI", "React", "Emotion Detection", "Food API"],
    icon: Brain,
    longDescription: "Mood2Food is a unique wellness app that suggests meals based on your current emotional state. Using the camera, the app detects emotions like stress, happiness, or fatigue. It then queries a nutrition database to recommend foods that balance your mood (e.g., magnesium-rich foods for stress). I combined Computer Vision with Nutrition Science to create a truly holistic user experience.",
    features: [
      "Real-time facial emotion recognition using TensorFlow.js", 
      "Emotion-to-Nutrition mapping algorithm", 
      "Integration with Spoonacular API for recipe discovery", 
      "Mood-tracking calendar with dietary correlation reports",
      "Personalized health and wellness lifestyle tips"
    ]
  },
  {
    id: "stockgenius",
    title: "StockGenius AI",
    description: "Real-time Indian stock market analytics platform with 17+ AI-driven modules for trading strategies.",
    tags: ["FinTech", "AI/ML", "Analytics", "Real-time"],
    icon: TrendingUp,
    longDescription: "StockGenius AI is a powerhouse for retail investors in the Indian market. It provides deep technical and fundamental analysis using 17 specialized AI modules, including LSTM for time-series forecasting and sentiment analysis for news. I designed the system to handle real-time data streams from NSE/BSE APIs, providing users with live signals and automated strategy backtesting capabilities.",
    features: [
      "17 specialized AI modules for technical/fundamental analysis", 
      "Real-time market data streaming and live signaling", 
      "Automated strategy backtesting with historical data", 
      "Sentiment analysis of financial news and social media",
      "Portfolio optimization using modern portfolio theory"
    ]
  },
  {
    id: "phishguard",
    title: "PhishGuard AI",
    description: "AI-based phishing website & email detector for real-time cybersecurity protection.",
    tags: ["Cybersecurity", "AI", "Web Safety"],
    icon: ShieldCheck,
    longDescription: "PhishGuard AI provides a proactive defense against cyber fraud. Unlike traditional signature-based systems, it uses deep learning to analyze URL structures, domain age, and page content to identify 'zero-day' phishing sites. I built this to act as a real-time gatekeeper for web browsing. The system's high precision ensures that users are protected without being blocked by false positives.",
    features: [
      "Deep Learning model for zero-day phishing detection", 
      "Real-time URL structure and domain reputation analysis", 
      "Browser extension for instant web-page verification", 
      "Email content analysis for social engineering detection",
      "Global threat intelligence sharing and reporting"
    ]
  },
  {
    id: "ecotrack",
    title: "EcoTrack",
    description: "Carbon footprint tracker with AI-powered lifestyle recommendations.",
    tags: ["Sustainability", "AI", "Tracker"],
    icon: Leaf,
    longDescription: "EcoTrack empowers individuals to take meaningful action against climate change. The app tracks daily activities (travel, diet, energy) and calculates a real-time carbon footprint. I used AI to provide personalized 'nudges'—small lifestyle changes that have a large cumulative impact. The app also features a gamified 'eco-leaderboard' to encourage community-wide sustainability efforts.",
    features: [
      "Personalized Carbon Footprint calculation engine", 
      "AI-driven sustainable lifestyle recommendations", 
      "Integration with smart home devices for energy tracking", 
      "Gamified environmental goals and achievements",
      "Visual data insights into personal ecological impact"
    ]
  },
  {
    id: "iot-weather",
    title: "IoT Weather Monitor",
    description: "ESP8266-based IoT solution for real-time local climate data collection.",
    tags: ["IoT", "Hardware", "Real-time Data"],
    icon: CloudRain,
    longDescription: "Built as a hardware-software hybrid, this project uses an ESP8266 microcontroller and various sensors (DHT22, BMP280) to collect hyper-local weather data. The data is transmitted via MQTT to a cloud server, where it's displayed on a custom React dashboard. I focused on low-power consumption and reliable data transmission in intermittent network conditions, making it suitable for remote agricultural monitoring.",
    features: [
      "Hardware integration with ESP8266 and climate sensors", 
      "Real-time data transmission using MQTT protocol", 
      "Cloud-synced live dashboard with historical graphs", 
      "Threshold-based mobile alerts for extreme conditions",
      "Solar-powered design for long-term remote deployment"
    ]
  },
  {
    id: "voting-system",
    title: "Online Voting System",
    description: "Aadhar OTP simulation with secure login and voting mechanism.",
    tags: ["Security", "Web", "Simulation"],
    icon: Vote,
    longDescription: "Addressing the need for secure digital democracy, this project simulates a robust online voting platform. It uses a multi-factor authentication process, including an Aadhar-based OTP simulation to ensure 'one person, one vote'. The backend is designed with high-security standards to prevent tampering and ensure ballot anonymity. It provides a blueprint for how large-scale digital elections could be conducted safely.",
    features: [
      "Secure Multi-factor authentication (Aadhar OTP simulation)", 
      "Tamper-proof digital ballot box with encryption", 
      "Real-time result auditing and transparency dashboard", 
      "Admin panel for election management and monitoring",
      "Scalable architecture to handle high-volume traffic"
    ]
  },
  {
    id: "timetable",
    title: "Timetable Generator",
    description: "Automated scheduling system with breaks and subject allocations.",
    tags: ["Automation", "Algorithms", "Productivity"],
    icon: CalendarClock,
    longDescription: "The Timetable Generator solves a classic NP-hard problem using genetic algorithms. It automates the complex task of creating schedules for schools or colleges, taking into account teacher availability, room capacity, and subject constraints. I implemented a fitness function that prioritizes student well-being (e.g., avoiding too many consecutive difficult subjects) and minimizes resource conflicts.",
    features: [
      "Genetic Algorithm for optimal schedule generation", 
      "Complex constraint handling (Teacher, Room, Subject)", 
      "Flexible admin dashboard for resource management", 
      "Export capabilities to PDF and calendar formats",
      "Automated conflict detection and manual override"
    ]
  }
];

export const SYSTEM_PROMPT = `
You are the AI Portfolio Assistant for Thejas Sreenivasu. Your role is to represent Thejas professionally, answering questions about his 20+ projects, education, and 150+ professional certifications.

He has major credentials from:
1. Microsoft Learn (Deep expertise in Azure Cloud, Enterprise Security MS-500, Power Platform, and Conversational AI.)
2. Celonis (A global leader in Process Mining and Execution Management.)
3. UiPath (Leading enterprise Robotic Process Automation platform specializing in AI-driven automation.)
4. HackerRank (Premier technical assessment platform for verified skills and competitive programming.)
5. Great Learning (Global leader in professional learning, specialized in AI and Data Science.)
6. Google (Data Analytics & Android Development.)
7. Autodesk (Design & Engineering.)
8. Automation Anywhere (RPA & Bot Development.)
9. AWS (Cloud Architecture & Security.)
10. CISCO (Networking & Cybersecurity.)
11. UC San Diego & HSE (Data Structures.)

He is an MCA student at RVIT specializing in AI and Full-Stack development.
`;
