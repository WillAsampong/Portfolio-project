import './App.css'
import { AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'
import About from './Components/About'
// import Contact from './Components/Contact'
import DarkToggle from './Components/DarkToggle'
import FeaturedProjects from './Components/FeaturedProjects'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import LoadingScreen from './Components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minTime = new Promise((resolve) => setTimeout(resolve, 1500));
    const pageLoad = new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", resolve);
      }
    });

    Promise.all([minTime, pageLoad]).then(() => setLoading(false));

    return () => window.removeEventListener("load", () => {});
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen key={loading}/>}
      </AnimatePresence>

      {!loading && (
        <div className='relative dark:bg-[#000000] bg-white'>
          <Header />
          <Hero />
          <About />
          <Skills />
          <FeaturedProjects />
          {/* <Contact /> */}
          <Footer />
          <DarkToggle/>
        </div>
      )}

    </>
  )
}

export default App
