import GithubSVG from "./SVGs/GithubSVG"
import LinkedInSVG from "./SVGs/LinkedInSVG"
import TwitterSVG from "./SVGs/TwitterSVG"

const Footer = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

  return (
    <footer className="bg-[#000000] p-6" id="contact">
        <div className="w-full md:w-4/5 mx-auto">
            <div className="py-16">
                <div className="">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wider text-center md:text-left">Lets work together</h2>
                    <p className=" text-gray-300 mt-2 tracking-wide text-center md:text-left">Have a project in mind? Lets collaborate and bring your ideas to life.</p>
                    <p className="text-gray-300 mt-2 tracking-wide text-center md:text-left">Feel free to reach out via email at <a href="mailto:asampongg377@gmail.com" className="text-[#7E74F1]">asampongg377@gmail.com</a></p>
                    {/* <br /> */}
                    <p className="text-gray-300 mt-2 tracking-wide text-center md:text-left">or via whatsapp at <a href="tel:+1234567890" className="text-[#7E74F1]">+233 500 562 532</a></p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse md:justify-between justify-center items-center gap-y-6  border-t border-gray-400 pt-10">
                <div className="social-links flex gap-x-6 ">
                    <a href="https://github.com/WillAsampong" target="blank" className="p-2 bg-gray-400 hover:bg-[#2D3748] transition-all ease-in-out rounded-full"><GithubSVG /></a>
                    <a href="https://x.com/WillAsampong19" target="blank" className="p-2 bg-gray-400 hover:bg-[#2D3748] transition-all ease-in-out rounded-full"><TwitterSVG /></a>
                    <a href="https://www.linkedin.com/in/will-asampong-7b3b3b2b3/" target="blank" className="p-2 bg-gray-400 hover:bg-[#2D3748] transition-all ease-in-out rounded-full"><LinkedInSVG /></a>
                </div>
                <div className="copyright text-gray-500">
                    &copy; {year} - Asampong Godswill Nana
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
