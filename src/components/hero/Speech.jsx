import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Speech = () => {
  return (
    <div className='bubbleContainer'>
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
        <img src='https://avatars.githubusercontent.com/u/98808290?v=4' alt=''/>
    </div>
  )
}

export default Speech