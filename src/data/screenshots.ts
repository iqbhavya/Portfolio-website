export interface ProjectScreenshot {
  id: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

export const contriflowScreenshots: ProjectScreenshot[] = [
  {
    id: 'workspace',
    title: 'Team workspace',
    description: 'The Club project with its task list, team members, and recent activity.',
    width: 1540,
    height: 900,
  },
  {
    id: 'ai-generator',
    title: 'AI task suggestions',
    description: 'Generated task suggestions that the team lead can review, edit, and select.',
    width: 1377,
    height: 898,
  },
  {
    id: 'task-details',
    title: 'Inside a task',
    description: 'Task details, assignment and status controls, with contributions in one place.',
    width: 1537,
    height: 916,
  },
  {
    id: 'contribution',
    title: 'Submitting a contribution',
    description:
      'The contribution form with a description, proof link, and optional co-contributor.',
    width: 1512,
    height: 917,
  },
  {
    id: 'projects',
    title: 'Project overview',
    description: 'A shared starting point for creating, joining, and opening team projects.',
    width: 1572,
    height: 872,
  },
  {
    id: 'empty-workspace',
    title: 'A new workspace',
    description:
      'The project before its first tasks, with options to create tasks or generate suggestions.',
    width: 1517,
    height: 892,
  },
  {
    id: 'landing',
    title: 'Meet ContriFlow',
    description: 'The public landing page introducing the project and contribution workflow.',
    width: 1677,
    height: 901,
  },
  {
    id: 'workflow',
    title: 'How it works',
    description: 'The landing page’s walkthrough of how teams use ContriFlow.',
    width: 1652,
    height: 905,
  },
];

export function screenshotPath(id: string, size?: 'preview' | 'thumb') {
  return `/images/contriflow/${id}${size ? `-${size}` : ''}.webp`;
}
