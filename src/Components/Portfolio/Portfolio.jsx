import React from 'react'
import style from './Portfolio.module.css'
import sora from '../../Assets/cake.png'
import home from '../../Assets/home.png'
import port from '../../Assets/port3.png'
export default function Portfolio() {
  return (
    <>
      <h2 className={`${style.title}`}>PORTFOLIO COMPONENT</h2>

<div className="row container mx-5 g-2 my-5 ">
    <div className="col-md-4">
        <img src={sora} className='w-100 h-100'/>
       
    </div>
    <div className="col-md-4">
        <img src={home} className='w-100 h-100'/>
    </div>
    <div className="col-md-4">
        <img src={port} className='w-100 h-100'/>
    </div>


</div>
<div className="row container mx-5 g-2 my-2">
    <div className="col-md-4">
        <img src={sora} className='w-100 h-100'/>
    </div>
    <div className="col-md-4">
        <img src={home} className='w-100 h-100'/>
    </div>
    <div className="col-md-4">
        <img src={port} className='w-100 h-100'/>
    </div>


</div>
    </>
  )
}
