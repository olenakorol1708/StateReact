import React from 'react'

const ChildComponent = (prop) => {
  return (
    <div>
      <p>Hello {prop.name}!</p>
      <p>Current counter data:{prop.count}</p>
    </div>
  )
}

export default ChildComponent
