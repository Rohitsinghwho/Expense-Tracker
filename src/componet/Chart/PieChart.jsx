import React from 'react'
import Chart from './Chart'

const PieChart = () => {
const data = [
  { name: 'Entertaiment', value: 400 },
  { name: 'Food', value: 300 },
  { name: 'Travel', value: 300 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <div style={{height:"300px", width:"300px",display:"flex", flexDirection:"column",gap:"10px", justifyContent:"center"}}>
        <div style={{height:"200px"}}>
            <Chart COLORS={COLORS}/>
        </div>
        <div style={{display:"flex",gap:"20px" ,alignItems:'center',justifyContent:"center"}}>
            {data.map((item,idx)=>(
                <div key={idx} style={{display:"flex", gap:"5px",alignItems:"center"}}>
                    <div style={{height:'10px',width:"20px", backgroundColor:`${COLORS[idx%COLORS.length]}`}}></div>
                    <span style={{color:'white'}}>{item.name}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PieChart