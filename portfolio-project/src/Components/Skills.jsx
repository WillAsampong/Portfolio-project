import AnalyticsSVG from "./SVGs/AnalyticsSVG"
import GitSVG1 from "./SVGs/GitSVG1"
import GlobeSVG from "./SVGs/GlobeSVG"


const Skills = () => {
  return (
    <section className="h-screen bg-[#FBFBFB]">
        <div className="w-4/5 mx-auto">
            <div className="flex items-center justify-center gap-x-5 pt-10">
                <svg width="20" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="2" fill="#D9D9D9"/>
                </svg>
                <p className="uppercase text-gray-500">Skills</p>
            </div>
            <h2 className="font-bold text-4xl mt-5 mb-20 text-center">Specialized In</h2>
            <div className="flex justify-center gap-x-6 ">
                <div className="web-development flex-1 flex flex-col items-center gap-y-4 py-10 px-5 rounded-md bg-white">
                    <div className="web-icon bg-[#F5F3FE] p-4 rounded-lg">
                        <GlobeSVG />
                    </div>
                    <div className="title">
                        <h6 className="text-lg">Web Development</h6>
                    </div>
                    <div className="desc">
                        <p className="text-wrap text-sm text-center">Create and maintain your websites and also take care of its performance and traffic capacity.</p>
                    </div>
                </div>
                <div className="web-development flex-1 flex flex-col items-center gap-y-4 py-10 px-5 rounded-md bg-white">
                    <div className="web-icon bg-[#F5F3FE] p-4 rounded-lg">
                        <AnalyticsSVG />
                    </div>
                    <div className="title">
                        <h6 className="text-lg">Data Analytics</h6>
                    </div>
                    <div className="desc">
                        <p className="text-wrap text-sm text-center">Create and maintain your websites and also take care of its performance and traffic capacity.</p>
                    </div>
                </div>
                <div className="web-development flex-1 flex flex-col items-center gap-y-4 py-10 px-5 rounded-md bg-white">
                    <div className="web-icon bg-[#F5F3FE] p-4 rounded-lg">
                        <GitSVG1 />
                    </div>
                    <div className="title">
                        <h6 className="text-lg">Version Control</h6>
                    </div>
                    <div className="desc">
                        <p className="text-wrap text-sm text-center">Create and maintain your websites and also take care of its performance and traffic capacity.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
