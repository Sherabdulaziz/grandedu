// import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Footer.scss"

import React from 'react'

export default function Footer() {
  return (

   <div className='footer'>
<hr className='myHr'/>
<div className="container">
  
   <div className="rowbox d-flex">
       <div className="colbox">
           <Link to="/"><img className='img100' src="/image/logo.svg" alt="img" /></Link>
       </div>
   
       <div className="colbox d-flex">
           <h6 className='p-10 d-block'>Tarmoqlar:</h6>
           <div className="boxes12">
               <div className="box4 ">
                   <a target="_blank"
                       href="https://www.facebook.com/GrandEduu/">
                       <img className='img4'
                           src="/image/facebook2.png"
                           alt="not found" /></a>
                   <a className='ms-2'
                       target="_blank"
                       href="https://www.instagram.com/grand_edu">
                       <img className='img4'
                           src="/image/instagram2.png"
                           alt="not found" /></a>
                   <a className='ms-2'
                       target="_blank"
                       href="https://t.me/grandeduu">
                       <img className='img4'
                           src="/image/telegram2.png"
                           alt="not found" /></a>
                   <a className='ms-2'
                       target="_blank"
                       href="https://www.youtube.com/@grandeduu">
                       <img className='img4'
                           src="/image/youtube2.png"
                           alt="not found" /></a>
               </div>
           </div>
       </div>
   </div>

</div>
</div>
  )
}

