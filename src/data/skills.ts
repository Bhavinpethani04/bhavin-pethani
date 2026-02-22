import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    category: 'Front-End',
    icon: '🖥️',
    skills: ['HTML5', 'CSS3', 'Sass / SCSS', 'CSS Modules', 'Tailwind CSS', 'Flexbox / Grid', 'JavaScript (ES6+)', 'TypeScript', 'Responsive Design', 'Web Accessibility (ARIA / WCAG 2.1)'],
  },
  {
    id: 'frameworks',
    category: 'Frameworks & Libraries',
    icon: '⚛️',
    skills: ['React.js', 'React Native', 'Angular', 'Next.js', 'Expo', 'RxJS', 'Angular Material', 'React Hook Form'],
  },
  {
    id: 'mobile',
    category: 'Mobile',
    icon: '📱',
    skills: ['React Native', 'Expo', 'React Navigation', 'Android (Kotlin)', 'iOS (Swift)'],
  },
  {
    id: 'ui-design',
    category: 'UI & Design Systems',
    icon: '🎨',
    skills: ['Component Libraries', 'Design Tokens', 'Storybook', 'Figma', 'WCAG 2.1 / Section 508'],
  },
  {
    id: 'state',
    category: 'State Management',
    icon: '🔄',
    skills: ['Redux Toolkit', 'NgRx', 'Context API', 'Zustand', 'MobX'],
  },
  {
    id: 'apis',
    category: 'APIs & Data',
    icon: '🔗',
    skills: ['RESTful APIs', 'GraphQL', 'Axios', 'TanStack Query (React Query)', 'WebSockets', 'Firebase (Auth / Firestore / Functions)', 'JSON'],
  },
  {
    id: 'performance',
    category: 'Performance',
    icon: '⚡',
    skills: ['Core Web Vitals', 'Lazy Loading', 'Code Splitting', 'Bundle Optimization', 'Virtualization / Windowing'],
  },
  {
    id: 'testing',
    category: 'Testing',
    icon: '✅',
    skills: ['Jest', 'React Testing Library', 'Cypress', 'Playwright', 'Jasmine / Karma', 'Unit Testing', 'Integration Testing', 'E2E Testing'],
  },
  {
    id: 'devops',
    category: 'DevOps & Tooling',
    icon: '🚀',
    skills: ['Git', 'GitHub Actions', 'CI/CD Pipelines', 'ESLint / Prettier', 'Vite', 'Webpack', 'Vercel / Netlify'],
  },
  {
    id: 'methodologies',
    category: 'Methodologies',
    icon: '🤝',
    skills: ['Agile / Scrum', 'Code Reviews', 'Cross-functional Collaboration', 'Technical Mentorship'],
  },
  {
    id: 'ai',
    category: 'AI Tools',
    icon: '🤖',
    skills: ['Augment Code', 'GitHub Copilot', 'Cursor', 'Windsurf', 'Claude', 'ChatGPT', 'v0 by Vercel', 'ML Kit (OCR)', 'ML Kit (Image Labeling)', 'ML Kit (Barcode Scanning)', 'ML Kit (Document Scanner)'],
  },
];

