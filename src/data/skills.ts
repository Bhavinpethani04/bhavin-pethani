import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    category: 'Front-End',
    icon: '🖥️',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'Responsive Design'],
  },
  {
    id: 'frameworks',
    category: 'Frameworks',
    icon: '⚛️',
    skills: ['React.js', 'React Native', 'Next.js', 'Angular'],
  },
  {
    id: 'mobile',
    category: 'Mobile',
    icon: '📱',
    skills: ['React Native', 'Android (Kotlin)', 'iOS (Swift)'],
  },
  {
    id: 'ui-design',
    category: 'UI & Design Systems',
    icon: '🎨',
    skills: ['Reusable Components', 'Shared UI Libraries', 'WCAG 2.1', 'Section 508'],
  },
  {
    id: 'state',
    category: 'State Management',
    icon: '🔄',
    skills: ['Redux Toolkit', 'Context API', 'Zustand', 'MobX'],
  },
  {
    id: 'apis',
    category: 'APIs & Data',
    icon: '🔗',
    skills: ['RESTful APIs', 'JSON', 'Axios', 'Firebase'],
  },
  {
    id: 'performance',
    category: 'Performance',
    icon: '⚡',
    skills: ['Lazy Loading', 'Code Splitting', 'Bundle Optimization', 'Render Optimization'],
  },
  {
    id: 'testing',
    category: 'Testing',
    icon: '✅',
    skills: ['Jest', 'React Native Testing Library', 'Unit Testing', 'Integration Testing'],
  },
  {
    id: 'devops',
    category: 'DevOps',
    icon: '🚀',
    skills: ['Git', 'GitHub Actions', 'CI/CD Pipelines'],
  },
  {
    id: 'methodologies',
    category: 'Methodologies',
    icon: '🤝',
    skills: ['Agile', 'Scrum', 'Cross-functional Collaboration'],
  },
  {
    id: 'ai',
    category: 'AI Tools',
    icon: '🤖',
    skills: ['AI-assisted development', 'ML Kit (OCR)', 'ML Kit (Image Labeling)'],
  },
];

