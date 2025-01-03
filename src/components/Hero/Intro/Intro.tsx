import React from "react";
import "./intro.css"
import Social from "../../Social/Social ";
import Photo from "../../Photo/Photo";
import bg from "../../../assets/photo_2025-01-03_08-17-10-fotor-ai-art-effects-20250103084317.jpg"



const Intro= () => {
  return (<>
   <section className="intro-section">
      <div className="intro-container">
        
        <h1 className="intro-heading">
          Hello, I'm <span className="intro-name">Yohannes </span>
        </h1>
<h3>
<span className="intro-skill">Web</span> and {" "}
          <span className="intro-skill">App Developer</span>
</h3>
        
        <p className="intro-description">
          I am a skilled , dedicated to crafting 
          innovative and user-friendly digital solutions.
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          lorem
        </p>

       
       <button>
         <a href="#contact" className="intro-button">
          Let's Connect
        </a>
        </button>
        <Social />
      </div>
      
     <Photo bg={bg} />
    
      

      
    </section>
 
  </>
  )
};

export default Intro;
