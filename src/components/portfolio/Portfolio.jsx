import React from 'react'
import "./portfolio.css"
import { link } from 'motion/react-client'


const items = [
  { id: 1, img :"/super-market.png" , title: "Full Stack e-commerce application , online Marketplace for Buying Items .", description: "An e-commerce marketplace allowing sellers to list their products and users to make purchases through a secure and user-friendly platform. The site includes a product management system, shopping cart, online payment, and order tracking features." , link : "/" },
  { id: 2, img :"/e-commerce-old-new.png" ,title: "Online Marketplace for Buying & Selling New & Used Items", description: "Developed a modern e-commerce platform where users can buy and sell new or second-hand clothes, electronics, accessories, and more" , link : "/" },
  { id: 3, img :"/visual-audio.png" , title: "E-Commerce Website for Buying Audio & Visual Products", description: "Developed a full-featured e-commerce platform for purchasing audio and visual products, offering a seamless shopping experience" , link : "/" },
  { id: 4, img :"/transform.png", title: "Home Moving & Item Exchange Platform", description: "Developed a web platform that allows users to exchange items, move house, and manage relocations efficiently." , link : "/" },
]


const ListItems = ({ items }) => {
  return (
    <div className='pItem'>
      <div className="pImg">
        <img src={items.img} alt="" />
      </div>
      <div className="pText">
        <h1>{items.title}</h1>
        <p>{items.description}</p>
        <a href={items.link}>
          <button className='pBtn'>View Project</button>
        </a>
      </div>
    </div>
  )
}

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className="pList">
        {items.map((item) => (
          <ListItems key={item.id} items={item} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio