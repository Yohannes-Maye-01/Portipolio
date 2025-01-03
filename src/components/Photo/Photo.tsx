import React from 'react'

import "./Photo.css"

export default function Photo({bg}) {
  return (
    <>
     <div className="img">
        <div className="imgborder">
          <img src={bg} alt="hero" />
        </div>
        
      </div></>
  )
}
