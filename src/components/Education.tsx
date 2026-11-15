import { GraduationCap } from 'lucide-react';
import { Reveal } from './Reveal';

export function Education() {
  return (
    <section className="education-section container" aria-labelledby="education-title">
      <Reveal className="education-strip">
        <div className="degree">
          <span className="degree-icon">
            <GraduationCap size={26} />
          </span>
          <div>
            <p className="eyebrow">ACADEMIC FOUNDATION</p>
            <h2 id="education-title">B.Tech, Electronics &amp; Communication</h2>
            <p>
              PDPM Indian Institute of Information Technology, Design and Manufacturing, Jabalpur
            </p>
            <span className="degree-meta">2024 — 2028 · CGPA: 7.9 / 10.0</span>
          </div>
        </div>
        <div className="academic-highlights">
          <div>
            <strong>
              98.23<span>%ile</span>
            </strong>
            <span>JEE MAINS 2024</span>
            <small>Top 1.8% nationally</small>
          </div>
          <div>
            <strong>
              96.2<span>%</span>
            </strong>
            <span>CLASS 12 · CBSE</span>
            <small>District Topper '24 · DAV Public</small>
          </div>
          <div>
            <strong>
              3rd<span> Rank</span>
            </strong>
            <span>C.G. STATE OLYMPIAD</span>
            <small>2023 IQM Maths Olympiad</small>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
