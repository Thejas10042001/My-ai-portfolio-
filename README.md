Role: Elite Frontend/Full-Stack Software Engineer & UI Architect.

Task: Build a dynamic, highly polished, and modern portfolio for "Thejas Sreenivasu" (AI & Full-Stack Developer) using React 18, TypeScript, Tailwind CSS, Lucide Icons, and Framer Motion. 

The portfolio must feature an embedded, conversational Resume Chatbot in the lower-right corner powered by the Google Gemini API (using the `@google/genai` SDK with stateful history) that answers recruiter questions using the persona of Thejas's personal assistant.

### 🎨 Visual & UI Design Requirements
1. **Cosmic Slate Theme**: Ensure a deep slate-950 (`#0f172a`) primary canvas with cards styled in sleek obsidian slate (`#1e293b`). Include interactive borders with low opacity white (`border-white/5`), backed by strong backdrop filters (`backdrop-blur-md`) to produce professional glassmorphism effects.
2. **Typography Pairings**: Pair bold, modern headers in "Space Grotesk" display font alongside crisp, highly legible "Inter" for body copy. monospace font elements ("JetBrains Mono") must be used for metrics or telemetries.
3. **Micro-interactions & Particles**: Include animated floating dust particles in the background that drift, pulse, and scale. Implement a smoothed, spring-driven scrolling progress bar at the top of the interface using Framer Motion (`useScroll`, `useSpring`).
4. **Multi-Gradient Highlights**: The name text "Thejas Sreenivasu" in the Hero section must utilize a beautiful flowing multi-color background clip gradient (`bg-clip-text bg-[linear-gradient(to_right,#ef4444,#f97316,#eab308,#22c55e,#3b82f6,#a855f7,#d946ef)]`).
5. **Fluid Mobile Responsiveness**: Ensure full responsiveness with high-density bento grid scaling for desktops and finger-friendly tap targets (+44px) with drop-down sliding drawer overlays for mobile viewports.

---

### 💾 Resume Database Records (Core Data to Code in!)

#### 👤 Profile Summary
- **Name**: Thejas Sreenivasu
- **Role**: Innovative MCA Student | AI & Full-Stack Developer
- **Summary**: "Innovative MCA student with expertise in AI, full-stack web development, and cybersecurity solutions. Skilled in designing and implementing real-world projects that integrate machine learning, IoT, cloud computing, and data security. Passionate about creating scalable, user-friendly applications that bridge academic research with industry needs."
- **Contacts**:
  - Email: `thejasssreenivasu@gmail.com`
  - GitHub: `https://github.com/Thejas10042001`
  - LinkedIn: `https://www.linkedin.com/in/thejas-sreenivasu-2677ba1b8`
  - Instagram: `https://www.instagram.com/_vinay_so_sreenivas_/`
  - X (Twitter): `https://x.com/_so_sreenivasu_`
  - Download Resume (Google Drive): `https://drive.google.com/file/d/1F1Rw-MUSSky1zAOf1Cxdm8X5lDttd6A_/view?usp=sharing`

#### 🎓 Education Timeline
1. **Master of Computer Applications (MCA) [Ongoing]** - RVIT, JP Nagar (VTU)
2. **CSE AI in Affective Computing Course [Completed]** - IIT Delhi and Ropar (Online)
3. **Bachelor of Computer Applications (BCA) [Completed]** - KLE Society Degree College, Bangalore. Projects: *IoT Weather Monitoring*, *Cloud File Secure Handling*.

#### 💼 Experience Logs
1. **SpikedAI (AI Product Development Intern)** | *Jan 2026 - Present* | Palo Alto, CA (Remote)
   - Contributed to commercial readiness of Spiked.ai, a real-time AI-driven revenue intelligence and sales enablement platform integrated with CRM systems.
   - Built AI-driven features focusing on real-time sales intelligence and buyer intent detection.
   - Stats: `CRM INT: FULL`, `AI FLOW: 14`, `STATUS: LIVE`
2. **Google for Developers (Community Member & Trainee)** | *Aug 2021 - Present* | Remote
   - Handled web frameworks and Google Cloud technologies. Built visually engaging interfaces.
   - Stats: `DURATION: 4Y+`, `BADGES: 12`, `REP: GOLD`
3. **Microsoft AI Skills (Student Trainee in Microsoft Azure)** | *Aug 2021 - Present* | Remote
   - Completed 73 learning modules and 17 comprehensive learning paths (Cloud & AI Integration). Logged 51h 53m training time. Username: `11263963`.
   - Stats: `MODS: 73`, `PATHS: 17`, `HOURS: 52h`
4. **Trailhead by Salesforce (Trailblazer Community Member)** | *Jan 2021 - Present* | Remote
   - Applied Sales Cloud, Service Cloud, Reports, Dashboards, and Process automation. Received AI Associate credential.
   - Stats: `BADGES: 34`, `POINTS: 15k+`, `RANK: EXP`
5. **Codec Technologies India (MERN Stack Developer Intern)** | *Jan 2026 - Present* | Remote
   - Built React/Tailwind frontends, secure Express/Node RESTful APIs, optimized MongoDB schemas, and Redux Toolkit states.
   - Stats: `APIs: 12`, `COMMITS: 150+`, `SPEED: 98ms`
6. **CODTECH IT SOLUTION (Software Dev Lead / React Dev)** | *Jan 2026 - Present* | Remote
   - Leading React development. Implemented reusable state patterns to reduce code redundancy by 30%.
   - Stats: `TEAM: 4`, `SPRINTS: 8`, `RATING: 5.0`
7. **Cognifyz Technologies (Data Science & Engineering Intern)** | *Nov 2025 - Dec 2025* | Remote
   - EDA analysis on complex structured datasets, predictive modeling (92% accuracy), and robust ETL engineering.
   - Stats: `MODELS: 5`, `ACCURACY: 92%`, `ETL: 3.5GB`
8. **HackerRank (Software Engineer Intern)** | *Sep 2023 - Dec 2023* | Remote
   - Solved competitive programming questions, optimized SQL queries, and engineered high-performance APIs.
   - Stats: `SOLVED: 200`, `SQL: ADV`, `RANK: GOLD`

#### 🛠️ Comprehensive Skills Portfolio (Categorized)
- **Language**: Python (ML/Analytics - 95%), JavaScript (React/Node - 90%), Java (85%), Kotlin (80%), PHP (75%), C/C++ (80%), Go (70%), Ruby (65%).
- **Web**: React/Next.js (90%), Node/Express (85%), MERN Stack (90%), Tailwind CSS/Bootstrap (95%), Redux State (85%), REST APIs (90%), Angular (75%).
- **AI/ML**: Generative AI (95%), OpenCV/YOLO (85%), Deep Learning (80%), TensorFlow.js (80%), Celonis Process Mining (90%), Affective Computing (85%), Predictive Analytics (85%), NLP (80%).
- **Database/Cloud**: MongoDB (85%), SQL/MySQL (90%), MS Azure (85%), AWS EC2/S3 (80%), Firebase (80%), Data Lakes (75%).
- **Mobile/IoT*: React Native (75%), Native Kotlin (80%), IoT ESP8266/MQTT (85%).
- **Tools**: RPA UiPath/Automation 360 (95%), Cybersecurity (85%), Phishing Detection (90%), IAM Security (80%), CI/CD Git (90%), Power BI (85%), AutoCAD (80%), Linux Admin (75%).

---

### 📂 Interactive Components to Implement

#### 1. Header Navigation & Dynamic Hero Section
- Smooth navigation tabs linking to `Home`, `About`, `Skills`, `Projects`, `Certificates`, `Experience`, and `Contact`.
- Profile headshot (`src: "https://tse1.mm.bing.net/th/id/OIP.fSz_u_rZ6u4559ALYO_p3AHaJQ?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"`).
- Background overlay image (`src: "https://tse4.mm.bing.net/th/id/OIP.GXY8d-QM0inmFHZzm8HkAAHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"`) with radial gradient masking for text contrast.
- Buttons to "Explore Projects" and "Download Resume".

#### 2. Searchable Bento Projects Section
Implement a bento cards container. When a card is clicked, reveal a modal with key details, a GitHub link, and specific features.
Include these core projects:
- **Infinite Wik**: (Wikipedia REST API integrations, Intersection Observer virtual list scroll). [GitHub](https://github.com/Thejas10042001/Infinite-Wik)
- **Video Analysis**: (OpenCV object detection, motion heatmaps, YOLOv8 pipelines). [GitHub](https://github.com/Thejas10042001/Video-Analysis-)
- **Video to Learning App**: (Transcriptions, Whisper AI, summarizing lectures). [GitHub](https://github.com/Thejas10042001/Video-to-Learning-App)
- **Human Safety Precautions**: (PPE detector for Helmets/Vests/Goggles). [GitHub](https://github.com/Thejas10042001/Human-Safety-Precautions-)
- **CNN Visualization**: (Layer activation map visualization, PyTorch filters). [GitHub](https://github.com/Thejas10042001/CNN-VISUALTION)
- **Image to Code**: (Gemini Vision layout component compiler). [GitHub](https://github.com/Thejas10042001/Image-to-code)
- **NeuroLens Meeting Guardian**: (Participant Continuous biometric authentication logs). [GitHub](https://github.com/Thejas10042001/NeuroLens-Meeting-Guardian)
- **StockGenius AI**: (17 AI prediction modules, real-time Indian stock statistics).
- **PhishGuard AI**: (Phishing domain and URL deep learning detector).

#### 3. Certificate Registry & Verifiable Links
Construct an interactive credentials deck categorizing certificates with search filters. Include verification links!
Key Certs & Links in code:
- **Manage Insider Risk**: Microsoft learn. [Link](https://learn.microsoft.com/en-in/users/11263963/?tab=tab-trophies)
- **SC-400 Data Lifecycles**: Microsoft. [Link](https://learn.microsoft.com/en-in/users/11263963/?tab=tab-trophies)
- **Process Automation Bootcamp**: Celonis. [Link](https://drive.google.com/file/d/1RcOOGxNWsVkWpWpKIa7IGSRIwRl1IP3I/view?usp=sharing)
- **UiPath AI Center Overview**: UiPath. [Link](https://drive.google.com/file/d/1IlGaY1qpWKGeQSB7X7yR6eOm295_HCyX/view?usp=sharing)
- **Software Engineer Certification**: HackerRank. [Link](https://www.hackerrank.com/certificates/iframe/2e927e4c8ff5)
- **AWS Practitioner Essentials**: AWS. [Link](https://drive.google.com/file/d/17rEdB_avc3pryldcG5SKvhzyENvAh6R3/view?usp=sharing)
- **Google Data Analytics Professional**: Google. [Link](https://drive.google.com/file/d/1OPw0nWhxz_e5qWFXlK-Xfcki5G_XDA4i/view?usp=sharing)
- **AutoCAD Professional Prep**: Autodesk. [Link](https://drive.google.com/file/d/1srfq5rqzhbFjUxN_E6_Nhq57QpdASkIm/view?usp=sharing)
- **Cybersecurity Essentials**: Cisco. [Link](https://drive.google.com/file/d/1MvHVPdedp8UvxM_5fesiJ6E0d3X6-s0R/view?usp=sharing)

#### 4. Recruiter AI assistant ChatWidget
- Float a collapsible round bot button in the bottom right corner showing a glowing ring.
- Inside the widget, initialize the chat with: *"Hi! I'm Thejas's AI assistant. Ask me anything about his projects, skills, or experience!"*.
- Wire up a `sendMessageToGemini` proxy API on the backend endpoint using Google's `@google/genai` library client. Securely reference `process.env.API_KEY` on the server and keep it hidden from the browser.
- System Prompt configuration for the LLM: feed it a highly structured system message instructing the AI bot to adopt the role of Thejas's personal assistant, containing all resume details described in this prompt, instructing it to provide professional, positive, and direct answers regarding his milestones.
