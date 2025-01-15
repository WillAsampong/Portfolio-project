import { useEffect, useState } from "react";
import MoonSVG from "./SVGs/MoonSVG"
import SunSVG from "./SVGs/SunSVG"

const DarkToggle = () => {

    const [darkToggle, setDarkToggle] = useState(
        localStorage.getItem('theme') === 'dark'
      );
    
      useEffect(() => {
        if(darkToggle) {
          document.querySelector('html').classList.add('dark');
          localStorage.setItem("theme", 'dark')
        } else{
          document.querySelector('html').classList.remove('dark')
          localStorage.setItem("theme", 'light')
        }
    }, [darkToggle])
    
    const toggleDarkMode = () => setDarkToggle(!darkToggle);

  return (
    <div className="dark:bg-[#1E1E1E] fixed bottom-2 right-2 z-50 bg-white shadow-md border rounded-md">
          <div className="theme-toggle p-2 cursor-pointer" onClick={toggleDarkMode}>
            { darkToggle ? <SunSVG /> : <MoonSVG /> }
          </div>
    </div>
  )
}

export default DarkToggle
