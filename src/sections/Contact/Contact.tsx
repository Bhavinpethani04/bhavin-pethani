import { personalInfo } from '../../data';
import { Section } from '../../components';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className={styles.body}>
        <p className={styles.intro}>
          I'm currently open to new opportunities. Whether you have a question, a project, or just
          want to say hi — my inbox is always open.
        </p>

        <ul className={styles.links} aria-label="Contact options">
          <li>
            <a
              href={`mailto:${personalInfo.email}`}
              className={styles.link}
              aria-label={`Email ${personalInfo.email}`}
            >
              <span className={styles.linkLabel}>Email</span>
              <span className={styles.linkValue}>{personalInfo.email}</span>
            </a>
          </li>
          <li>
            <a
              href={personalInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="LinkedIn profile"
            >
              <span className={styles.linkLabel}>LinkedIn</span>
              <span className={styles.linkValue}>{personalInfo.linkedIn}</span>
            </a>
          </li>
          <li className={styles.linkPlain}>
            <span className={styles.linkLabel}>Location</span>
            <span className={styles.linkValue}>{personalInfo.location}</span>
          </li>
        </ul>

        <a
          href={`mailto:${personalInfo.email}`}
          className={styles.cta}
          aria-label="Send email to Bhavin"
        >
          Say Hello
        </a>
      </div>
    </Section>
  );
}

export default Contact;

