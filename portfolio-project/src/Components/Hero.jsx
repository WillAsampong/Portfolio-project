// import pic from 'portfolio-project/src/assets/vlcsnap-2023-01-07-18h19m20s099.png'

import GithubSVG from "./SVGs/GithubSVG"
import InstagramSVG from "./SVGs/InstagramSVG"
import LinkedInSVG from "./SVGs/LinkedInSVG"
import TwitterSVG from "./SVGs/TwitterSVG"

const Hero = () => {
  return (
    <section className="-mt-10 flex h-screen items-center w-4/5 mx-auto">
        <div className="hero flex-1">
            <span className="text-gray-600 text-xs flex items-center gap-x-5 uppercase "><svg width="20" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="16" height="2" fill="#D9D9D9"/>
                </svg>My name is
            </span>
            <div>
                <h1 className="text-4xl font-bold mt-5">Asampong Godswill</h1>
                <p className="text-sm text-gray-900">Aspiring Software Engineer & Data Analyst/Scientist</p>
                <span></span>
            </div>
            <div className="mt-5">
                <p className="text-wrap italic text-sm">&apos;Crafting modern web experiences and analyzing data to uncover insights..&apos;</p>
                <p>Welcome to my portfolio! I’m Asampong Godswill Nana, a second-year Computer Science and Statistics student at the University of Ghana. I’m passionate about web development and data analytics, with experience in building responsive websites and exploring data to uncover insights. Take a look at my projects and feel free to connect!</p>
            </div>
            <div className="social-links flex gap-x-6 mt-10">
                <InstagramSVG />
                <GithubSVG />
                <TwitterSVG />
                <LinkedInSVG />
            </div>
        </div>
        <div className="hero-img flex-1">
            
        </div>
    </section>
  )
}

export default Hero
