import React, { useState } from 'react'
import './App.css';
const Card = ({content,content2,isActive, onClick}) => {
  return (
    <div
      onClick={onClick}
      className="card"
      style={{ backgroundColor: isActive ? "#e03131" : "#fff" }}
    >
      <p>{isActive ? content2 : content}</p>
    </div>
  );
}

export default Card