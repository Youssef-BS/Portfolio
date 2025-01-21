import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'motion/react'


const Speech = () => {
  return (
    <motion.div
    animate={{ opacity : [0 , 1]}}
    transition={{ duration: 1}}
    className='bubbleContainer'>
        <div className="bubble">
        <TypeAnimation
      sequence={[
        1000 ,
        'Same subscribing at the start will only be typed out once , initially',
        1000, 
        'Im a FullSatck Developer!',
        1000,
      ]}
      wrapper="span"
      speed={40}
      deletionSpeed={60}
      repeat={Infinity}
    />
        </div>
        <motion.img src='https://avatars.githubusercontent.com/u/98808290?v=4' alt=''/>
    </motion.div>
  )
}

export default Speech