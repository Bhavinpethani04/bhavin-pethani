import { skillCategories } from '../../data';
import { Section } from '../../components';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className={styles.groups}>
        {skillCategories.map((cat) => (
          <div key={cat.id} className={styles.group}>
            <dt className={styles.category}>{cat.category}</dt>
            <dd className={styles.tagList}>
              {cat.skills.map((skill) => (
                <span key={skill} className={styles.tag}>{skill}</span>
              ))}
            </dd>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;

