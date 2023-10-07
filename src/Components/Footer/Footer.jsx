import React from 'react'
import foot from './Footer.module.css'


export default function Footer() {
  return (
    <>
      <div className= {` row container-fluid ${foot.test}`}>
<div className="col-md-4">
    <h2>
        Location
    </h2><br />

    <p>2215 John Daniel Drive</p><br />

    <p>Clark, MO 65243</p>
</div>





<div className="col-md-4">
    <h2>
    AROUND THE WEB

    </h2><br />

    <p>Clark, MO 65243</p>

    </div>

    <div className="col-md-4">
    <h2>
    ABOUT FREELANCER</h2><br />


    <p> Freelance is a free to use, licensed Bootstrap theme created <br /> by Route

</p>
</div>




      </div>

      <div className={` copy ${foot.copy}`}>

Copyright © Your Website 2021
</div>

    </>
  )
}
