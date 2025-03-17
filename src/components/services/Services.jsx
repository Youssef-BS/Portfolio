import React from 'react'
import "./service.css"

const services = [
  {
    id: 1,
    img: '/service1.png', 
    title: "Web Development",
    counter: 13
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
  return (
    <div className='services'>
      <div className='sSection left'>
       <h1 className='sTitle'>How do I help ?</h1>
       <div className="serviceList">
          {services.map((service) => (
              <div className="service" key={service.id}>
                <div className="serviceIcon">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="serviceInfo">
                  <h2>{service.title}</h2>
                  <h3>+ {service.counter} Projects</h3>
                </div>
              </div>
          ))}
        </div>
      </div>
      <div className='sSection right'>
  
      </div>
    </div>
  )
}

export default Services