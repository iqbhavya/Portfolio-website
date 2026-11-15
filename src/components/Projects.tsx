import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { site } from '../data/site';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  const featured = projects.filter(p => p.featured);
  const compact = projects.filter(p => !p.featured);
  return (
    <section
      id="projects"
      className="section projects-section container"
      aria-label="Featured projects"
    >
      <Reveal>
        <SectionHeading
          number="03"
          label="SELECTED WORK"
          title="Ideas, put into practice."
          description="A few things I've built while asking, 'what if?' Each one, a different problem and something new to learn."
        />
      </Reveal>
      <div className="projects-grid">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <div className="compact-projects-row">
          {compact.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="projects-end">
        <span>Built to solve. Shared to learn.</span>
        <a className="text-link" href={site.github} target="_blank" rel="noreferrer">
          More on GitHub
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
