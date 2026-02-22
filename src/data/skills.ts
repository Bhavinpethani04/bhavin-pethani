import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    category: 'Front-End',
    icon: '🖥️',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'Responsive Design', 'Web Accessibility (ARIA / WCAG 2.1)'],
  },
  {
    id: 'frameworks',
    category: 'Frameworks & Libraries',
    icon: '⚛️',
    skills: ['React.js', 'React Native', 'Angular', 'Next.js', 'Expo', 'RxJS', 'Angular Material'],
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
    skills: ['RESTful APIs', 'Axios', 'Firebase (Auth / Firestore / Functions)', 'JSON'],
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
    skills: ['Jest', 'React Testing Library', 'Jasmine / Karma', 'Unit Testing', 'Integration Testing'],
  },
  {
    id: 'devops',
    category: 'DevOps & Tooling',
    icon: '🚀',
    skills: ['Git', 'GitHub Actions', 'CI/CD Pipelines', 'Vite', 'Webpack'],
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
    skills: ['AI-assisted Development', 'GitHub Copilot', 'ML Kit (OCR)', 'ML Kit (Image Labeling)'],
  },
];

