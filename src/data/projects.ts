export type ProjectId = 'focustube' | 'contriflow' | 'leaflock' | 'rentra';
export interface Project {
  id: ProjectId;
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  live?: string;
  featured: boolean;
  previewCaption: string;
  detail: string;
}

export const projects: Project[] = [
  {
    id: 'focustube',
    number: '01',
    name: 'FocusTube',
    category: 'Chrome extension · Productivity',
    description:
      'Less distraction. More understanding. Turning YouTube lectures into a focused study workspace with local notes and snapshot captures.',
    technologies: ['JavaScript', 'Chrome Extension APIs', 'Manifest V3', 'HTML', 'CSS'],
    features: [
      'Timestamp-linked notes & video frame capture',
      'Shorts Guard with a daily viewing limit',
      'Searchable study library, topic tags & Markdown export',
    ],
    github: 'https://github.com/iqbhavya/FocusTube',
    featured: true,
    previewCaption: 'Interface study · adapted from the extension source',
    detail:
      'A draggable study drawer lives directly inside YouTube. Notes link back to the exact video timestamp, slide snapshots stay alongside your notes, and everything is stored locally in your browser with Chrome Storage APIs. Keyboard shortcuts (Alt+N, Alt+S) keep the workflow seamless.',
  },
  {
    id: 'contriflow',
    number: '02',
    name: 'ContriFlow',
    category: 'Full-Stack Web Application · Collaboration Platform',
    description:
      'A collaboration platform for student clubs and project teams to manage projects, organize tasks, coordinate members, and track contributions in one workspace.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'Gemini API',
    ],
    features: [
      'Project and workspace management',
      'Private teams with invite codes & role-based membership',
      'Task creation, assignment & contribution tracking',
      'AI-assisted task generation using natural-language prompts (reviewed before assignment)',
    ],
    github: 'https://github.com/iqbhavya/ContriFlow',
    live: 'https://contriflow-workspace.vercel.app/',
    featured: true,
    previewCaption: 'Application preview · Workspace management, team roles & contribution flow',
    detail:
      'Built for student organizations and project teams with a React frontend, Tailwind CSS, and Express backend. Workspaces feature private team access via invite codes, role-based permissions (Leads and Members), and structured task boards. Contribution tracking verifies and credits completed work. Gemini API suggests actionable task breakdowns from natural-language project goals, which team leads review and manually assign. PostgreSQL and Prisma provide structured data persistence.',
  },
  {
    id: 'leaflock',
    number: '03',
    name: 'LeafLock',
    category: 'Computer vision · Experimental',
    description:
      'Hide a digital note in the physical world. An image-matching experiment turned two-player real-world treasure hunt.',
    technologies: ['React', 'TensorFlow.js', 'Sharp', 'Groq Gemma 2', 'MongoDB'],
    features: [
      'Image-based note locking & unlocking',
      'Confidence-based image matching (MobileNet & Sharp)',
      'AI riddles & shareable hunt codes (Groq Gemma 2)',
    ],
    github: 'https://github.com/iqbhavya/LeafLock',
    live: 'https://leaflock.onrender.com/',
    featured: false,
    previewCaption: 'Flow illustration · based on the current application',
    detail:
      'One player photographs a landmark and locks a note; another follows an AI-generated riddle and submits a matching photo. Sharp handles in-memory image processing, TensorFlow/MobileNet runs feature matching, and Groq Gemma 2 helps craft riddles and compare visual categories.',
  },
  {
    id: 'rentra',
    number: '04',
    name: 'Rentra',
    category: 'Full-stack application · Marketplace',
    description:
      'From discovering a place to managing a listing. A full-stack rental property marketplace built end to end.',
    technologies: ['EJS', 'Express', 'MongoDB', 'Passport', 'Cloudinary', 'Leaflet'],
    features: [
      'Authentication, listings, image uploads & reviews',
      'Interactive maps with Leaflet & price history',
      'Booking calculations & owner authorization',
    ],
    github: 'https://github.com/iqbhavya/Rentra',
    live: 'https://rentra-ila8.onrender.com/listings',
    featured: false,
    previewCaption: 'Actual application · captured from the live deployment',
    detail:
      'An Express and EJS application with MongoDB-backed listings, Passport.js authentication, reviews, and bookings. Cloudinary handles property photography, Leaflet provides maps, and price trends are tracked visually. The booking flow calculates rental duration and fees.',
  },
];
