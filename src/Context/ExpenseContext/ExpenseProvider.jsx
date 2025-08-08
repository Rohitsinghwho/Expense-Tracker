import React, { useEffect, useState } from 'react'
import ExpenseContext from './ExpenseContext'
const ExpenseProvider = ({children}) => {

    const [ExpenseBalance,setExpenseBalance]=useState(()=>{
        const saved=localStorage.getItem("ExpenseBalance");
        return saved?JSON.parse(saved):0;
    });
    const [data,setData]=useState(()=>{
        const saved=localStorage.getItem("expenses");
        return saved?JSON.parse(saved):[];
    });
    useEffect(()=>{
        localStorage.setItem("ExpenseBalance",JSON.stringify(ExpenseBalance));
        localStorage.setItem("expenses",JSON.stringify(data));
    },[ExpenseBalance,data])


  return (
    <ExpenseContext.Provider value={{ExpenseBalance,setExpenseBalance,data,setData}}>
        {children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseProvider