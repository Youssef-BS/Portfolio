import React, { Suspense } from 'react'
import "./hero.css"
import Speech from './Speech'
import me from "../../assets/Me.png"
import { motion } from 'motion/react'
import { animate } from 'motion'
import { Canvas } from '@react-three/fiber'
import Shape from './Shape'


const awardVariants = {
  initial : {
    x : -100,
    opacity : 0,
  } ,
  animate : {
    x  : 0 , 
    opacity : 1,
    transition : {
      duration: 1 , 
      staggerChildren : 0.2
    }
  }
}

const followVariants = {
  initial : {
    y : -100,
    opacity : 0,
  } ,
  animate : {
    y  : 0 , 
    opacity : 1,
    transition : {
      duration: 1 , 
      staggerChildren : 0.2
    }
  }
}

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hSection left">
        <motion.h1 
        initial={{ y : -100 , opacity : 0}}
        animate={{ y : 0, opacity : 1 }} 
        transition={{ duration: 1}}
        className="hTitle">
          Hey There,<br />
          <span>I'm youssef!</span>
        </motion.h1>
        <motion.div variants={awardVariants}
        initial = 'initial'
        animate = 'animate'
        className='awards'
        >
          <motion.h2  variants={awardVariants} 
          >
            Fullstack Developer
            </motion.h2>
          <motion.p  variants={awardVariants}>I'am a Fullstack developer with experience building Web , Mobile and Desktop applications.

          </motion.p>
           <motion.div  variants={awardVariants} className="awardList">
            <motion.img  variants={awardVariants} width={50} src="https://static.vecteezy.com/system/resources/previews/033/176/438/non_2x/software-developer-icon-vector.jpg" alt="" />
            <img width={50} src="https://cdn-icons-png.flaticon.com/512/7141/7141724.png" alt="" />
           </motion.div>
        </motion.div>
        <motion.a animate = {{y : [0 , 5] , opacity : [0,1,0]}} 
        transition={{
          repeat: Infinity ,
          duration: 4 ,
          ease: 'easeInOut'}}
        href='#services' className='scroll'>
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
            <motion.path
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
        </motion.a>
      </div>
      <div className="hSection right">
        <motion.div
        variants={followVariants}
        initial = 'initial'
        animate = 'animate'
        className='follow'>
         <motion.a variants={followVariants} href="https://www.instagram.com/youssef_ben_said__/#">
          <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="" />
         </motion.a>
         <motion.a variants={followVariants} href="https://www.linkedin.com/in/youssef-ben-said-13051122b/?originalSubdomain=tn">
          <img  width={50} src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
         </motion.a>
         <motion.div variants={followVariants} className="followTextContainer">
          <div className="followText">
            FOLLOW ME
          </div>
         </motion.div>
        </motion.div>
        <Speech />
        <motion.div className="certeficate"
            animate={{ opacity : [0 , 1]}}
            transition={{ duration: 1}}
        >
          <img src='https://cdn-icons-png.flaticon.com/512/7141/7141724.png' alt=''/>
      <p>Bachelor's degree
        <br />
       in Information Systems Development.</p> 
        </motion.div>
        <motion.a
        animate={{ x : [200, 0] , opacity : [0,1] }}
        transition={{ duration: 1}}
        href='/#contact' className='contactLink'>
        <motion.div className="contactButton"
        animate={{rotate : [0 , 360]}}
        transition={{duration: 10 , repeat: Infinity , ease: 'linear'}}
        >
        <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
          <div className="arrow">
            <svg
            xmlns="http://www.w3/org/2000/svg"
            viewBox='0 0 24 24'
            width="50"
            height="50"
            fill='none'
            stroke='black'
            strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6"/>
              <polyline points='9 6 18 6 18 15'/>
            </svg>
          </div>
        </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        <Canvas>
          <Suspense fallback={<div>Loading...</div>}>
          <Shape />
          </Suspense> 
        </Canvas>
        <div className="hImg">
          <img src={me} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero