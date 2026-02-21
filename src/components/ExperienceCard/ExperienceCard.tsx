import type { ExperienceCardProps } from '../../types';
import styles from './ExperienceCard.module.css';

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <article className={styles.card}>
      {/* Date column */}
      <div className={styles.date} aria-label={`${item.startDate} to ${item.endDate}`}>
        <span className={styles.dateText}>
          {item.startDate} — {item.endDate}
        </span>
      </div>

      {/* Content column */}
      <div className={styles.content}>
        <header className={styles.header}>
          <h3 className={styles.role}>{item.role}</h3>
          <p className={styles.company}>
            {item.company}
            <span className={styles.location}> · {item.location}</span>
          </p>
        </header>

        <ul className={styles.achievements} aria-label="Key achievements">
          {item.achievements.slice(0, 5).map((ach, i) => (
            <li key={i} className={styles.achievement}>
              <span className={styles.bullet} aria-hidden="true">▹</span>
              <span>{ach}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;

