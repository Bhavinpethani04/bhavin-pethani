import { Section } from '../../components';
import styles from './About.module.css';

export function About() {
  return (
    <Section id="about" title="About">
      <div className={styles.prose}>
        <p>
          I'm a <strong>Front-End Web & Mobile Developer</strong> with{' '}
          <strong className={styles.accent}>5+ years of experience</strong> delivering responsive,
          accessible, and high-performance web and mobile applications using React and React Native.
        </p>
        <p>
          Strong expertise in <strong className={styles.accent}>React.js, React Native, Angular,
          TypeScript</strong>, and modern UI architecture. I specialize in building reusable
          component libraries, integrating RESTful APIs, and optimizing front-end performance through
          lazy loading and code splitting — achieving up to{' '}
          <strong className={styles.accent}>40% faster load times</strong>.
        </p>
        <p>
          Experienced with WCAG 2.1 accessibility standards, CI/CD pipelines, Agile/Scrum teams,
          and AI-assisted development tooling including ML Kit for OCR and image labeling.
          Currently based in <strong className={styles.accent}>Kitchener, Ontario, Canada</strong>{' '}
          and open to new opportunities.
        </p>
      </div>
    </Section>
  );
}

export default About;

