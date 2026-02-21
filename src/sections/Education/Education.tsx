import { educationItems } from '../../data';
import { Section } from '../../components';
import styles from './Education.module.css';

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className={styles.list} aria-label="Education credentials">
        {educationItems.map((item) => (
          <article key={item.id} className={styles.item}>
            <div className={styles.period}>{item.period ?? ''}</div>
            <div className={styles.body}>
              <h3 className={styles.institution}>{item.institution}</h3>
              <p className={styles.credential}>
                {item.credential}
                {item.field ? `, ${item.field}` : ''}
              </p>
              <p className={styles.location}>{item.location}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Education;

