import { useEffect, useState } from 'react';
import { navigation } from '../data/site';

export function useActiveSection() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const threshold = Math.min(window.innerHeight * 0.35, 260);
      let current = 'home';
      let closestTop = -Infinity;
      for (const { id } of navigation) {
        const section = document.getElementById(id);
        const top = section?.getBoundingClientRect().top;
        if (top !== undefined && top <= threshold && top > closestTop) {
          current = id;
          closestTop = top;
        }
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4)
        current = 'contact';
      setActive(current);
      frame = 0;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);
  return active;
}
