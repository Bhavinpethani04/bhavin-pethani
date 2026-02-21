import { personalInfo } from '../../data';
import styles from './Hero.module.css';

const NAV_ITEMS = [
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education',  label: 'Education' },
  { id: 'contact',    label: 'Contact' },
] as const;

type SectionId = typeof NAV_ITEMS[number]['id'];

interface HeroProps {
  activeSection: SectionId;
  isDark: boolean;
  onToggleTheme: () => void;
}

export function Hero({ activeSection, isDark, onToggleTheme }: HeroProps) {
  return (
    <aside className={`leftPanel ${styles.panel}`} aria-label="Profile and navigation">
      {/* Top: name + title + tagline */}
      <div className={styles.intro}>
        <p className={styles.greeting}>Hi, my name is</p>
        <h1 className={styles.name}>{personalInfo.name}</h1>
        <h2 className={styles.title}>{personalInfo.title}</h2>
        <p className={styles.tagline}>{personalInfo.tagline}</p>
      </div>

      {/* Middle: nav */}
      <nav className={styles.nav} aria-label="Page sections">
        <ul>
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`${styles.navLink} ${activeSection === id ? styles.navLinkActive : ''}`}
                aria-current={activeSection === id ? 'true' : undefined}
              >
                <span className={styles.navLine} aria-hidden="true" />
                <span className={styles.navLabel}>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom: social links + credits */}
      <div className={styles.bottom}>
      <div className={styles.socials} aria-label="Social links">
        {/* Theme toggle */}
        <button
          className={styles.themeToggle}
          onClick={onToggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {!isDark ? (
            /* Moon icon — currently dark, click for light */
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
            </svg>
          ) : (
            /* Sun icon — currently light, click for dark */
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
            </svg>
          )}
        </button>
        <a
          href={`mailto:${personalInfo.email}`}
          className={styles.socialLink}
          aria-label={`Email ${personalInfo.email}`}
        >
          {/* Email icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </a>

        <a
          href={personalInfo.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label="LinkedIn profile"
        >
          {/* LinkedIn icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label="GitHub profile"
        >
          {/* GitHub icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
          </svg>
        </a>
      </div>
      <p className={styles.credits}>
        Designed &amp; Built by{' '}
        <span className={styles.creditsName}>{personalInfo.name}</span>
      </p>
      </div>
    </aside>
  );
}

export default Hero;

