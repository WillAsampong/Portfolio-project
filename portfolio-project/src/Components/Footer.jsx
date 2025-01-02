import GithubSVG from "./SVGs/GithubSVG"
import InstagramSVG from "./SVGs/InstagramSVG"
import LinkedInSVG from "./SVGs/LinkedInSVG"
import TwitterSVG from "./SVGs/TwitterSVG"


const Footer = () => {
  return (
    <footer className="bg-[#FBFBFB] mt-10">
        <div className="w-full md:w-4/5 mx-auto flex flex-col justify-center items-center gap-y-6 p-12">
            <div className="social-links flex gap-x-6 ">
                <InstagramSVG/>
                <GithubSVG />
                <TwitterSVG />
                <LinkedInSVG />
            </div>
            <div className="copyright text-gray-500">
                &copy; 2025 - Asampong Godswill
            </div>
        </div>
    </footer>
  )
}

export default Footer
