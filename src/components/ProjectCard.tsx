import { ArrowUpRight, ChevronDown, Github } from 'lucide-react';
import { m, useReducedMotion } from 'motion/react';
import type { Project } from '../data/projects';
import { ProjectPreview } from './ProjectPreviews';
import { Reveal } from './Reveal';

export function ProjectCard({ project }: { project: Project }) {
  const reduced = useReducedMotion();

  return (
    <Reveal
      className={`project-card project-${project.id} ${project.featured ? 'featured-project' : 'compact-project'}`}
    >
      <article aria-labelledby={`${project.id}-title`}>
        <div className="project-media-col">
          <m.div
            className="project-art"
            initial={
              reduced
                ? false
                : { clipPath: 'inset(6% 0% 6% 0%)', opacity: 0.2 }
            }
            whileInView={
              reduced
                ? undefined
                : { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }
            }
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ProjectPreview id={project.id} />
            <span className="art-index">PROJECT / {project.number}</span>
          </m.div>

          <p className="preview-caption">{project.previewCaption}</p>
        </div>

        <div className="project-info">
          <m.p
            className="eyebrow"
            initial={reduced ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {project.category}
          </m.p>

          <m.div
            className="project-title-row"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 id={`${project.id}-title`}>{project.name}</h3>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-arrow"
              aria-label={`View ${project.name} on GitHub`}
            >
              <ArrowUpRight size={20} />
            </a>
          </m.div>

          <m.p
            className="project-description"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {project.description}
          </m.p>

          <div className="project-tech">
            {project.technologies.map((tech, i) => (
              <m.span
                key={tech}
                initial={reduced ? false : { opacity: 0, y: 8, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: reduced ? 0 : 0.22 + i * 0.035,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {tech}
              </m.span>
            ))}
          </div>

          <div className="project-links">
            <a href={project.github} target="_blank" rel="noreferrer">
              <Github size={14} />
              Source code
              <ArrowUpRight size={12} className="link-arrow" />
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="live-link">
                Live site
                <ArrowUpRight size={13} className="link-arrow" />
              </a>
            )}
          </div>
        </div>

        <details className="project-details">
          <summary>
            <span>Inside the project</span>
            <ChevronDown size={14} />
          </summary>
          <div className="project-details-body">
            <div className="project-features-list">
              <span className="details-heading">Core Features</span>
              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="project-architecture-text">
              <span className="details-heading">Architecture &amp; Implementation</span>
              <p>{project.detail}</p>
            </div>
          </div>
        </details>
      </article>
    </Reveal>
  );
}
