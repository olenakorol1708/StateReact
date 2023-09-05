import React from 'react';
import ChildComponent from './ChildComponent';
import { useState } from 'react';
import SiblingComponent from './SiblingComponent';

const ParentComponent = () => {
    const [count, setCount] = useState(0);
   
   let name = 'Helena';

        const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }
    const reset = ()=>{
        setCount(count*0)
    }
    const random = (min, max, count)=>{
      let number  =min +Math.random()*(max+1-min);
     let randomCount = Math.floor(number)
      setCount(randomCount)
  }

  return (
    <div style = {{margin:'2rem'}}>
      <ChildComponent  count = {count} name = {name}/>
      count = {count}
      <div>
      <button style = {{margin:'2rem'}} onClick = {increment}>+</button>
      <button style = {{margin:'2rem'}} onClick= {decrement}>-</button>
      <button style = {{margin:'2rem'}} onClick= {reset}>reset</button>
      <button style = {{margin:'2rem'}} onClick= {()=>random(1,10)}>random</button>
      </div>
      <SiblingComponent/>
    </div>
  )
}

export default ParentComponent
