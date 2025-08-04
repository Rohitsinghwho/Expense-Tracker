import React from 'react'
import PrimaryHeading from "./componet/Headings/PrimaryHeading"
import Card from "./componet/Card/Card"
import PieChart from "./componet/Chart/PieChart"
import Transactions from "./componet/Transactions/Transactions"
import data from "./assets/Data.json"
import Expense from "./componet/Expense/Expense"
const App = () => {

  return (
    <div style={{padding:"5px 10px"}}>
       <PrimaryHeading heading={"Expense Tracker"}/>
       <div className='first-div'>
            <Card heading={"Wallet Balance"} amount={4500} btnColor1={"#B5DC52"} btnColor2={"#89E148"} btnName={"Add Income"} amtColor={"#9DFF5B"}/>
            <Card heading={"Expenses"} amount={500} btnColor1={"#FF4747"} btnColor2={"#FF3838"} btnName={"Add Expense"} amtColor={"#F4BB4A"}/>
            <PieChart/>
       </div>
       <div className='second-div' >
          <Transactions heading={"Recent Transactions"} data={data}/>
          <Expense/>
       </div>
    </div>
    
  )
}

export default App