import { useState, useEffect } from 'react';
import './App.css';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Skills } from './sections/Skills/Skills';
import { Experience } from './sections/Experience/Experience';
import { Education } from './sections/Education/Education';
import { Contact } from './sections/Contact/Contact';

const NAV_SECTIONS = ['about', 'skills', 'experience', 'education', 'contact'] as const;
type SectionId = typeof NAV_SECTIONS[number];

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('about');

  // ── Theme: default dark, persisted in localStorage ───────────────────────
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // default to dark
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.add('theme-transitioning');
    setIsDark((prev) => !prev);
    window.setTimeout(() => html.classList.remove('theme-transitioning'), 320);
  };

  // ── Active section tracking ───────────────────────────────────────────────
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="layout">
      {/* ── Left panel (sticky) ─── */}
      <Hero activeSection={activeSection} isDark={isDark} onToggleTheme={toggleTheme} />

      {/* ── Right panel (scrolls) ─── */}
      <main id="main-content" className="rightPanel">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
