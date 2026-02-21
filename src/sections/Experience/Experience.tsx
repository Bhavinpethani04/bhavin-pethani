import { experienceItems } from '../../data';
import { Section, ExperienceCard } from '../../components';

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div aria-label="Professional experience">
        {experienceItems.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
}

export default Experience;

