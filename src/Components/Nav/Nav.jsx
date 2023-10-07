import React from 'react'
import style from './Nav.module.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>

<nav className={`navbar navbar-expand-lg py-4 ${style.test}`}>
  <div className={`container-fluid ${style.test}`}>
    <Link class="navbar-brand" className={` text-decoration-none m-3 px-5 ${style.white}`}  to={"/Home"}>START FRAMEWORK</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="txt ms-auto px-5">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
      

        <li className="nav-item">
          <Link class="nav-link active" className={` m-2 text-decoration-none ${style.white}`} aria-current="page" to={"/About"}>About</Link>
        </li>

        <li className="nav-item">
          <Link class="nav-link active" aria-current="page" className={ ` m-2 text-decoration-none ${style.white}`} to={"/Portfolio"}>Portfolio</Link>
        </li>

        <li className="nav-item">
          <Link class="nav-link active" aria-current="page" className={`  m-2 text-decoration-none ${style.white}`} to={"/Contact"}>Contact </Link>
        </li>
        
        
      </ul>



      
      </div>
        
     
    </div>
  </div>
</nav>
<div className="hom text-bg-success">
    
      </div>
  

    </>
  )
}
