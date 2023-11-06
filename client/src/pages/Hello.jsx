import React from 'react'
import './styles/Hello.css'

import { IoIosArrowForward } from 'react-icons/io'

import green from './assets/hello/green.svg'
import blue from './assets/hello/blue.svg'

const Hello = () => {
    return (
        <div className="hello">
            <div className="hello__text">
                <div className="hello__text-intro">
                    <span>Hi all, I am</span>
                    <h1>Bharat Ranjan</h1>
                    <p> <IoIosArrowForward />Full-stack Developer</p>
                </div>
                <div className="hello__text-code">
                    <span className='hello__text-code__comment'>// you can also see it on my Github page</span>
                    <p>
                        <span className="hello__text-code__dataType">const </span>
                        <span className="hello__text-code__var">githublink </span>
                        <span className="hello__text-code__equal"> = </span>
                        <a href="https://github.com/codewithbharat/" className="hello__text-code__string">"https://github.com/codewithbharat/"</a>
                    </p>
                </div>
            </div>
            <div className="hello__app">
                <img className='hellp__app__svg-green' src={green} alt="" />
                <img className='hellp__app__svg-blue' src={blue} alt="" />
            </div>
        </div>
    )
}

export default Hello