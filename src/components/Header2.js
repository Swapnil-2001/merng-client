import React from 'react';
import text from './phone.png';

function Header(props) {
  return (
    <div style={{color: "#206a5d", margin: "20px", textAlign: "center"}}>
      <h1 style={{color: "#810000"}}>Hello {props.user}!</h1>
      <div className="img-div">
        <img src={text} className="img" alt="fire"/>
      </div>
      <h1>Recent Posts</h1>
    </div>
  )
}

export default Header;
