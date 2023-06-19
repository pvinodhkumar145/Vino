import React from 'react'

const chaild = (props) => {
  return (
    <div>
      <h1>Hi</h1>
      <h4>Hello {props.name} </h4>
      <p>Age{props.age}</p>
      <h1>password{props.password}</h1>
    </div>
  )
}

export default chaild