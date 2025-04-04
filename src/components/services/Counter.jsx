import {useInView , animate } from 'motion/react';
import React , {useState , useRef, useEffect} from 'react'

const Counter = ({from , to , text}) => {
  const [count , setCount] = useState(from);

  const ref = useRef();

  const isInView = useInView(ref);

  useEffect(()=> {
   const animation = animate(from , to , {
    duration : 3 ,
    ease : "easeOut" ,
    onUpdate:(prev => {
      setCount(Math.floor(prev));
    })
   })

   return () => animation.cancel()
  } , [isInView , from , to]);
  return (
    <div className='counter' ref={ref}>
        <h1>{count}+</h1>
        <p>{text}</p>
    </div>
  )
}

export default Counter