import {
  ArrowDownToLine,
  ArrowRight,
  BookOpen,
  Camera,
  GraduationCap,
  Leaf,
  LockKeyhole,
  Search,
  ShieldCheck,
} from 'lucide-react';
import type { ProjectId } from '../data/projects';
import { ContriFlowGallery } from './ContriFlowGallery';

function FocusPreview() {
  return (
    <div className="focus-composition" aria-hidden="true">
      <div className="focus-library">
        <div className="preview-window-bar">
          <span className="window-dots">
            <i />
            <i />
            <i />
          </span>
          <span>FocusTube / Study Library</span>
          <ArrowDownToLine size={11} />
        </div>
        <div className="focus-library-inner">
          <div className="focus-brand">
            <GraduationCap size={19} />
            <strong>FocusTube</strong>
            <span>YOUR LEARNING, ORGANIZED.</span>
          </div>
          <div className="focus-widgets">
            <div className="focus-search">
              <strong>Search Library</strong>
              <span>Find lectures, notes, slides, or problem URLs.</span>
              <div>
                <Search size={12} />
                Search lectures, notes, or URLs...
              </div>
            </div>
            <div className="focus-storage">
              <BookOpen size={18} />
              <strong>Your study space.</strong>
              <span>Notes. Slides. Connections.</span>
              <small>STORED LOCALLY</small>
            </div>
          </div>
          <div className="focus-topics">
            <span>All Topics</span>
            <span># development</span>
            <span># learning</span>
          </div>
          <div className="focus-note">
            <span className="lecture-icon">
              <BookOpen size={22} />
            </span>
            <div>
              <strong>A place for every lightbulb moment.</strong>
              <span>Timestamped notes · Captured slides · Reference links</span>
            </div>
          </div>
        </div>
      </div>
      <div className="focus-popup">
        <div className="popup-title">
          <GraduationCap size={17} />
          <strong>FocusTube</strong>
          <small>v1.0</small>
        </div>
        <div className="popup-study">
          <b>Study Library</b>
          <span>Keep the important parts.</span>
          <div>
            <BookOpen size={12} />
            Open Study Library
            <ArrowRight size={12} />
          </div>
        </div>
        <div className="popup-guard">
          <ShieldCheck size={15} />
          <b>Shorts Guard</b>
          <small>Focus Mode</small>
        </div>
        <div className="popup-shortcuts">
          <span>Capture a note</span>
          <kbd>Alt + N</kbd>
          <span>Save a slide</span>
          <kbd>Alt + S</kbd>
        </div>
      </div>
    </div>
  );
}

function LeafPreview() {
  return (
    <div className="leaf-composition" aria-hidden="true">
      <span className="leaf-brand">
        <Leaf size={20} />
        LeafLock<span>A LITTLE OUTDOOR CURIOSITY.</span>
      </span>
      <div className="leaf-flow">
        <div className="leaf-note">
          <span>PLAYER 1 / LOCK</span>
          <div className="leaf-icon">
            <Leaf size={42} strokeWidth={1.5} />
          </div>
          <b>A landmark becomes a key.</b>
          <small>
            <LockKeyhole size={11} />
            Hide a secret note
          </small>
        </div>
        <span className="leaf-arrow">
          <ArrowRight size={23} />
        </span>
        <div className="leaf-photo">
          <span>PLAYER 2 / HUNT</span>
          <div className="camera-frame">
            <Camera size={35} strokeWidth={1.5} />
          </div>
          <b>Follow the riddle.</b>
          <small>Match the photo. Find the note.</small>
        </div>
      </div>
      <span className="leaf-bottom">REAL-WORLD OBJECTS. DIGITAL DISCOVERIES.</span>
    </div>
  );
}

export function ProjectPreview({ id }: { id: ProjectId }) {
  if (id === 'focustube') return <FocusPreview />;
  if (id === 'contriflow') return <ContriFlowGallery />;
  if (id === 'leaflock') return <LeafPreview />;
  return (
    <div className="rentra-composition">
      <img
        src="/images/rentra.webp"
        alt="Rentra’s live property listing page with location search, category filters, and accommodation cards"
        loading="lazy"
        decoding="async"
        width="1272"
        height="716"
      />
    </div>
  );
}
