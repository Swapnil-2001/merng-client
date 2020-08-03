import React from 'react';
import fire from './fire.png';

function Header() {
  return (
    <div style={{color: "#206a5d", margin: "20px", textAlign: "center"}}>
      <div className="img-div">
        <img src={fire} className="img" alt="fire"/>
      </div>
      <h1>Recent Posts</h1>
    </div>
  )
}

export default Header;
