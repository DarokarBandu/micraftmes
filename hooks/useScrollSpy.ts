import { useState, useEffect, useRef } from 'react';

export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState(sectionIds[0]);
  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const updateActiveSection = () => {
      if (isClickScrolling.current) return;

      const threshold = offset + 60;
      let currentSection = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            currentSection = id;
          }
        }
      }

      // If scrolled near bottom of the document, activate the last section
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const windowBottom = window.innerHeight + window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        if (windowBottom >= docHeight - 150) {
          currentSection = sectionIds[sectionIds.length - 1];
        }
      }

      setActiveId(currentSection);
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [sectionIds, offset]);

  const scrollTo = (id: string) => {
    isClickScrolling.current = true;
    setActiveId(id);

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    const targetElement = document.getElementById(id);
    if (targetElement) {
      const headerOffset = offset;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }

    scrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 900);
  };

  return { activeId, scrollTo };
}
