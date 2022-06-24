import React from 'react';
import my_image from '../../images/robin.jpg';
import './About.css';
import Typewriter from "typewriter-effect";
const About = () => {
    return (
        <div>
            <h1 className='p-5 text-center font-[poppins] text-3xl font-bold'>About Me</h1>
            <div className='flex justify-evenly bg-zinc-800'>
                <div className='p-5'>
                    <img className='rounded border-8 border-blue-300 hover:opacity-80 hover:scale-105 duration-300' width='300px' src={my_image} alt="" />
                </div>
                <div className='p-5 mt-5 mb-5 text-white about-text'>
                    <h1 className='font-bold text-4xl hover-text font-[poppins] text-center'>Md. Rakibul Hassan Robin</h1>
                    <div className='anim text-center mt-5 mb-5'>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Hi, I am a web developer")
                                    .pauseFor(1000)
                                    .deleteAll(50)
                                    .typeString("Welcome to my page")
                                    .start();
                            }}
                        />
                    </div>
                    <p className='font-[poppins] mb-5 font-light text-lg'> Hi, I'm a passionate learner who's always willing to learn and work across technologies. I love to explore and try to solve real-life problems. I'm currently doing web development course from ProgrammingHero. I have learned so many things from my student life. In this year, my goal is to get ready to puy myself in job sector.  I want to show my experiences, and work hard to reach that goal to get the success. </p>
                    <div className='flex justify-center'>
                        <a href="https://github.com/robinrakibul" target='_blank'>
                            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Check My Github</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;