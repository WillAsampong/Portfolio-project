// import { Link } from "react-router-dom"
import { useState } from "react"
import HamburgerSVG from './SVGs/HamburgerSVG'
import CloseSVG from './SVGs/CloseSVG'
import GithubSVG from "./SVGs/GithubSVG"
import LinkedInSVG from "./SVGs/LinkedInSVG"
import TwitterSVG from "./SVGs/TwitterSVG"
import { motion } from "motion/react"

const Header = () => {

  // const [shadow, setShadow] = useState(false);
  const [open, setOpen] = useState(false);
  

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShadow(window.scrollY > 50);
  //   }

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, []);


  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" })
  }

  const isOpen = () => {
    setOpen(!open);
  }


  const navlinks = [
    {
      name: "About", 
      link: "#about",
    },
    {
      name: "Skills",
      link: "#skills",
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

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    },
    closed: {
      x: '-100%',
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
      }
    }
  }

  const itemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-120%' },
  }

  return (
    <header className={`py-4 px-6 md:px-0 shadow-md fixed top-0 left-0 right-0 text-black z-50 transition-shadow duration-300 mx-auto md:mt-4 md:rounded-full dark:border-[#1E1E1E] backdrop-blur-md bg-white/30 dark:bg-white/30 md:w-3/5`}>
      <div className="md:w-4/5 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-x-2 cursor-pointer" onClick={pageUp}>
          <div className="name">
            <p className="font-bold md:text-md dark:text-white uppercase tracking-wider">Will</p>
          </div>
        </div>
        
        <nav>
          <ul className="md:flex md:items-center gap-x-8 hidden">
            {navlinks.map((item) => (
              <li key={item.name} className="group relative text-gray-500 dark:text-gray-300 hover:text-[#7E74F1] font-medium transition-colors duration-300">
                <a href={item.link}>{item.name}</a>
                <span className="absolute left-0 -bottom-1 h-[1.5px] w-full bg-[#7E74F1] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
              </li>
            ))}
          </ul>

          <div className="mobile-menu-btn md:hidden" onClick={isOpen}>
            {open ? <CloseSVG /> : <HamburgerSVG />}
          </div>
          
          {/* Mobile menu */}

          <div className={`mobile-menu absolute ${ open ? "left-0" : "-left-full " } transition-all duration-500 top-16 w-full h-screen bg-white md:hidden dark:bg-[#000000] dark:text-white`}>
            <div className="md:hidden absolute top-0 left-10 translate-y-1/2 ">
              <motion.ul 
              className="flex flex-col gap-y-6"
              variants={menuVariants}
              initial='closed'
              animate={open ? 'open' : 'closed'}
              >
                {navlinks.map((item) => (
                  <motion.li 
                  key={item.name} 
                  className="hover:text-[#7E74F1] text-2xl font-semibold transition-all duration-500"
                  variants={itemVariants}
                  >
                    <a href={item.link} onClick={() => setOpen(false)}>{item.name}</a>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div 
              className="flex items-end gap-x-6 mt-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1 }}
              >
                <a href="https://github.com/WillAsampong" target="blank"><GithubSVG /></a>
                <a href="https://x.com/WillAsampong19" target="blank"><TwitterSVG /></a>
                <LinkedInSVG />
              </motion.div>
            </div>
          </div>

        </nav>

        {/* Right Content */}
        
        <div className="resume hidden md:flex">
          <a href="/Asampong_Godswill_Nana_Resume.pdf" download="Asampong_Godswill_Nana_Resume.pdf" rel="noopener noreferrer" className="flex items-center gap-x-2 bg-black text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header