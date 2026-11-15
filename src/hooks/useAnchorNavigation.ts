import { useEffect } from 'react';

/** Animate explicit in-page navigation only. Ordinary wheel/touch scrolling stays native. */
export function useAnchorNavigation() {
  useEffect(() => {
    let frame = 0;
    const cancel = () => cancelAnimationFrame(frame);
    const navigate = (id: string, animate: boolean) => {
      const section = document.getElementById(id);
      if (!section) return;
      cancel();
      const start = window.scrollY;
      const header = document.querySelector('header')?.getBoundingClientRect().height ?? 0;
      const destination = Math.max(
        0,
        Math.min(
          start + section.getBoundingClientRect().top - header - 20,
          document.documentElement.scrollHeight - window.innerHeight,
        ),
      );
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const duration = animate && !reduced ? 440 : 0;
      const started = performance.now();
      const tick = (now: number) => {
        const progress = duration ? Math.min(1, (now - started) / duration) : 1;
        const eased = 1 - (1 - progress) ** 3;
        window.scrollTo({ top: start + (destination - start) * eased, behavior: 'instant' });
        if (progress < 1) frame = requestAnimationFrame(tick);
        else {
          section.tabIndex = -1;
          section.focus({ preventScroll: true });
        }
      };
      frame = requestAnimationFrame(tick);
    };
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const anchor =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>('a[href^="#"]')
          : null;
      const id = anchor?.getAttribute('href')?.slice(1);
      if (!id || !document.getElementById(id)) return;
      event.preventDefault();
      if (location.hash !== `#${id}`) history.pushState(null, '', `#${id}`);
      navigate(id, true);
    };
    const onHistory = () => navigate(location.hash.slice(1) || 'home', false);
    const onKey = (event: KeyboardEvent) => {
      if (
        ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', 'Escape', ' '].includes(
          event.key,
        )
      )
        cancel();
    };
    document.addEventListener('click', onClick);
    window.addEventListener('popstate', onHistory);
    window.addEventListener('wheel', cancel, { passive: true });
    window.addEventListener('touchstart', cancel, { passive: true });
    window.addEventListener('keydown', onKey);
    if (location.hash) onHistory();
    return () => {
      cancel();
      document.removeEventListener('click', onClick);
      window.removeEventListener('popstate', onHistory);
      window.removeEventListener('wheel', cancel);
      window.removeEventListener('touchstart', cancel);
      window.removeEventListener('keydown', onKey);
    };
  }, []);
}
