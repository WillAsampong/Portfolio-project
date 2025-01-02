import AddressSVG from './SVGs/AddressSVG'
import PhoneSVG from './SVGs/PhoneSVG'
import EmailSVG from './SVGs/EmailSVG'

const Contact = () => {
  return (
    <section className="bg-white h-[600px]" id='contact'>
        <div className="w-4/5 mx-auto ">
            <div className="flex items-center gap-x-5 pt-10 mb-10">
                <svg width="20" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="2" fill="#D9D9D9"/>
                </svg>
                <p className="uppercase text-gray-500">Get in touch</p>
            </div>
            <div className="flex justify-around">
                <div className="contact-form flex-1">
                    <form action="" className="flex flex-col gap-y-4">
                        <input type="text" placeholder="Name" className="bg-[#FBFBFB] outline-none border-none py-4 px-2"/>
                        <input type="email" placeholder="Email" className="bg-[#FBFBFB] outline-none border-none py-4 px-2"/>
                        <textarea cols={7} rows={7} name="message" id="" placeholder="Message" className="bg-[#FBFBFB] py-4 px-2"></textarea>
                        <button className="bg-[#7E74F1] text-white border-none rounded-md py-3">Send Message</button>
                    </form>
                </div>
                <div className="get-in-touch flex-1 ml-6 flex flex-col gap-y-12">
                    <div className="info-box flex items-center gap-x-6">
                        <div className="bg-[#F5F3FE] p-4 rounded-md">
                            <AddressSVG />
                        </div>
                        <div>
                            <div className="title font-semibold">Address</div>
                            <div className="body text-gray-500">HN6 Travl&apos;s Cls O&apos;Sullivan, Baatsona District</div>
                        </div>
                    </div>
                    <div className="info-box flex items-center gap-x-6">
                        <div className="bg-[#F5F3FE] p-4 rounded-md">

                        <PhoneSVG />
                        </div>
                        <div>
                            <div className="title font-semibold">Phone</div>
                            <div className="body text-gray-500">+233500562532</div>
                        </div>
                    </div>
                    <div className="info-box flex items-center gap-x-6">
                        <div className="bg-[#F5F3FE] p-4 rounded-md">

                        <EmailSVG />
                        </div>
                        <div>
                            <div className="title font-semibold">Email</div>
                            <div className="body text-gray-500">asampongg377@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
