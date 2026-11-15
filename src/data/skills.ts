import {
  Binary,
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Server,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
  note?: string;
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    icon: Binary,
    skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'OOP'],
  },
  {
    title: 'Frontend Engineering',
    icon: Code2,
    skills: ['React', 'Tailwind CSS', 'shadcn/ui', 'React Native', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend & System APIs',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'MVC Architecture', 'JWT & Auth'],
  },
  {
    title: 'Databases & ORMs',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB Atlas', 'Prisma ORM', 'SQL', 'Firebase', 'Supabase'],
  },
  {
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    skills: [
      'Groq API (Gemma 2)',
      'Llama Vision',
      'Gemini API',
      'TensorFlow',
      'LLM Integration',
      'Computer Vision',
      'Sharp',
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: GitBranch,
    skills: ['Docker', 'CI/CD', 'Git', 'GitHub', 'VS Code', 'Postman', 'Render', 'Vercel'],
  },
];
