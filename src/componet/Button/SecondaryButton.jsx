import React from 'react'
import "./Button.css"


const SecondaryButton = (props) => {
  return (
    <button className='btn-secondary' style={{backgroundColor:`${props.color}`}}>
        {props.item}
    </button>
  )
}

export default SecondaryButton