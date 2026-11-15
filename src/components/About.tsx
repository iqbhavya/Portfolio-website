import { ArrowUpRight, Bot, Cpu, GraduationCap, MapPin } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="about" className="section container" aria-label="About me">
      <Reveal>
        <SectionHeading
          number="01"
          label="THE PERSON BEHIND THE PROJECTS"
          title="A little about me."
        />
      </Reveal>
      <div className="about-layout">
        <Reveal className="about-copy">
          <p className="large-copy">
            Curiosity is the starting point.
            <br />
            <span>Building is how I figure things out.</span>
          </p>
          <p>
            I'm Bhavya, an Electronics and Communication Engineering student at{' '}
            <strong>IIITDM Jabalpur (2024–2028, CGPA: 7.9)</strong>, with a relentless drive for
            full-stack software engineering and applied AI systems.
          </p>
          <p>
            I build software end-to-end to solve concrete operational problems — from collaborative
            platforms with PostgreSQL &amp; Gemini API (ContriFlow) and privacy-focused Chrome
            extensions (FocusTube), to experimental image-matching systems with TensorFlow and Groq
            (LeafLock).
          </p>
          <p>
            Beyond web engineering, I serve as the <strong>NCC Website Development Team Lead</strong>,
            direct technical prototyping on a <strong>patent-pending vision-guided robotics</strong>{' '}
            concept, and architect hardware-integrated smart scheduling applications.
          </p>
          <a className="text-link" href="#experience">
            Explore my roles &amp; leadership
            <ArrowUpRight size={16} />
          </a>
        </Reveal>
        <Reveal className="about-bento" delay={0.1}>
          <div className="info-tile education-tile">
            <GraduationCap size={22} />
            <p className="eyebrow">UNDERGRADUATE</p>
            <h3>B.Tech in ECE</h3>
            <p>IIITDM Jabalpur · 2024 — 2028</p>
            <span className="tiny-tag">CGPA 7.9</span>
          </div>
          <div className="info-tile focus-tile">
            <div className="tile-code" aria-hidden="true">
              &lt;/&gt;
            </div>
            <p className="eyebrow">CORE FOCUS</p>
            <h3>
              Full-Stack &amp;
              <br />
              Applied AI Systems.
            </h3>
          </div>
          <div className="info-tile interest-tile">
            <Bot size={20} />
            <div>
              <p className="eyebrow">ACTIVE RESEARCH</p>
              <h3>Vision-Guided Robotics &amp; LLMs</h3>
            </div>
            <ArrowUpRight size={18} />
          </div>
          <div className="info-tile location-tile">
            <MapPin size={15} />
            <span>Jabalpur, India</span>
            <Cpu size={15} />
            <span>Grounded in Hardware &amp; Code</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
