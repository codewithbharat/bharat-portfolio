import React, { useEffect } from 'react'
import './styles/Contact.css'
import Tab from '../components/Tab'
import Sidebar from '../components/Sidebar'
import { motion } from 'framer-motion'

const Contact = () => {
    useEffect(() => {
        document.title = "Contact Me";
    }, []);
    return (
        <div className="contact">
            <Tab name="contacts" />
            <Sidebar brand="Contact">
                children
            </Sidebar>
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="contact__page">
                <div className="contact__page-form">
                    <form>
                        <label>_name:
                            <input type="text" />
                        </label>
                        <label>_email:
                            <input type="text" />
                        </label>
                        <label>_message:
                            <textarea />
                        </label>
                        <label>
                            <input id='submit' type="submit" value="submit-message" />
                        </label>
                    </form>
                </div>
                <div className="contact__page-code">
                    asdfsdf
                </div>
            </motion.div>
        </div>
    )
}

export default Contact