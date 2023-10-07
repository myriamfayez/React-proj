import React from 'react'
import style from './NotFound.module.css'
import sora from '../../Assets/error.jpg'
export default function NotFound() {
  return (
    <>
    <div className={`${style.demo}`}>
    <h3>Page Not Found Please click on Nav Links</h3>  
    <img  className = {`${style.img}`}src={sora} width="25%"/>
    </div>
    </>
  )
}
