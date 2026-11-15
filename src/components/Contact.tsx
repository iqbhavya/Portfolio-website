import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, FileDown } from 'lucide-react';
import { site } from '../data/site';
import { Reveal } from './Reveal';

export function Contact() {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('error');
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopyStatus('idle'), 3500);
  }
  return (
    <section id="contact" className="contact-section container" aria-labelledby="contact-title">
      <Reveal className="contact-panel">
        <div className="contact-top">
          <p className="eyebrow">
            <span>05 /</span> NEXT CONVERSATION
          </p>
          <span className="contact-asterisk" aria-hidden="true">✳</span>
        </div>
        <h2 id="contact-title">
          Have an idea?
          <br />
          <span>Let's connect.</span>
          <ArrowUpRight className="contact-arrow" strokeWidth={1} />
        </h2>
        <div className="contact-bottom">
          <div className="contact-intro">
            <div className="contact-status-pill">
              <span className="contact-status-dot" />
              <span>AVAILABLE FOR INTERNSHIPS &amp; SOFTWARE ENGINEERING ROLES</span>
            </div>
            <p>
              I'm always interested in connecting with people who enjoy building things, solving
              problems, and exploring new ideas.
            </p>
          </div>
          <div className="contact-actions">
            {site.email && (
              <div className="email-row">
                <a href={`mailto:${site.email}`}>
                  {site.email}
                  <ArrowUpRight size={18} />
                </a>
                <button onClick={copyEmail} aria-label="Copy email address">
                  {copyStatus === 'copied' ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            )}
            <p role="status" className="copy-status">
              {copyStatus === 'copied'
                ? 'Email address copied.'
                : copyStatus === 'error'
                  ? "Couldn't copy. Use the email link."
                  : 'A conversation is a good place to start.'}
            </p>
            {site.resume && (
              <a className="text-link" href={site.resume} target="_blank" rel="noreferrer">
                <FileDown size={14} />
                Download my resume
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
