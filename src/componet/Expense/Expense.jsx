import React, { useContext } from 'react'
import "./Expense.css"
import SecondaryHeading from "../Headings/SecondaryHeading"
import ExpenseContext from '../../Context/ExpenseContext/ExpenseContext'

const Expense = () => {

    // replae with real data
    // const availableCategory=["Entertainment","Food","Travel"]
    const {data}=useContext(ExpenseContext);
    const categoryTotal=data?.reduce((acc,curr)=>{
        if(!acc[curr.category]){
            acc[curr.category]=0;
        }
        acc[curr.category]+=parseFloat(curr.amount);
        return acc;
    },{});
    const totalExpense=Object.values(categoryTotal).reduce((sum,val)=>sum+val,0);
    const availableCategory=Object.keys(categoryTotal)
  return (
    <section className='exp-section'>
        <SecondaryHeading heading={"Top Expenses"}/>
        <div className='box-container'>
            {availableCategory.map((item,idx)=>(
            <div style={{display:"flex" ,gap:"10px", padding:"20px 0px", justifyContent:"space-between"}} key={idx}>         
                <span>{item}</span>
                <div style={{height:"20px",width:"450px", border:"1px solid grey",borderRadius:"10px"}}>
                    <div style={{backgroundColor:"#8784D2",width:`${((categoryTotal[item]/totalExpense)*100).toFixed(2)}%`,height:"inherit",borderRadius:"10px",borderWidth:"0px"}}></div>
                </div>
            </div>
        ))}
        </div>
    </section>
  )
}

export default Expense