import React, { useState } from 'react'
import "./homepage.css"
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';

const HomePage = () => {
  
  const [typingStatus,setTypingStatus] = useState("human1")

  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="" className='orbital' />
      <div className="left">
        <h1>SyraxAI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          At obcaecati id molestiae consequatur expedita blanditiis 
          eveniet soluta vel quidem facere consectetur, 
          nobis error, ex magni suscipit? Ex hic repellat voluptatum!
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgConatiner">
          <div className="bgContainer">
            <div className="bg"></div>
            </div>
            <img src="/bot.png" alt="" className='bot' />
            <div className="chat">
              <img src={
                  typingStatus === "human1" 
                ? "/human1.jpeg" 
                : typingStatus === "human2" 
                ? "/human2.jpeg" 
                : "/bot.png"
              } alt="" />
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Human:We produce food for Mice',
                  2000,()=>{
                    setTypingStatus("bot")
                  },
                  // wait 1s before replacing "Mice" with "Hamsters"
                  'Bot:We produce food for Hamsters',
                  2000,()=>{
                    setTypingStatus("human2")
                  },
                  'Human2:We produce food for Guinea Pigs',
                  2000,()=>{
                    setTypingStatus("bot")
                  },                  
                  'Bot:We produce food for Chinchillas',
                  2000,()=>{
                    setTypingStatus("human1")
                  },
                ]}
                wrapper="span"
                speed={50}
                cursor={true}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
                omitDeletionAnimation={true}
              />
            </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to={"/"}>Terms of Service</Link>
          <span>|</span>
          <Link to={"/"}>Privacy Policy</Link>

        </div>
      </div>
    </div>
  );
};

export default HomePage
