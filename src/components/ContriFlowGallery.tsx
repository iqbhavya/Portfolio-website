import { useState } from 'react';
import { m, useReducedMotion } from 'motion/react';
import {
  Bell,
  Check,
  CheckCircle2,
  ChevronRight,
  Circle,
  Copy,
  ExternalLink,
  Plus,
  Search,
  Sparkles,
  Sun,
  User,
  Users,
} from 'lucide-react';
import './ProjectGallery.css';

export function ContriFlowGallery() {
  const [isHovered, setIsHovered] = useState(false);
  const reduced = useReducedMotion();

  // Smooth hover transition curve
  const hoverSpring = {
    duration: 0.65,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <div
      className="contriflow-showcase-stage"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="ContriFlow Interactive 3-Card Showcase"
    >
      {/* 3-Card Composition (Facing Front, Subtle Rightward Tilt) */}
      <div className="contriflow-scene-wrapper">
        {/* ── CARD 1: TOP-RIGHT BACK WINDOW (LANDING HERO) ── */}
        <m.div
          className="contriflow-float-tr"
          animate={reduced ? {} : { y: [-7, 7, -7] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        >
          <m.div
            className="contriflow-window contriflow-win-landing"
            animate={
              reduced
                ? {}
                : {
                    x: isHovered ? 16 : 0,
                    y: isHovered ? -14 : 0,
                  }
            }
            transition={hoverSpring}
          >
            {/* Header */}
            <div className="cflow-titlebar">
              <div className="cflow-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="cflow-brand-mini">
                <span className="cflow-logo-mark">&lt;</span>
                <strong>ContriFlow</strong>
              </div>
              <div className="cflow-nav-links">
                <span>How It Works</span>
                <span>Features</span>
                <span>Who It's For</span>
              </div>
              <div className="cflow-nav-actions">
                <span className="cflow-login-link">Log In</span>
                <span className="cflow-btn-blue-sm">Get Started</span>
              </div>
            </div>

            {/* Landing Content */}
            <div className="cflow-landing-body">
              <div className="cflow-landing-badge">
                <span className="cflow-blue-dot" />
                <span>Collaboration platform for student teams &amp; clubs</span>
              </div>
              <h4 className="cflow-landing-headline">
                Good work deserves to be seen.
              </h4>
              <p className="cflow-landing-sub">
                ContriFlow helps clubs and project teams organize their work, assign
                tasks, review contributions, and keep everyone on the same page.
              </p>
              <div className="cflow-landing-cta-row">
                <span className="cflow-btn-primary">
                  Get Started
                  <ChevronRight size={11} />
                </span>
                <span className="cflow-btn-ghost">See How It Works</span>
              </div>

              {/* Workflow Diagram Node */}
              <div className="cflow-workflow-card">
                <div className="cflow-wf-icon">
                  <User size={12} />
                </div>
                <div>
                  <strong>User workflow</strong>
                  <span>Assign tasks &amp; track metrics</span>
                </div>
              </div>
            </div>
          </m.div>
        </m.div>

        {/* ── CARD 2: BOTTOM-LEFT MID WINDOW (PROJECTS GRID) ── */}
        <m.div
          className="contriflow-float-bl"
          animate={reduced ? {} : { y: [7, -7, 7] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
        >
          <m.div
            className="contriflow-window contriflow-win-projects"
            animate={
              reduced
                ? {}
                : {
                    x: isHovered ? -16 : 0,
                    y: isHovered ? 14 : 0,
                  }
            }
            transition={hoverSpring}
          >
            {/* Header */}
            <div className="cflow-titlebar">
              <div className="cflow-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="cflow-brand-mini">
                <span className="cflow-logo-mark">&lt;</span>
                <strong>ContriFlow</strong>
                <span className="cflow-tab-pill">Projects</span>
              </div>
              <div className="cflow-projects-actions">
                <span className="cflow-btn-ghost-sm">Join with Code</span>
                <span className="cflow-btn-blue-sm">
                  <Plus size={10} />
                  New Project
                </span>
              </div>
            </div>

            {/* Projects Body */}
            <div className="cflow-projects-body">
              <div className="cflow-projects-title-row">
                <div>
                  <div className="cflow-h-flex">
                    <h5>Projects</h5>
                    <span className="cflow-num-badge">3</span>
                  </div>
                  <p>Manage your project workspaces, tasks, and team contributions.</p>
                </div>
              </div>

              {/* Filter Row */}
              <div className="cflow-filter-row">
                <div className="cflow-search-box">
                  <Search size={10} />
                  <span>Filter projects...</span>
                </div>
                <div className="cflow-filter-tabs">
                  <span className="active">All (3)</span>
                  <span>Lead (2)</span>
                  <span>Member (1)</span>
                </div>
              </div>

              {/* 3 Project Mini Cards */}
              <div className="cflow-cards-grid">
                <div className="cflow-proj-tile">
                  <div className="cflow-tile-header">
                    <span className="cflow-avatar-box av-dfp">DFP</span>
                    <div>
                      <strong>DFP</strong>
                      <small>pre final year project</small>
                    </div>
                  </div>
                  <div className="cflow-tile-footer">
                    <span>Workspace</span>
                    <ExternalLink size={10} />
                  </div>
                </div>

                <div className="cflow-proj-tile">
                  <div className="cflow-tile-header">
                    <span className="cflow-avatar-box av-hack">HA</span>
                    <div>
                      <div className="cflow-tile-name-row">
                        <strong>Hackathon Team</strong>
                        <span className="cflow-badge-lead">LEAD</span>
                      </div>
                      <small>Hackbyte IIT Jabalpur</small>
                    </div>
                  </div>
                  <div className="cflow-tile-footer">
                    <span>Workspace</span>
                    <ExternalLink size={10} />
                  </div>
                </div>

                <div className="cflow-proj-tile">
                  <div className="cflow-tile-header">
                    <span className="cflow-avatar-box av-club">CL</span>
                    <div>
                      <div className="cflow-tile-name-row">
                        <strong>Club</strong>
                        <span className="cflow-badge-lead">LEAD</span>
                      </div>
                      <small>Cultural and dancing club</small>
                    </div>
                  </div>
                  <div className="cflow-tile-footer">
                    <span>Workspace</span>
                    <ExternalLink size={10} />
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </m.div>

        {/* ── CARD 3: CENTER FOREGROUND WINDOW (ACTIVE WORKSPACE) ── */}
        <div className="contriflow-float-center">
          <m.div
            className="contriflow-window contriflow-win-workspace"
            animate={
              reduced
                ? {}
                : {
                    scale: isHovered ? 1.03 : 1,
                    y: isHovered ? -5 : 0,
                  }
            }
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Header Bar */}
            <div className="cflow-titlebar cflow-tb-workspace">
              <div className="cflow-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="cflow-brand-mini">
                <span className="cflow-logo-mark">&lt;</span>
                <strong>ContriFlow</strong>
                <span className="cflow-tab-pill">Projects</span>
              </div>
              <div className="cflow-ws-user-tray">
                <Bell size={12} className="cflow-tray-icon" />
                <Sun size={12} className="cflow-tray-icon" />
                <div className="cflow-profile-chip">
                  <div className="cflow-user-dot" />
                  <span>Bhavya Yadav</span>
                </div>
                <span className="cflow-signout-text">Sign Out</span>
              </div>
            </div>

            {/* Workspace Banner */}
            <div className="cflow-ws-banner">
              <div className="cflow-ws-club-meta">
                <span className="cflow-avatar-box av-club-lg">CL</span>
                <div>
                  <div className="cflow-tile-name-row">
                    <h3>Club</h3>
                    <span className="cflow-badge-lead">LEAD</span>
                  </div>
                  <p>Cultural and dancing club</p>
                  <div className="cflow-stats-row">
                    <span>
                      <Users size={11} /> 1 members
                    </span>
                    <span>
                      <CheckCircle2 size={11} /> 4 tasks
                    </span>
                    <span>
                      <Circle size={11} /> 0 completed
                    </span>
                  </div>
                </div>
              </div>

              <div className="cflow-ws-cta-col">
                <div className="cflow-invite-strip">
                  <small>INVITE CODE: HIDDEN</small>
                  <Copy size={10} />
                </div>
                <div className="cflow-ws-buttons">
                  <span className="cflow-btn-ai">
                    <Sparkles size={11} className="cflow-ai-sparkle" />
                    Generate Tasks with AI
                  </span>
                  <span className="cflow-btn-blue-sm">
                    <Plus size={11} />
                    Create Task
                  </span>
                </div>
              </div>
            </div>

            {/* Workspace Split Body */}
            <div className="cflow-ws-body-grid">
              {/* Left: Review Queue & Task Items */}
              <div className="cflow-review-queue-col">
                <div className="cflow-section-title-row">
                  <h6>Review Queue</h6>
                  <span className="cflow-count-tag">1</span>
                </div>

                <div className="cflow-review-list">
                  {/* Item 1 */}
                  <div className="cflow-review-item">
                    <div className="cflow-item-left">
                      <span className="cflow-check-icon approved">
                        <Check size={10} />
                      </span>
                      <div>
                        <strong>Evidence submission</strong>
                        <p>Evidence submission in approved realization</p>
                      </div>
                    </div>
                    <span className="cflow-badge-approved">✓ Approved</span>
                  </div>

                  {/* Item 2 - WITH SUBTLE PULSING AMBER DOT ON 1 PENDING */}
                  <div className="cflow-review-item cflow-item-pending">
                    <div className="cflow-item-left">
                      <span className="cflow-check-icon pending">
                        <Check size={10} />
                      </span>
                      <div>
                        <strong>Evidence submission</strong>
                        <p>Create tip submission metrics, approve dance team registration...</p>
                      </div>
                    </div>
                    <span className="cflow-badge-pending-pill">
                      <span className="contriflow-pulsing-amber-dot" />
                      1 Pending
                    </span>
                  </div>

                  {/* Item 3 */}
                  <div className="cflow-review-item">
                    <div className="cflow-item-left">
                      <span className="cflow-check-icon circle">
                        <Circle size={9} />
                      </span>
                      <div>
                        <strong>Pending Queues</strong>
                        <p>Evidence submission for judges...</p>
                      </div>
                    </div>
                    <span className="cflow-badge-approved">✓ Approved</span>
                  </div>

                  {/* Item 4 */}
                  <div className="cflow-review-item">
                    <div className="cflow-item-left">
                      <span className="cflow-check-icon circle">
                        <Circle size={9} />
                      </span>
                      <div>
                        <strong>Evidence submissions</strong>
                        <p>Review protocol and participant forms</p>
                      </div>
                    </div>
                    <span className="cflow-badge-pending-pill">
                      <span className="contriflow-pulsing-amber-dot" />
                      Pending
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Team Members & Tasks */}
              <div className="cflow-ws-sidebar-col">
                {/* Team Members */}
                <div className="cflow-side-card">
                  <div className="cflow-side-card-title">
                    <Users size={11} />
                    <span>Team Members (1)</span>
                  </div>
                  <div className="cflow-member-row">
                    <span className="cflow-member-avatar">BY</span>
                    <div className="cflow-member-info">
                      <strong>Bhavya Yadav</strong>
                    </div>
                    <span className="cflow-badge-lead">LEAD</span>
                  </div>
                </div>

                {/* Tasks Activity */}
                <div className="cflow-side-card">
                  <div className="cflow-side-card-title">
                    <CheckCircle2 size={11} />
                    <span>Tasks (4)</span>
                  </div>
                  <div className="cflow-task-feed">
                    <div className="cflow-feed-item">
                      <span className="feed-dot" />
                      <div>
                        <strong>Arrange prizes and certificates</strong>
                        <small>Oct 29 at 02:00 AM</small>
                      </div>
                    </div>
                    <div className="cflow-feed-item">
                      <span className="feed-dot" />
                      <div>
                        <strong>Recruit panel created Design promotions</strong>
                        <small>Oct 28 at 09:15 AM</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </div>
  );
}
