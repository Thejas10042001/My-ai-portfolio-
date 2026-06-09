# Thejas Sreenivasu — Interactive AI-Powered Portfolio & Responsive Recruiter Chatbot Agent

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Build Status](https://img.shields.io/badge/Build-Passing-emerald.svg?style=flat-square)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg?style=flat-square)](#)
[![React](https://img.shields.io/badge/React-18.x-cyan.svg?style=flat-square)](#)
[![Vite](https://img.shields.io/badge/Vite-5.x-purple.svg?style=flat-square)](#)
[![AI Assistant](https://img.shields.io/badge/AI--Agent-Gemini--Flash-orange.svg?style=flat-square)](#)
[![Styling](https://img.shields.io/badge/Styling-Tailwind_CSS-38bdf8.svg?style=flat-square)](#)

Welcome to the definitive repository for **Thejas Sreenivasu's Interactive AI-Powered Developer Portfolio**. 

This application is an enterprise-grade, highly responsive web environment engineered to present a comprehensive developer portfolio. It showcases **20+ advanced projects** (ranging from cognitive compliance engines to high-capacity enterprise HR systems) and a vetted list of **150+ professional certifications**. 

The hallmark feature of this portfolio is an embedded **Gemini-powered chatbot widget** (`@google/genai`). Loaded with standard context prompts, structural parameters, and personal technical timelines, the AI agent represents Thejas pre-emptively—answering developer questions, explaining architectural codebases, analyzing system traits, and streamlining the screening process for recruiters.

---

## 🌌 Project Design Philosophy & Key Highlights

This application is built with the goal of creating an authentic, immersive, and high-fidelity representation of a developer’s capabilities. Key design guidelines implemented include:
*   **Minimalist & High-Contrast Visuals**: Set against an eye-safe slate dark canvas with vibrant accent neon borders, consistent spatial rhythms, and refined interface grids.
*   **Zero Loading Anxiety**: Bundled and compiled with a highly optimized Vite asset pipeline to ensure rapid load times and instant responses.
*   **Fluid Micro-Animations**: Interactive, hardware-accelerated transitions via `framer-motion` provide context changes across views without jarring state flickers.
*   **Recruiter Self-Service Panel**: Recruiters can ask custom technical questions directly to the chatbot or click pre-configured quick-triggers (e.g., "Tell me about SPIKEDAI", "What Azure certifications do you have?", "Are you open to remote roles?").

---

## 🚀 Interactive Application Modules

The codebase is divided into five highly polished, fully responsive client views:

### 1. 🤖 Embedded Recruiter Assistant (Chat Widget)
*   **AI Engine**: Features full integration with Google's latest **Gemini Flash API** via the client-side `@google/genai` TypeScript SDK.
*   **Custom Prompting (`SYSTEM_PROMPT`)**: Fully primed with structured biographical logs, project outlines, educational history, contact channels, and professional credentials.
*   **Recruiter Pre-sets**: Injects instant response buttons to let non-technical recruiters rapidly evaluate core competencies without manual prompt typing.
*   **Safe-Guards**: Formatted to ensure professional tone, structured listings, markdown rendering capabilities, and automatic protection of personal contact directories.

### 2. 📂 Project Matrix Showroom (20+ Applications)
An interactive showcase showcasing over 20 advanced full-stack and machine learning pipelines, featuring instant sorting, tags search indices, and technical detail modals:
*   **SPIKEDAI — Cognitive Intelligence Brain KYC & Sales Research Engine**
    *   *Core*: Customer risk profiles, compliance audits, ultimate beneficial owner (UBO) traces, and multi-agent buyer psychographics.
    *   *Stack*: Cognitive Computing, KYC algorithms, React, Sales Intelligence.
    *   *Link*: [github.com/Thejas10042001/method-2](https://github.com/Thejas10042001/method-2)
*   **SPIKED AI: Enterprise Cognitive Intelligence & Sales Simulation Engine**
    *   *Core*: Immersive multi-agent sales coaching simulation using conversational sentiment analysis and behavioral response models.
    *   *Stack*: AI, Sales Simulation, Cognitive Classifiers, React.
    *   *Link*: [github.com/Thejas10042001/video-one-](https://github.com/Thejas10042001/video-one-)
*   **Aether Enterprise HRMS: AI-Driven Human Resource Management**
    *   *Core*: Attrition analytics, automated shift scheduling optimization, smart high-velocity resume parsers, and policy checkers.
    *   *Stack*: React, AI Integration, Node.js, HR Tech, Enterprise, Express.
    *   *Link*: [github.com/Thejas10042001/FWC-](https://github.com/Thejas10042001/FWC-)
*   **Mr. Cloud Architect PRO-AI (Enterprise Multi-Cloud Discovery Engine)**
    *   *Core*: AWS, Azure, and Google Cloud infrastructure mapping with Terraform generation mechanisms and CIS compliance checklists.
    *   *Stack*: Cloud Computing, AI, Multi-Cloud, DevOps, Terraform.
    *   *Link*: [github.com/Thejas10042001/Mr.-Cloud-Architect-PRO-AI](https://github.com/Thejas10042001/Mr.-Cloud-Architect-PRO-AI)

### 3. 📜 Certification Directory (150+ Professional Credentials)
An ultra-dense verification library containing filters to isolate elite certificates by provider:
*   **Microsoft Learn**: Verifies 73+ fully completed engineering modules, 17 deep learning paths, and 51+ hours of training spanning Azure Cloud, Enterprise Security (MS-500), Power Platform, and Conversational NLP.
*   **Cisco Networking Academy**: Verifies training in Cisco Cybersecurity pathways, Network Protocols, and Routing/Switching essentials.
*   **Google Developer ecosystems & AWS tracks**: Explains cloud modernization and data engineering structures.
*   **Academic Proof of Work**: Links specialized educational certificates from institutions like UC San Diego (Data Structures, Algorithms).

### 4. 📈 Career Chronology and Education Journey
*   Includes detailed timeline visualizers for his current role as an **AI Product Developer at SpikedAI** (promoted in March 2026), MERN Stack Internship at Codec Technologies India, Data Science Internship at Cognifyz Technologies, and academic progress as an **MCA (Master of Computer Applications) Candidate**.

### 5. 📬 Connected Contact Registry
*   Collects recruit queries via custom feedback forms, keeping active social channels (LinkedIn, GitHub, Twitter/X, Instagram) accessible for immediate booking slots.

---

## 🛠️ Complete Technical Stack Specification

```
┌──────────────────────────────────────────────────────────────────────────┐
│                             BROWSER CLIENT                               │
│  React 18  │  TypeScript 5  │  Tailwind CSS  │  Framer Motion  │  Lucide │
└────────────────────────────────────┬─────────────────────────────────────┘
                                     │
                    (API Proxy & Streaming Operations)
                                     │
┌────────────────────────────────────▼─────────────────────────────────────┐
│                             COGNITIVE ASSETS                             │
│  Gemini-Flash API (LLM)  │  Structured Payload Ingestion  │  State Store │
└──────────────────────────────────────────────────────────────────────────┘
```

*   **Runtime Engine**: Node.js v18+ with [Vite 5](https://vitejs.dev/) to build fast single-page applications.
*   **Development Language**: Strict [TypeScript 5.x](https://www.typescriptlang.org/) for compile-time validation, interfaces, and data type enforcement.
*   **UI Layout & Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/) with custom font configuration (`Inter` primary + `Space Grotesk` display + `JetBrains Mono` code accents).
*   **Animations Framework**: [Framer Motion](https://www.framer.com/motion/) for fluid page transitions, card hover effects, chatbot popups, and modal backdrops.
*   **Vector Asset Engines**: [Lucide React](https://lucide.dev/) for high-contrast icons representing key architectural domains.

---

## 📂 Code Layout & Architecture Matrix

Below is the structured layout mapping out the separation of concerns across the application directory:

```
├── components/
│   ├── Hero.tsx            <-- Headline hero intro with avatar elements and interactive greetings
│   ├── About.tsx           <-- Biography, quick stats, and core focus summaries
│   ├── Skills.tsx          <-- Grid of expertise tags filtered by category (Frontend, Backend, AI, DevOps)
│   ├── Projects.tsx        <-- Portfolio grid complete with category filters and detailed drill-down modals
│   ├── Certificates.tsx    <-- Certificate catalog integrating instant search and provider filter tabs
│   ├── Experience.tsx      <-- Horizontal and vertical timelines tracking career progress and milestones
│   ├── Contact.tsx         <-- Custom communication forms linking physical channels
│   └── ChatWidget.tsx      <-- In-page AI recruiter chatbot assistant utilizing Gemini
├── services/
│   └── ai.ts               <-- Core interaction wrappers configuring the Google GenAI instance
├── constants.ts            <-- Embedded static portfolio data (Certificates, Experience, Project Metadata)
├── types.ts                <-- Pure TypeScript domain definitions for compile-time verification
├── App.tsx                 <-- Core routing container, initial state managers, and screen setup
├── main.tsx                <-- Dom bootstrap binding React to the container
├── index.css               <-- Global stylesheet importing Tailwind CSS configs and Google font families
└── vite.config.ts          <-- Vite compiler orchestration settings
```

---

## 🧬 Immutable Domain Type System (`types.ts`)

To ensure absolute stability, the application runs on structured TypeScript interfaces:

```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: any; // Lucide icon reference
  githubUrl: string;
  longDescription: string;
  features: string[];
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "AI/ML" | "Cloud/DevOps" | "Security" | "Tools";
  level: number; // Scale of 1 to 5
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  details: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerLogo?: string;
  description: string;
  date: string;
  link?: string;
  icon?: any;
  category: "Cloud" | "AI" | "Security" | "Data Science" | "Networking" | "Business" | "Algorithms";
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: "Full-time" | "Part-time" | "Internship" | "Contract" | "Community/Trainee" | "Trainee";
  logo: string;
  description: string;
  points: string[];
  stats?: { label: string; value: string | number }[];
}
```

---

## ⚙️ installation, Configuration & Local Deployment

Follow these comprehensive steps to run, adapt, or build this portfolio workspace locally:

### 1. Verification of System Prerequisites
Ensure you have the following frameworks installed on your sandbox environment:
*   **Node.js**: Version `v18.0.0` or newer (LTS recommended)
*   **npm**: Version `v9.0.0` or newer

### 2. Standard Manual Build Steps

1.  **Clone the Source Repository**:
    ```bash
    git clone https://github.com/Thejas10042001/method-2.git
    cd method-2
    ```

2.  **Install Base Project Dependencies**:
    ```bash
    npm install
    ```

3.  **Setup Environment Variables**:
    Create a `.env` in the root of the project to authenticate the assistant chatbot:
    ```env
    # Google GenAI Authentication Token
    GEMINI_API_KEY=your_actual_llm_api_key_goes_here
    ```

4.  **Launch the Hot-Module-Replacement Dev Server**:
    ```bash
    npm run dev
    ```
    Typically opens a local preview port at `http://localhost:3000` or `http://localhost:5173`.

5.  **Compile the Codebase for Static Web Deployment**:
    ```bash
    npm run build
    ```
    This triggers the Vite compiler to produce a fully optimized, minified bundle output inside the `/dist` output directory.

6.  **Preview the Local Production Files**:
    ```bash
    npm run preview
    ```

---

## 📈 Testing & Code Review Standards

To retain optimal accessibility scores and ensure type compliance across all components, maintain the following development patterns:
*   **Run Linter checks**:
    ```bash
    npm run lint
    ```
*   **A11y (Accessibility)**: Ensure text elements have standard contrast metrics relative to their respective background states.
*   **Strict Imports**: Always place import declarations at the absolute top of module definitions. Prefer named structural destructuring.

---

## 🤝 Collaboration & Contribution Protocol

Contributions from the developer community are highly welcome! To propose adjustments:
1.  **Fork** this repository to your GitHub dashboard.
2.  Create an isolated, descriptive release branch:
    ```bash
    git checkout -b feature/enhanced-resume-prompt
    ```
3.  Perform edits strictly adhering to conventional commit standards:
    ```bash
    git commit -m "feat: updated resume dataset with AWS certifications"
    ```
4.  Push your branch to your remote Fork:
    ```bash
    git push origin feature/enhanced-resume-prompt
    ```
5.  Open a detailed **Pull Request (PR)** containing description points, visual screenshots, and compilation test confirmations.

---

## 📄 License & Attribution

This portfolio is open-source software licensed and distributed under the **MIT License**. Check the [LICENSE](LICENSE) file for complete compliance and usage permissions.

For direct collaborations, booking interview slots, or exploring his multi-cloud and core AI platforms, contact **Thejas Sreenivasu** directly via his professional channels:
*   **Official Email**: `thejasssreenivasu@gmail.com`
*   **GitHub**: [Thejas10042001](https://github.com/Thejas10042001)
*   **LinkedIn**: [Thejas Sreenivasu Profile](https://www.linkedin.com/in/thejas-sreenivasu-2677ba1b8)
*   **Twitter/X**: [`@_so_sreenivasu_`](https://x.com/_so_sreenivasu_)
