import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { experience } from '../data/experience';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="section container" aria-label="Leadership and journey">
      <Reveal>
        <SectionHeading
          number="04"
          label="ROLES & LEADERSHIP"
          title="Engineering & Leadership."
          description="Taking ownership beyond the classroom — leading institute technical platforms, robotics research, and product engineering."
        />
      </Reveal>
      <div className="experience-layout">
        <Reveal className="leadership-card">
          <ShieldCheck size={32} strokeWidth={1.5} />
          <p className="eyebrow">INSTITUTE LEADERSHIP</p>
          <h3>
            Leading development.<br />
            Architecting systems.<br />
            <span>Shipping for the institute.</span>
          </h3>
          <div>
            <span>NCC WEBSITE TEAM LEAD · IIITDMJ</span>
            <ArrowUpRight size={16} />
          </div>
        </Reveal>
        <div className="timeline">
          {experience.map((item, i) => (
            <Reveal key={item.title} className="timeline-item" delay={i * 0.05}>
              <span className="timeline-node" />
              <p className="eyebrow">{item.label}</p>
              <h3>{item.title}</h3>
              <p className="timeline-subtitle">{item.subtitle}</p>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
