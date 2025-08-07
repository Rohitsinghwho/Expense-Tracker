import React from 'react'
import "./Button.css"

const PrimaryButton = (props) => {
  return (
    <button className='btn-primary' style={{background:`linear-gradient(90deg,${props.color1} 0%,${props.color2} 100%`}} onClick={props.onclick}>
        <span>+ {props.name}</span>
    </button>
  )
}

export default PrimaryButton;

