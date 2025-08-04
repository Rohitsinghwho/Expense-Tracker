import React from 'react'
import "./Card.css"
import PrimaryButton from '../Button/PrimaryButton'
const Card = ({heading,amount,btnColor1,btnColor2,btnName,amtColor}) => {
  return (
    <div className='card'>
        {/* first div */}
        <span style={
            {
                fontSize:"1.5rem",
                color:'white'
            }
        }>{heading}: <span style={{
            color:`${amtColor}`
        }}>₹{amount}</span></span>
        {/* second div */}
        <PrimaryButton name={btnName} color1={btnColor1} color2={btnColor2}/>
    </div>
  )
}

export default Card