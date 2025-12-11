import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  features?: string[];
  icon?: LucideIcon;
  githubUrl?: string;
  longDescription?: string;
}

export interface Skill {
  name: string;
  category: 'Language' | 'Web' | 'Database' | 'AI/ML' | 'Mobile' | 'Tool';
  level: number; // 0-100
}

export interface Education {
  degree: string;
  institution: string; // Implied or Generic if not in resume
  status: string;
  details?: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}