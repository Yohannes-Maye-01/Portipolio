import React from "react";
import "boxicons/css/boxicons.min.css";


import "./social .css"; // Import your custom CSS for button styles

export default function Social() {
  return (
    <div className="social-container">
      <a href="https://facebook.com" className="social-btn facebook" target="_blank" rel="noopener noreferrer" title="Facebook">
        <i className="bx bxl-facebook"></i>
      </a>
      
      <a href="https://twitter.com" className="social-btn twitter" target="_blank" rel="noopener noreferrer" title="Twitter">
        <i className="bx bxl-twitter"></i>
      </a>
      <a href="https://instagram.com" className="social-btn instagram" target="_blank" rel="noopener noreferrer" title="Instagram">
        <i className="bx bxl-instagram"></i>
      </a>
      <a href="https://linkedin.com" className="social-btn linkedin" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <i className="bx bxl-linkedin"></i>
      </a>
    </div>
  );
}


