// ─── Personal Info ────────────────────────────────────────────────────────────
export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  linkedIn: string;
  linkedInUrl: string;
}

// ─── Skills ───────────────────────────────────────────────────────────────────
export interface SkillCategory {
  id: string;
  category: string;
  icon: string;
  skills: string[];
}

// ─── Experience ───────────────────────────────────────────────────────────────
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  achievements: string[];
}

// ─── Education ────────────────────────────────────────────────────────────────
export interface EducationItem {
  id: string;
  institution: string;
  credential: string;
  field: string;
  location: string;
  period?: string;
}

// ─── Component Props ──────────────────────────────────────────────────────────
export interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  target?: '_blank' | '_self';
  ariaLabel?: string;
  icon?: React.ReactNode;
}

export interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export interface SkillCardProps {
  category: SkillCategory;
}

export interface ExperienceCardProps {
  item: ExperienceItem;
}

export interface EducationCardProps {
  item: EducationItem;
}

