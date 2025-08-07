import React, { useEffect, useState } from 'react'
import ExpenseContext from './ExpenseContext'
const ExpenseProvider = ({children}) => {

    const [ExpenseBalance,setExpenseBalance]=useState(()=>{
        const saved=localStorage.getItem("Expense");
        return saved?JSON.parse(saved):0;
    });
    const [data,setData]=useState(()=>{
        const saved=localStorage.getItem("Data");
        return saved?JSON.parse(saved):[];
    });
    useEffect(()=>{
        localStorage.setItem("Expense",JSON.stringify(ExpenseBalance));
        localStorage.setItem("Data",JSON.stringify(data));
    },[ExpenseBalance,data])


  return (
    <ExpenseContext.Provider value={{ExpenseBalance,setExpenseBalance,data,setData}}>
        {children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseProvider