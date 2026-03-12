import { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState('wine-lilac');

    useEffect(() => {
        // Read from local storage or default to wine-lilac
        const savedTheme = localStorage.getItem('iosinsights-theme') || 'wine-lilac';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'wine-lilac' ? 'terracotta' : 'wine-lilac';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('iosinsights-theme', newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            style={{
                position: 'fixed',
                bottom: '2rem',
                left: '2rem',
                zIndex: 9999,
                backgroundColor: 'var(--color-wine)',
                color: 'var(--color-cream)',
                border: '1px solid var(--color-lilac)',
                borderRadius: '50px',
                padding: '0.75rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'transform 0.2s',
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
            title={`Switch to ${theme === 'wine-lilac' ? 'Terracotta' : 'Wine/Lilac'} Theme`}
        >
            <Palette size={16} />
            <span>Theme: {theme === 'wine-lilac' ? 'Original' : 'Terracotta'}</span>
        </button>
    );
}
