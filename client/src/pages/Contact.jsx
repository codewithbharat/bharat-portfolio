import React, { useEffect, useState } from 'react'
import './styles/Contact.css'
import Tab from '../components/Tab'
import Sidebar from '../components/Sidebar'
import { motion } from 'framer-motion'

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

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
                            <input type="text"
                                maxLength={20}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label>_email:
                            <input type="text"
                                maxLength={20}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label>_message:
                            <textarea
                                maxLength={300}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </label>
                        <label>
                            <input id='submit' type="submit" value="submit-message" />
                        </label>
                    </form>
                </div>
                <div className="contact__page-code">
                    <p>
                        <span className="contact__page-code__dataType">const </span>
                        <span className="contact__page-code__syntax">button </span>
                        <span className="contact__page-code__symbol">= </span>
                        <span className='contact__page-code__syntax'>document.querySeclector</span>
                        <span className="contact__page-code__symbol">{"("}</span>
                        <span className="contact__page-code__value">'#sendBtn'</span>
                        <span className="contact__page-code__symbol">{");"} </span>
                    </p>
                    <p>{" "}</p>
                    <p>
                        <span className="contact__page-code__dataType">const </span>
                        <span className="contact__page-code__syntax">message </span>
                        <span className="contact__page-code__symbol">{"= {"} </span>
                    </p>
                    <div>
                        <p>
                            <span className="contact__page-code__syntax">name</span>
                            <span className="contact__page-code__symbol">: </span>
                            <span className="contact__page-code__value">{'"'}<span>{name}</span>{'"'}</span>
                            <span className="contact__page-code__symbol">, </span>
                        </p>
                        <p>
                            <span className="contact__page-code__syntax">email</span>
                            <span className="contact__page-code__symbol">: </span>
                            <span className="contact__page-code__value">{'"'}<span>{email}</span>{'"'}</span>
                            <span className="contact__page-code__symbol">, </span>
                        </p>
                        <p>
                            <span className="contact__page-code__syntax">message</span>
                            <span className="contact__page-code__symbol">: </span>
                            <span className="contact__page-code__value">{'"'}<span>{message}</span>{'"'}</span>
                        </p>
                    </div>
                    <p>
                        <span className="contact__page-code__symbol"> {"}"} </span>
                    </p>

                    <p>
                        <span className="contact__page-code__syntax">button.addeventListener</span>
                        <span className="contact__page-code__symbol">{"("}</span>
                        <span className="contact__page-code__value">'click</span>
                        <span className="contact__page-code__symbol">{", () => {"}</span>
                    </p>

                    <div>
                        <p>
                            <span className="contact__page-code__syntax">form.send</span>
                            <span className="contact__page-code__symbol">{"("}</span>
                            <span className="contact__page-code__syntax">message</span>
                            <span className="contact__page-code__symbol">{");"}</span>
                        </p>

                    </div>
                    <p>
                        <span className="contact__page-code__symbol">{"});"}</span>
                    </p>

                </div>
            </motion.div>
        </div>
    )
}

export default Contact