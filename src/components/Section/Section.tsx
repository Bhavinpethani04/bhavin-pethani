import type { SectionProps } from '../../types';
import styles from './Section.module.css';

export function Section({
  id,
  title,
  children,
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={[styles.section, className].filter(Boolean).join(' ')}
      aria-labelledby={title ? `${id}-heading` : undefined}
    >
      {title && (
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} aria-hidden="true" />
          <h2 id={`${id}-heading`} className={styles.eyebrowText}>
            {title}
          </h2>
        </div>
      )}
      {children}
    </section>
  );
}

export default Section;

