import React from 'react'
import './styles/Footer.css'

import { AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoLinkedin, BiLogoGithub, BiLogoInstagram } from 'react-icons/bi'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <span>find me in :</span>
                <a href="https://twitter.com/bhaarat_ranjan"><AiOutlineTwitter /> </a>
                <a href="https://www.linkedin.com/in/codewithbharat/"> <BiLogoLinkedin /> </a>
                <a href="https://www.instagram.com/bhaarat.ranjan/"> <BiLogoInstagram /></a>
            </div>
            <div className="footer__right">
                <a href="https://github.com/codewithbharat"> @codewithbharat <BiLogoGithub /></a>
            </div>
        </div>
    )
}

export default Footer