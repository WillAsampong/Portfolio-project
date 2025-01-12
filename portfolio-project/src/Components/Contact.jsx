import AddressSVG from './SVGs/AddressSVG'
import PhoneSVG from './SVGs/PhoneSVG'
import EmailSVG from './SVGs/EmailSVG'
import Modal from '../Components/Modal'
import { useState } from 'react'
import { motion } from 'motion/react'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});
    // const [isSubmitted, setIsSubmitted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    const validate = (value) => {
        const errors = {};

        if(!value.name) {
            errors.name = 'Name is required'
        }

        if(!value.email) {
            errors.email = 'email is required'
        } else if (!/\S+@\S+\.\S+/.test(value.email)) {
            errors.email = 'Email is invalid'
        }

        if(!value.message) {
            errors.message = 'Type your message'
        }

        return errors
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formData));
        // setIsSubmitted(true);
        setIsModalOpen(true);
        setFormData({
            name: '',
            email: '',
            message: ''
        })
    }

    const contactVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.3,
                duration: 0.3,
                ease: 'easeIn'
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 30 },
      }

  return (
    <section className="bg-white md:h-[600px]" id='contact'>
        <div className="md:w-4/5 mx-auto px-4 md:px-0">
            <div className="flex items-center gap-x-5 pt-10 mb-10">
                <svg width="20" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="2" fill="#D9D9D9"/>
                </svg>
                <p className="uppercase text-gray-500">Get in touch</p>
            </div>
            <div
             className="md:flex-row md:flex justify-around flex-col-reverse">
                <motion.div
                 className="contact-form flex-1"
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.3, delay: 0.3 }}
                 viewport={{ once: true }}
                 >
                    <form 
                    action="" 
                    className="flex flex-col gap-y-4"
                    onSubmit={handleSubmit}
                    >
                        <input 
                        name='name'
                        type="text" 
                        placeholder="Name" 
                        className="bg-[#FBFBFB] outline-none border-none py-4 px-2"
                        value={formData.name}
                        onChange={handleChange}
                        />
                        {formErrors.fullname && <span className="text-red-500 text-sm">{formErrors.fullname}</span>}
                        <input 
                        name='email'
                        type="email" 
                        placeholder="Email" 
                        className="bg-[#FBFBFB] outline-none border-none py-4 px-2"
                        value={formData.email}
                        onChange={handleChange}
                        />
                        {formErrors.email && <span className="text-red-500 text-sm">{formErrors.email}</span>}
                        <textarea 
                        cols={7} 
                        rows={7} 
                        name="message" 
                        id="" 
                        placeholder="Message" 
                        className="bg-[#FBFBFB] py-4 px-2 outline-none"
                        value={formData.message}
                        onChange={handleChange}
                        ></textarea>
                        {formErrors.message && <span className="text-red-500 text-sm">{formErrors.message}</span>}
                        <button type='submit' className="bg-[#7E74F1] text-white border-none rounded-md py-3">Send Message</button>
                    </form>
                </motion.div>
                <motion.div 
                className="get-in-touch mt-6 md:flex-1 md:ml-6 flex flex-col gap-y-12"
                variants={contactVariants}
                initial="hidden"
                whileInView="visible"
                >
                    <motion.div
                     className="info-box flex items-center gap-x-6"
                     variants={itemVariants}
                     >
                        <div className="bg-[#F5F3FE] p-4 rounded-md">
                            <AddressSVG />
                        </div>
                        <div>
                            <div className="title font-semibold">Address</div>
                            <div className="body text-gray-500">HN6 Travl&apos;s Cls O&apos;Sullivan, Baatsona District</div>
                        </div>
                    </motion.div>
                    <motion.div 
                    className="info-box flex items-center gap-x-6"
                    variants={itemVariants}
                    >
                        <div className="bg-[#F5F3FE] p-4 rounded-md">
                            <PhoneSVG />
                        </div>
                        <div>
                            <div className="title font-semibold">Phone</div>
                            <div className="body text-gray-500">+233500562532</div>
                        </div>
                    </motion.div>
                    <motion.div 
                    className="info-box flex items-center gap-x-6"
                    variants={itemVariants}
                    >
                        <div className="bg-[#F5F3FE] p-4 rounded-md">
                            <EmailSVG />
                        </div>
                        <div>
                            <div className="title font-semibold">Email</div>
                            <div className="body text-gray-500">asampongg377@gmail.com</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2 className="text-3xl font-bold text-purple-500 mb-4 text-center">Message Sent</h2>
            <p className="text-center">{"Thank you for reaching out. I'll get back to you as soon as possible."}</p>
        </Modal>
    </section>
  )
}

export default Contact
