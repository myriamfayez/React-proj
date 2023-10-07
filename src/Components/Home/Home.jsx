
import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react'
// import sora from '../../Assets/boy.jpg'             // 5rgt bara el component 
// import Footer from '../Footer/Footer';
// import Nav from '../Nav/Nav';                         // gowa el component
import style from './Home.module.css'
import boy from '../../Assets/avataaars.svg'
export default function Home() {
  return (
    
    <>


 {/* <h1 className={style.test}>Hiiii</h1> */}

 <div className={`${style.demo}`}>
    <img src={boy} className='w-25 h-25'/><br /><br />
    <h1 className={style.white}>START FRAMEWORK</h1>
    <p className={style.white}>Graphic Artist - Web Designer - Illustrator</p>
 
    
    </div>

    
    </>

  )
}
