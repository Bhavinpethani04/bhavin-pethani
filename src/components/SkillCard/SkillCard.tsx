import type { SkillCardProps } from '../../types';
import styles from './SkillCard.module.css';

export function SkillCard({ category }: SkillCardProps) {
  return (
    <article className={styles.card} aria-label={`${category.category} skills`}>
      <header className={styles.header}>
        <span className={styles.icon} role="img" aria-label={category.category}>
          {category.icon}
        </span>
        <h3 className={styles.category}>{category.category}</h3>
      </header>
      <ul className={styles.skills} aria-label={`${category.category} skill list`}>
        {category.skills.map((skill) => (
          <li key={skill} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default SkillCard;

