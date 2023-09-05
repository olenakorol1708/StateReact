import React from 'react';
import { useState } from 'react';

const SiblingComponent = () => {
  const [text,setText]= useState ('Hello everybody!');
    const handleClick = ()=>{
        setText(text ==="Hello everybody!" ? "Redev" : "Hello everybody!")
    }
  return (
    <div>
      <button onClick = {handleClick}>Press</button>
      <div>{text}</div>
    </div>
  )
}

export default SiblingComponent
