import { ArrowUpRight, FileDown, Github, Linkedin, Mail } from 'lucide-react';
import { site } from '../data/site';

export function SocialLinks({ resume = false }: { resume?: boolean }) {
  return (
    <div className="social-links">
      <a href={site.github} target="_blank" rel="noreferrer">
        <Github size={16} />
        GitHub
        <ArrowUpRight size={12} />
      </a>
      {site.linkedin && (
        <a href={site.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={16} />
          LinkedIn
          <ArrowUpRight size={12} />
        </a>
      )}
      {resume
        ? site.resume && (
            <a href={site.resume} target="_blank" rel="noreferrer">
              <FileDown size={16} />
              Resume
              <ArrowUpRight size={12} />
            </a>
          )
        : site.email && (
            <a href={`mailto:${site.email}`}>
              <Mail size={16} />
              Email
              <ArrowUpRight size={12} />
            </a>
          )}
    </div>
  );
}
