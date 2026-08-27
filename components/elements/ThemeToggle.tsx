'use client';

import React, { useEffect, useState } from 'react';

interface ThemeToggleProps {
  className?: string;
  floating?: boolean;
}

export default function ThemeToggle({ className = '', floating = false }: ThemeToggleProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Determine current theme from documentElement
    const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark';
    if (currentTheme) {
      setTheme(currentTheme);
    } else {
      const stored = localStorage.getItem('micraft-theme') as 'light' | 'dark' | null;
      if (stored) {
        setTheme(stored);
        document.documentElement.setAttribute('data-theme', stored);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initial = prefersDark ? 'dark' : 'light';
        setTheme(initial);
        document.documentElement.setAttribute('data-theme', initial);
      }
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('micraft-theme', nextTheme);
  };

  if (!mounted) {
    const placeholder = (
      <button
        type="button"
        className={`theme-toggle-btn ${className}`}
        aria-label="Toggle light or dark theme"
        disabled
      >
        <span className="theme-toggle-track">
          <span className="theme-toggle-icon theme-toggle-icon--sun">
            <i className="fas fa-sun"></i>
          </span>
          <span className="theme-toggle-icon theme-toggle-icon--moon">
            <i className="fas fa-moon"></i>
          </span>
          <span className="theme-toggle-thumb">
            <i className="fas fa-moon"></i>
          </span>
        </span>
      </button>
    );

    if (floating) {
      return (
        <div className="floating-theme-toggle" aria-hidden="true">
          {placeholder}
        </div>
      );
    }
    return placeholder;
  }

  const toggleButton = (
    <button
      type="button"
      className={`theme-toggle-btn ${theme === 'dark' ? 'is-dark' : 'is-light'} ${className}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-icon theme-toggle-icon--sun">
          <i className="fas fa-sun"></i>
        </span>
        <span className="theme-toggle-icon theme-toggle-icon--moon">
          <i className="fas fa-moon"></i>
        </span>
        <span className="theme-toggle-thumb">
          <i className={`fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
        </span>
      </span>
    </button>
  );

  if (floating) {
    return (
      <div 
        className="floating-theme-toggle"
        title={`Current: ${theme === 'dark' ? 'Dark' : 'Light'} Mode. Click to switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode.`}
      >
        {toggleButton}
      </div>
    );
  }

  return toggleButton;
}
