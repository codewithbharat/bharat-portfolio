import React from 'react'
import './styles/Footer.css'

import { AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/Bs'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <span>find me in :</span>
                <a href="#"><AiOutlineTwitter /> </a>
                <a href="#"> <BiLogoLinkedin /> </a>
                <a href="#"> <BsInstagram /> </a>
            </div>
            <div className="footer__right">
                <a href="#"> @codewithbharat <BiLogoGithub /></a>
            </div>
        </div>
    )
}

export default Footer