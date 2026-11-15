export const site = {
  name: 'Bhavya Yadav',
  github: 'https://github.com/iqbhavya',
  // Verified in the LeafLock repository's author section.
  linkedin: 'https://www.linkedin.com/in/iqbhavya',
  email: 'bhavyayadav0607@gmail.com',
  // User-supplied resume. Replace public/resume.pdf to update the document.
  resume: '/resume.pdf' as string,
  // TODO: Set the final https:// domain after deployment for canonical/OG URLs.
  url: '' as string,
  status: 'Always learning. Always building.',
  location: 'India',
} as const;

export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
] as const;
