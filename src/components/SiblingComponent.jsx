import React from 'react';
import { useState } from 'react';

const SiblingComponent = () => {
  const [text,setText]= useState (false);
    const handleClick = ()=>{
        setText(!text)
    }
  return (
    <div>
      <button onClick = {handleClick}>Show/Hide</button>
      {
        text && <p>Hello everybody!</p>
      }
    </div>
  )
}

export default SiblingComponent
