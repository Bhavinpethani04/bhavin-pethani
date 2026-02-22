import { Section } from '../../components';
import styles from './About.module.css';

export function About() {
  return (
    <Section id="about" title="About">
      <div className={styles.prose}>
        <p>
          I'm a <strong>Front-End Web & Mobile Developer</strong> with{' '}
          <strong className={styles.accent}>5+ years of experience</strong> building production-grade,
          accessible, and high-performance applications across{' '}
          <strong className={styles.accent}>React, React Native, Angular, and TypeScript</strong>. I
          move fluidly between framework ecosystems — from Angular's reactive architecture (RxJS,
          NgRx, signals) to React's component model — specializing in scalable UI systems that teams
          actually enjoy maintaining.
        </p>
        <p>
          My work spans enterprise asset-management platforms tracking{' '}
          <strong className={styles.accent}>50,000+ real-time assets</strong>, insurance mobile apps
          serving <strong className={styles.accent}>10,000+ active users</strong>, and Angular
          dashboards engineered for <strong className={styles.accent}>40% faster load times</strong>.
          I focus on the metrics that matter: Time-to-Interactive, bundle size, Core Web Vitals, and
          end-to-end accessibility audits.
        </p>
        <p>
          Beyond writing clean, well-tested code, I bring both strategic thinking and hands-on
          execution — architecting shared UI libraries, establishing CI/CD pipelines, and partnering
          closely with designers and product managers to ship polished experiences. Currently based in{' '}
          <strong className={styles.accent}>Kitchener, Ontario, Canada</strong> and actively open to
          new opportunities.
        </p>
      </div>
    </Section>
  );
}

export default About;

