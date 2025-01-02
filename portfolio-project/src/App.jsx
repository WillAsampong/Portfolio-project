import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import FeaturedProjects from './Components/FeaturedProjects'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Skills from './Components/Skills'

function App() {

  return (
    <div className='relative'>
      <Header />
      <Hero />
      <Skills />
      <About />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
