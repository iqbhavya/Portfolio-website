import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'motion/react';
import { ArrowUpRight, FileDown, Menu, X } from 'lucide-react';
import { navigation, site } from '../data/site';
import { useActiveSection } from '../hooks/useActiveSection';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const toggle = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const media = window.matchMedia('(min-width: 900px)');
    const onResize = () => { if (media.matches) setOpen(false); };
    document.addEventListener('keydown', onKey);
    media.addEventListener('change', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      media.removeEventListener('change', onResize);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="nav-inner container">
        <a href="#home" className="wordmark" aria-label="Bhavya, home">
          BHAVYA<span>.</span>
          <span className="brand-slash">/</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? 'location' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          {site.resume ? (
            <a className="nav-cta" href={site.resume} target="_blank" rel="noreferrer">
              Resume
              <FileDown size={13} />
            </a>
          ) : (
            <a className="nav-cta" href="#contact">
              Let's talk
              <ArrowUpRight size={13} />
            </a>
          )}
          <button
            ref={toggle}
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <m.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ height: reduced ? 'auto' : 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: reduced ? 'auto' : 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.22 }}
          >
            <div className="container">
              {navigation.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={active === link.id ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
