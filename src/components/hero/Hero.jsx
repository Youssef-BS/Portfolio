import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hSection left">
        <h1 className="hTitle">
          Hey There , <br />
          <span>I'm youssef!</span>
        </h1>
        <div className='awards'>
          <h2>Fullstack Developer</h2>
          <p>I'am a Fullstack developer with experience building Web , Mobile and Desktop applications.</p>
           <div className="awardList">
            <img src="data:image/png;base64,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" alt="" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="" />
           </div>
        </div>
        <a href='#services'>
        <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </div>
      <div className="hSection right">
        <div className='follow'>
         <a href="">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="" />
         </a>
         <a href="https://www.linkedin.com/in/youssef-ben-said-13051122b/?originalSubdomain=tn">
          <img src="data:image/png;base64,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" alt="" />
         </a>
        </div>
      </div>
    </div>
  )
}

export default Hero