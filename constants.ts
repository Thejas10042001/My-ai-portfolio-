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
  Key
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
    description: "Foundational knowledge of Elastic Compute Cloud for provisioning, managing, and scaling virtual servers.",
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
    longDescription: "Addressed the fragmentation of online knowledge discovery by building a unified platform that eliminates pagination friction. Infinite Wik fetches data from Wikipedia APIs dynamically, allowing users to scroll endlessly through related topics.",
    features: ["Seamless infinite scrolling", "Wikipedia API integration", "Responsive UI", "Instant search"]
  },
  {
    id: "video-analysis",
    title: "Video Analysis",
    description: "A comprehensive video processing tool using computer vision to analyze and extract insights from video content.",
    tags: ["Computer Vision", "AI", "Python", "Video"],
    icon: Video,
    githubUrl: "https://github.com/Thejas10042001/Video-Analysis-",
    longDescription: "Solved the challenge of manual video review in surveillance by creating an automated analysis system using advanced computer vision techniques.",
    features: ["Real-time processing", "YOLO Object detection", "Motion tracking", "Event logging"]
  },
  {
    id: "video-learning",
    title: "Video to Learning App",
    description: "Transforms educational videos into structured learning materials using AI to generate notes and summaries.",
    tags: ["AI", "Education", "Video Processing"],
    icon: Video,
    githubUrl: "https://github.com/Thejas10042001/Video-to-Learning-App",
    longDescription: "Tackled the issue of passive learning from video lectures by developing an AI-driven tool that converts video content into active study aids.",
    features: ["Lecture transcription", "AI concept extraction", "Note generation", "Quiz creation"]
  },
  {
    id: "human-safety",
    title: "Human Safety Precautions",
    description: "An AI-based system designed to monitor and enforce safety protocols by detecting safety gear violations.",
    tags: ["AI", "Computer Vision", "Safety", "Python"],
    icon: ShieldCheck,
    githubUrl: "https://github.com/Thejas10042001/Human-Safety-Precautions-",
    longDescription: "Addressed critical workplace safety concerns by deploying a computer vision system that monitors environments 24/7 for PPE violations.",
    features: ["PPE detection (helmets, vests)", "Hazardous zone alerts", "Incident logging", "High-accuracy CV models"]
  },
  {
    id: "cnn-visualization",
    title: "CNN Visualization",
    description: "A deep learning visualization tool that illustrates the internal layers and feature maps of CNNs.",
    tags: ["Deep Learning", "CNN", "Visualization", "Python"],
    icon: Brain,
    githubUrl: "https://github.com/Thejas10042001/CNN-VISUALTION",
    longDescription: "Demystified the 'black box' nature of Deep Learning models by visually rendering activation maps and filters of CNNs layer by layer.",
    features: ["Real-time layer visualization", "Feature map extraction", "Interactive exploration", "Educational tool"]
  },
  {
    id: "image-to-code",
    title: "Image to Code",
    description: "An innovative tool that converts images into executable code, bridging the gap between design and implementation.",
    tags: ["AI", "Computer Vision", "Code Generation"],
    icon: Image,
    githubUrl: "https://github.com/Thejas10042001/Image-to-code",
    longDescription: "Streamlined the frontend development workflow by automating the conversion of UI mockups into clean HTML/CSS/React code.",
    features: ["UI to Code conversion", "GenAI layout analysis", "Downloadable source", "Syntax highlighting"]
  },
  {
    id: "neurolens-guardian",
    title: "NeuroLens Meeting Guardian",
    description: "Advanced AI monitoring and security system for virtual meetings, ensuring a safe collaboration environment.",
    tags: ["AI", "Security", "Monitoring"],
    icon: ShieldCheck,
    githubUrl: "https://github.com/Thejas10042001/NeuroLens-Meeting-Guardian",
    longDescription: "Addressed security vulnerabilities in remote collaboration by creating a real-time meeting guardian using AI authentication.",
    features: ["Biometric authentication", "Unauthorized access detection", "Policy monitoring", "Security dashboard"]
  },
  {
    id: "mca-project",
    title: "MCA Academic Project",
    description: "A major academic project demonstrating advanced proficiency in software engineering and application development.",
    tags: ["MCA", "Academic", "Full Stack"],
    icon: GraduationCap,
    githubUrl: "https://github.com/Thejas10042001/MCA-PROEJCT",
    longDescription: "A comprehensive capstone project synthesizing knowledge in architecture, databases, and full-stack implementation.",
    features: ["Full-stack architecture", "Scalable DB design", "Role-based security", "Full documentation"]
  },
  {
    id: "update-meeting",
    title: "Update Meeting",
    description: "A meeting management and scheduling application designed to streamline updates and collaboration.",
    tags: ["Scheduling", "Management", "Web"],
    icon: CalendarClock,
    githubUrl: "https://github.com/Thejas10042001/UPDATE-MEETING",
    longDescription: "Solved the inefficiency of fragmented team communication by centralizing meeting scheduling and agenda management.",
    features: ["Calendar integration", "Availability scheduling", "Agenda tracking", "Email reminders"]
  },
  {
    id: "neuro-lens",
    title: "Neuro Lens Meeting",
    description: "AI-powered meeting analysis platform designed to enhance virtual collaboration through real-time processing.",
    tags: ["AI", "Meeting", "Analytics"],
    icon: Video,
    githubUrl: "https://github.com/Thejas10042001/Neuro-lens-meeting",
    longDescription: "Improved virtual meeting productivity by providing actionable insights into participant engagement using sentiment analysis.",
    features: ["Sentiment analysis", "Engagement tracking", "Topic modeling", "Post-meeting analytics"]
  },
  {
    id: "movie-analytics",
    title: "Movie Analytics Dashboard",
    description: "Interactive dashboard for visualizing movie trends, box office collections, and genre popularity.",
    tags: ["Data Analytics", "Visualization", "Dashboard"],
    icon: Film,
    githubUrl: "https://github.com/Thejas10042001/Movie-Analytics-Dashboard",
    longDescription: "Empowered data-driven decision making in entertainment by consolidating vast datasets into an interactive visual narrative.",
    features: ["Trend visualization", "Genre/Budget filtering", "Correlation analysis", "Interactive UI"]
  },
  {
    id: "job-market",
    title: "Job Market Analyzers",
    description: "A comprehensive data analysis tool designed to scrape and analyze job market trends and skill demands.",
    tags: ["Data Analytics", "Python", "Visualization", "Scraping"],
    icon: Briefcase,
    githubUrl: "https://github.com/Thejas10042001/JOB-MARKET-ANALYZERS-",
    longDescription: "Addressed the information gap for job seekers by automating market demand analysis through web scraping and NLP.",
    features: ["Automated web scraping", "NLP skill extraction", "Salary analysis", "Tech demand tracking"]
  },
  {
    id: "ai-portfolio",
    title: "AI Portfolio Website",
    description: "Dynamic portfolio featuring an interactive Gemini-powered AI chatbot that answers resume questions.",
    tags: ["Google AI Studio", "Gemini API", "React", "Framer Motion"],
    icon: Sparkles,
    longDescription: "Reimagined the traditional static resume by creating an interactive, AI-driven experience integrating the Gemini API.",
    features: ["Gemini AI Chat", "Smooth animations", "Responsive design", "Context-aware profile bot"]
  },
  {
    id: "mood2food",
    title: "Mood2Food",
    description: "AI-powered mood sensing & food recommendation app with emotion detection and recipe integration.",
    tags: ["AI", "React", "Emotion Detection", "Food API"],
    icon: Brain,
    longDescription: "Connected emotional well-being with nutrition by developing an app that recommends food based on AI emotion detection.",
    features: ["Emotion detection AI", "Recipe API integration", "Restaurant finder", "Order simulation"]
  },
  {
    id: "stockgenius",
    title: "StockGenius AI",
    description: "Real-time Indian stock market analytics platform with 17+ AI-driven modules for trading strategies.",
    tags: ["FinTech", "AI/ML", "Analytics", "Real-time"],
    icon: TrendingUp,
    longDescription: "Democratized access to sophisticated financial analysis for retail investors using 17 distinct AI prediction models.",
    features: ["17 AI modules", "Real-time market data", "Portfolio management", "Predictive modeling"]
  },
  {
    id: "phishguard",
    title: "PhishGuard AI",
    description: "AI-based phishing website & email detector for real-time cybersecurity protection.",
    tags: ["Cybersecurity", "AI", "Web Safety"],
    icon: ShieldCheck,
    longDescription: "Combated digital fraud with an AI system that analyzes URL patterns and email content in real-time.",
    features: ["URL scanning", "NLP phishing detection", "Threat reporting", "Browser extension"]
  },
  {
    id: "ecotrack",
    title: "EcoTrack",
    description: "Carbon footprint tracker with AI-powered lifestyle recommendations.",
    tags: ["Sustainability", "AI", "Tracker"],
    icon: Leaf,
    longDescription: "Tackled individual climate action by making carbon footprint tracking personal and actionable using AI lifestyle tips.",
    features: ["Carbon calculation", "AI sustainability tips", "Progress tracking", "Gamified goals"]
  },
  {
    id: "iot-weather",
    title: "IoT Weather Monitor",
    description: "ESP8266-based IoT solution for real-time local climate data collection.",
    tags: ["IoT", "Hardware", "Real-time Data"],
    icon: CloudRain,
    longDescription: "Built a cost-effective IoT monitoring station using microcontrollers to broadcast hyper-local weather data to a web dashboard.",
    features: ["ESP8266 sensing", "Live dashboard", "Pattern logging", "Threshold alerts"]
  },
  {
    id: "voting-system",
    title: "Online Voting System",
    description: "Aadhar OTP simulation with secure login and voting mechanism.",
    tags: ["Security", "Web", "Simulation"],
    icon: Vote,
    longDescription: "Addressed integrity and accessibility issues of traditional voting using Aadhar-based digital identity verification.",
    features: ["Aadhar OTP simulation", "Tamper-proof recording", "Admin election panel", "Identity verification"]
  },
  {
    id: "timetable",
    title: "Timetable Generator",
    description: "Automated scheduling system with breaks and subject allocations.",
    tags: ["Automation", "Algorithms", "Productivity"],
    icon: CalendarClock,
    longDescription: "Eliminated complex manual scheduling labor using algorithms that account for teacher availability and room constraints.",
    features: ["Conflict detection", "Automated scheduling", "Resource optimization", "Schedule export"]
  }
];

export const SYSTEM_PROMPT = `
You are the AI Portfolio Assistant for Thejas Sreenivasu. Your role is to represent Thejas professionally, answering questions about his 20+ projects, education, and 75+ professional certifications.

He has major credentials from:
1. Great Learning (Global leader in professional learning, specialized in AI and Data Science)
2. Google (Data Analytics & Android Development)
3. Autodesk (Design & Engineering)
4. Automation Anywhere (RPA & Bot Development)
5. AWS (Cloud Architecture & Security)
6. CISCO (Networking & Cybersecurity)
7. UC San Diego & HSE (Data Structures)

He is an MCA student at RVIT specializing in AI and Full-Stack development.
`;