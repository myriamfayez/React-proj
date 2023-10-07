import React from 'react'
import style from './Contact.module.css'

export default function Contact() {
  return (
    <>
      <h1>CONATCT SECTION</h1>
      <div className={`${style.demo}`}>
      <input className={`${style.input}`} type='text' placeholder='Name'></input><br /><br />
      <input className={`${style.input}`} type='text' placeholder='Age'></input><br /><br />
      <input className={`${style.input}`} type='text' placeholder='Email'></input><br /><br />
      <input className={`${style.input}`} type='text' placeholder='Password'></input><br />

      <button className={`${style.btn}`}>Send Message</button>
</div>

    </>
  )
}
