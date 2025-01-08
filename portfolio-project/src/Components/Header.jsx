// import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import HamburgerSVG from './SVGs/HamburgerSVG'
import CloseSVG from './SVGs/CloseSVG'
import GithubSVG from "./SVGs/GithubSVG"
import LinkedInSVG from "./SVGs/LinkedInSVG"
import TwitterSVG from "./SVGs/TwitterSVG"

const Header = () => {

  const [shadow, setShadow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" })
  }

  const isOpen = () => {
    setOpen(!open);
    console.log('yah')
  }
  const closeMenu = () => {
    setOpen(false)
  }

  const navlinks = [
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "About", 
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    }, 
    {
      name: "Contact", 
      link: "#contact",
    }
  ]


  return (
    <header className={`py-4 px-2 md:px-0 ${shadow ? 'shadow-md' : ''} fixed top-0 left-0 right-0 bg-white z-50 transition-shadow duration-300`}>
      <div className="md:w-4/5 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-x-2 cursor-pointer" onClick={pageUp}>
          <div className="logo">
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0.5C9 0.5 0 9.5 0 20.5C0 31.5 9 40.5 20 40.5C31 40.5 40 31.5 40 20.5C40 9.5 31 0.5 20 0.5ZM11.8 28C9.6 28 7.8 26.2 7.8 24C7.8 21.8 9.6 20 11.8 20C14 20 15.8 21.8 15.8 24C15.8 26.2 14 28 11.8 28ZM28.5 26.9C26.7 28 24.3 27.3 23.2 25.5L17.6 15.8C16.5 14 17.2 11.6 19 10.5C20.8 9.4 23.2 10.1 24.3 11.9L29.9 21.6C31 23.5 30.3 25.9 28.5 26.9Z" fill="#232E35"/>
            </svg>
          </div>
          <div className="name">
            <p className="font-bold">Will</p>
          </div>
        </div>
        
        <nav>
          <ul className="md:flex gap-x-6 hidden">
            {navlinks.map((item) => (
              <li key={item.name} className="hover:text-[#7E74F1] font-semibold transition-all duration-500">
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>

          <div className="md:hidden" onClick={isOpen}>
            {open ? <CloseSVG /> : <HamburgerSVG />}
          </div>
          
          {/* Mobile menu */}

          <div className={`mobile-menu absolute ${ open ? "left-0" : "-left-full " } transition-all duration-500 top-16 w-full h-screen bg-white md:hidden`}>
            <div className="md:hidden absolute top-0 left-6 translate-y-1/2 ">
              <ul className="flex flex-col gap-y-6">
                {navlinks.map((item) => (
                  <li key={item.name} className="hover:text-[#7E74F1] text-2xl font-semibold transition-all duration-500">
                    <a href={item.link} onClick={closeMenu}>{item.name}</a>
                  </li>
                ))}
                <div className="flex gap-x-6 mt-10">
                  <a href="https://github.com/WillAsampong" target="blank"><GithubSVG /></a>
                  <a href="https://x.com/WillAsampong19" target="blank"><TwitterSVG /></a>
                  <LinkedInSVG />
                </div>
              </ul>
            </div>
          </div>

        </nav>
        <div className="resume hidden md:flex">
          <button className="px-4 py-2 rounded-md border">Resume</button>
        </div>
      </div>
    </header>
  )
}

export default Header
