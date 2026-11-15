import { useEffect, useRef, useState } from 'react';
import { m, useReducedMotion } from 'motion/react';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Copy,
  FileCode,
  Github,
  Globe2,
  Mail,
  Terminal,
} from 'lucide-react';
import { site } from '../data/site';

// Staggered word-reveal component
function WordReveal({
  text,
  delay = 0,
  className = '',
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const words = text.split(' ');
  return (
    <span className={className} aria-label={text} style={{ display: 'inline-block', maxWidth: '100%' }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'bottom',
            maxWidth: '100%',
          }}
        >
          <m.span
            style={{ display: 'inline-block', paddingRight: '0.08em' }}
            initial={reduced ? false : { y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.7, delay: delay + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </m.span>
        </span>
      ))}
    </span>
  );
}

// Custom cursor — desktop only
function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    let raf: number;
    let tx = 0,
      ty = 0,
      rx = 0,
      ry = 0;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
      }
      rx += (tx - rx) * 0.12;
      ry += (ty - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };
    const onEnter = () => ringRef.current?.classList.add('hovering');
    const onLeave = () => ringRef.current?.classList.remove('hovering');
    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    raf = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}

// Real code snippets from Bhavya's projects & resume

const codeFiles = [
  {
    name: 'contriflow.ts',
    lang: 'TypeScript',
    project: 'ContriFlow',
    summary: 'AI-assisted task generation for project teams',
    badge: 'TypeScript · Express · Prisma · Gemini',
    code: `// ContriFlow: Generate actionable project tasks

type TaskSuggestion = {
  title: string;
  description: string;
};

async function generateProjectTasks(
  projectContext: string,
  userPrompt: string
): Promise<TaskSuggestion[]> {

  const prompt = \`
    Project context: \${projectContext}

    Generate actionable tasks for this request:
    \${userPrompt}

    Return structured task suggestions.
  \`;

  const suggestions = await generateWithGemini(prompt);

  // Suggestions are reviewed before being added
  // to the project's task board.
  return suggestions.map(task => ({
    title: task.title.trim(),
    description: task.description.trim()
  }));
}`
  },
  {
    name: 'leaflock.py',
    lang: 'Python',
    project: 'LeafLock',
    summary: 'Visual feature comparison for image-based authentication',
    badge: 'TensorFlow · Computer Vision · Groq',
    code: `# LeafLock: Compare visual features

import tensorflow as tf

def compare_visual_features(reference, captured):
    """Compare feature representations of two images."""

    reference = tf.math.l2_normalize(
        reference, axis=-1
    )
    captured = tf.math.l2_normalize(
        captured, axis=-1
    )

    similarity = tf.reduce_sum(
        reference * captured, axis=-1
    )

    confidence = float(tf.reduce_mean(similarity))

    return {
        "confidence": confidence,
        "matched": confidence >= 0.75
    }

# A successful match can unlock the protected note.`
  },
  {
    name: 'focus-tube.js',
    lang: 'JavaScript',
    project: 'FocusTube',
    summary: 'Timestamp-based learning notes and video capture',
    badge: 'Chrome APIs · JavaScript · Manifest V3',
    code: `// FocusTube: Save a learning moment from YouTube

async function saveStudyNote(video, note, tags = []) {
  const timestamp = Math.floor(video.currentTime);

  const studyNote = {
    videoId: video.id,
    videoTitle: video.title,
    timestamp,
    note,
    tags,
    savedAt: Date.now()
  };

  const { studyNotes = [] } =
    await chrome.storage.local.get('studyNotes');

  await chrome.storage.local.set({
    studyNotes: [...studyNotes, studyNote]
  });

  return studyNote;
}

// Open a saved note at its original timestamp
function getTimestampUrl(videoId, timestamp) {
  return \`https://youtube.com/watch?v=\${videoId}&t=\${timestamp}s\`;
}`
  }
];


function DevConsole() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const activeFile = codeFiles[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="dev-console">
      {/* Console Top Bar */}
      <div className="console-top">
        <div className="console-dots" aria-hidden="true">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="console-tabs" role="tablist">
          {codeFiles.map((file, idx) => (
            <button
              key={file.name}
              role="tab"
              aria-selected={activeTab === idx}
              className={`console-tab ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <FileCode size={12} />
              <span>{file.name}</span>
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="console-copy-btn"
          aria-label="Copy snippet"
          title="Copy code snippet"
        >
          {copied ? <Check size={13} className="text-emerald" /> : <Copy size={13} />}
        </button>
      </div>

      {/* Code Header Metadata */}
      <div className="console-meta">
        <div>
          <span className="meta-project">{activeFile.project}</span>
          <span className="meta-desc">{activeFile.summary}</span>
        </div>
        <span className="meta-badge">{activeFile.badge}</span>
      </div>

      {/* Code Display Stage */}
      <div className="console-body">
        <pre tabIndex={0}>
          <code>{activeFile.code}</code>
        </pre>
      </div>

      {/* Console Status Bar */}
      <div className="console-status">
        <div className="status-left">
          <Terminal size={11} />
          <span>{activeFile.lang}</span>
          <span className="sep">•</span>
          <span>UTF-8</span>
          <span className="sep">•</span>
          <span>git:main*</span>
        </div>
        <div className="status-right">
          <span className="pulse-dot" />
          <span>SYS.ONLINE // 200 OK</span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      {/* Subtle crisp paper grain texture */}
      <div className="noise-overlay" aria-hidden="true" />
      {/* Custom desktop cursor */}
      <CustomCursor />
      {/* Background architectural watermark */}
      <div className="hero-bg-text" aria-hidden="true">
        BUILD
      </div>

      <div className="hero-inner container">
        {/* Editorial Top Monospace Label */}
        <m.div
          className="hero-label"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="label-line" aria-hidden="true" />
          <span>Full-Stack Developer &amp; ECE Undergrad</span>
          <span aria-hidden="true">IIITDM Jabalpur</span>
        </m.div>

        {/* Big Expressive Heading */}
        <h1 id="hero-title">
          <span className="hero-name" aria-label="Bhavya Yadav">
            <WordReveal text="BHAVYA" delay={0.1} />
            <br />
            <WordReveal text="YADAV" delay={0.22} className="name-last" />
          </span>
        </h1>

        {/* Sub-grid: Introduction & Links + Interactive Developer Console */}
        <div className="hero-sub">
          <div className="hero-left">
            <p className="hero-tagline">
              Full-stack engineer &amp; systems builder. I turn{' '}
              <em>practical ideas into robust products</em> from high-scale web platforms to applied
              AI and hardware integrations.
            </p>
            <div className="hero-actions">
              <a className="hero-btn-primary" href="#projects">
                Explore Projects
                <ArrowUpRight size={15} />
              </a>
              <a className="hero-btn-secondary" href="#contact">
                Get in Touch
                <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="hero-social">
              <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <Github size={14} />
                GitHub
              </a>
              {site.linkedin && (
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <ArrowUpRight size={13} />
                  LinkedIn
                </a>
              )}
              {site.email && (
                <a href={`mailto:${site.email}`} aria-label="Send email">
                  <Mail size={14} />
                  Email
                </a>
              )}
              {site.resume && (
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download resume"
                >
                  <ArrowUpRight size={13} />
                  Resume
                </a>
              )}
            </div>
          </div>

          {/* Interactive Developer Code Console */}
          <div className="hero-right">
            <div className="hero-status">
              <span className="status-dot" />
              <span>{site.status}</span>
              <span className="status-inst">IIITDM Jabalpur</span>
            </div>
            <DevConsole />
            <div className="visual-foot">
              <span>
                <Globe2 size={13} />
                {site.location} · 23.17°N 79.98°E
              </span>
              <a
                href="#about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'inherit',
                }}
              >
                <span>SCROLL TO EXPLORE</span>
                <ArrowDown size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="hero-bottom-bar container" aria-hidden="true">
        <span>
          ENGINEER BY EDUCATION. <strong>DEVELOPER BY CURIOSITY.</strong>
        </span>
        <span>IIITDM Jabalpur · Full-Stack &amp; Applied AI</span>
        <a href="#about">
          Explore
          <ArrowDown size={12} />
        </a>
      </div>
    </section>
  );
}
