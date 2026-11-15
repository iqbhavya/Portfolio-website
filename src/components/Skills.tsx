import { skillGroups } from '../data/skills';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

// Flat tech list for the ticker
const allTechs = [
  'React',
  'TypeScript',
  'Python',
  'C++',
  'Node.js',
  'Express.js',
  'PostgreSQL',
  'Prisma ORM',
  'MongoDB',
  'Docker',
  'CI/CD',
  'Tailwind CSS',
  'Groq Gemma 2',
  'TensorFlow',
  'Gemini API',
  'Computer Vision',
  'RESTful APIs',
  'Git',
  'React Native',
  'Supabase',
];

export function Skills() {
  const tickerItems = [...allTechs, ...allTechs];
  return (
    <section id="skills" className="section container" aria-label="Technical skills">
      <Reveal>
        <SectionHeading
          number="02"
          label="TECHNICAL EXPERTISE"
          title="Tools & Technologies."
          description="A comprehensive toolkit across full-stack web engineering, applied AI/ML systems, and robust database architectures."
        />
      </Reveal>

      {/* Animated tech ticker */}
      <div className="skills-ticker-wrap" aria-hidden="true">
        <div className="skills-ticker">
          {tickerItems.map((tech, i) => (
            <span key={i} className="ticker-item">
              {tech}
              <span className="ticker-sep">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* Confident 6-group technical grid */}
      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} className="skill-card" delay={(i % 3) * 0.04}>
            <div className="skill-heading">
              <group.icon size={19} />
              <h3>{group.title}</h3>
            </div>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <p className="skills-note">
        Production-tested technologies applied across shipped applications, AI pipelines, and hardware-software systems.
      </p>
    </section>
  );
}
