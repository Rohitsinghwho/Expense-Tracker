import React from 'react'
import "./Expense.css"
import SecondaryHeading from "../Headings/SecondaryHeading"

const Expense = () => {

    // replae with real data
    const availableCategory=["Entertainment","Food","Travel"]
  return (
    <section className='exp-section'>
        <SecondaryHeading heading={"Top Expenses"}/>
        <div className='box-container'>
            {availableCategory.map((item,idx)=>(
            <div style={{display:"flex" ,gap:"10px", padding:"20px 0px", justifyContent:"space-between"}} key={idx}>         
                <span>{item}</span>
                <div style={{height:"20px",width:"450px", border:"1px solid grey",borderRadius:"10px"}}>
                    <div style={{backgroundColor:"#8784D2",width:"50%",height:"inherit",borderRadius:"10px",borderWidth:"0px"}}></div>
                </div>
            </div>
        ))}
        </div>
    </section>
  )
}

export default Expense