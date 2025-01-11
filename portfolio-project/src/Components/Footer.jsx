import GithubSVG from "./SVGs/GithubSVG"
import LinkedInSVG from "./SVGs/LinkedInSVG"
import TwitterSVG from "./SVGs/TwitterSVG"
// import { format } from 'date-fns'


const Footer = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

  return (
    <footer className="bg-[#FBFBFB] mt-10">
        <div className="w-full md:w-4/5 mx-auto flex flex-col justify-center items-center gap-y-6 p-12">
            <div className="social-links flex gap-x-6 ">
                <a href="https://github.com/WillAsampong" target="blank"><GithubSVG /></a>
                <a href="https://x.com/WillAsampong19" target="blank"><TwitterSVG /></a>
                <LinkedInSVG />
            </div>
            <div className="copyright text-gray-500">
                &copy; {year} - Asampong Godswill
            </div>
        </div>
    </footer>
  )
}

export default Footer
