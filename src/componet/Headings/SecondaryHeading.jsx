import React from 'react'

const SecondaryHeading = ({heading}) => {
  return (
    <h2 style={{ fontWeight:"bolder", fontStyle:'italic', color:"white"}}>
        {heading}
    </h2>
  )
}

export default SecondaryHeading