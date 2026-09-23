import { useEffect, useState } from "react";
import MoonSVG from "./SVGs/MoonSVG"
import SunSVG from "./SVGs/SunSVG"

const getInitialTheme = () => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
        return stored === 'dark';
    }
    // No explicit choice saved yet — fall back to the OS/browser preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const DarkToggle = () => {

    const [darkToggle, setDarkToggle] = useState(getInitialTheme);

    useEffect(() => {
        if (darkToggle) {
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark');
        }
    }, [darkToggle]);

    // Keep following the system preference live, but only until the
    // person explicitly clicks the toggle — after that, their choice wins.
    useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e) => {
            if (!localStorage.getItem('theme')) {
                setDarkToggle(e.matches);
            }
        };

        media.addEventListener('change', handleChange);
        return () => media.removeEventListener('change', handleChange);
    }, []);

    const toggleDarkMode = () => {
        const next = !darkToggle;
        setDarkToggle(next);
        // Only now do we persist a choice — this marks it as "explicit"
        localStorage.setItem('theme', next ? 'dark' : 'light');
    };

  return (
    <div className="dark:bg-[#1E1E1E] fixed bottom-2 right-2 z-50 bg-white shadow-md border rounded-md">
          <div className="theme-toggle p-2 cursor-pointer" onClick={toggleDarkMode}>
            { darkToggle ? <SunSVG /> : <MoonSVG /> }
          </div>
    </div>
  )
}

export default DarkToggle