

const FeaturedProjects = () => {
  return (
    <section className="h-[500px] bg-[#FBFBFB]" id="projects">
        <div className="w-4/5 mx-auto ">
            <div className="flex items-center gap-x-5 pt-10 mt-10">
                <svg width="20" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="2" fill="#D9D9D9"/>
                </svg>
                <p className="uppercase text-gray-500 tracking-[0.25em]">My works</p>
            </div>
            <h2 className="mb-20 text-2xl font-bold hidden">Featured Projects</h2>
            <div>
                <p className="font-bold text-3xl md:text-5xl text-center mt-20">New projects coming soon...</p>
            </div>
        </div>
    </section>
  )
}

export default FeaturedProjects
