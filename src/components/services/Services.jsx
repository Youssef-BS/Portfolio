import React , {useRef} from 'react'
import "./service.css"
import Counter from './Counter';
import { motion, useInView } from 'motion/react';
import Technical from './Technical';

const textVariants = {
  initial : {
    x : -100 , 
    y:-100 , 
    opacity : 0 
  } , 
  animate : {
    x : 0 , 
    y: 0 , 
    opacity : 1 , 
    transition : {
      duration : 1 , 
    }
  } , 
}

const listVariants = {
  initial : {
    x : -100 , 
    opacity : 0 
  } , 
  animate : {
    x : 0 , 
    opacity : 1 , 
    transition : {
      duration : 1 , 
      staggerChildren : 0.5
    }
  } , 
}

const services = [
  {
    id: 1,
    img: '/service1.png', 
    title: "Web Development",
    counter: 20
  },
  {
    id: 2,
    img: '/service2.png', 
    title: "Mobile Development",
    counter: 5
  },
  {
    id: 3,
    img: '/service3.png', 
    title: "Desktop Development",
    counter: 4
  }
];


const Services = () => {

  const ref = useRef();
  const isInView = useInView(ref , {margin : "-200px"});

  return (
    <div className='services' ref={ref}>
      <div className='sSection left'>
       <motion.h1 
       variants={textVariants} 
       animate={isInView ? 'animate' : 'initial'}  
       className='sTitle'>
        How do I help ?
       </motion.h1>
       <motion.div className="serviceList" 
       variants={listVariants}
       animate={isInView ? 'animate' : 'initial'}

       >
          {services.map((service) => (
              <motion.div className="service" key={service.id}
              variants={listVariants}
              >
                <div className="serviceIcon">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="serviceInfo">
                  <h2>{service.title}</h2>
                  <h3>+ {service.counter} Projects</h3>
                </div>
              </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={23} text="Projects Completed" />
          <Counter from={0} to={17} text="Happy Clients" />
        </div>
      </div>
      <div className='sSection right'>
         <Technical icons='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIy-mzDNwEgiWKpwsy_8CK9KSr6GEnCcpgQ&s' title='Next' />
         <Technical icons='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' title='React' />
         <Technical icons='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png' title='Angular' />
      </div>
    </div>
  )
}

export default Services