import React from 'react'

const Technical = ({icons , title}) => {
  return (
    <>
    <div className='technologies'>
       <img src={icons} alt="icon" />
        <p>{title}</p>
    </div>
    </>
  )
}

export default Technical