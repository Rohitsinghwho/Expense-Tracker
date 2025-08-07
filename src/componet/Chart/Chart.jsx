import { useContext } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import ExpenseContext from '../../Context/ExpenseContext/ExpenseContext';


const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Chart=({COLORS}) =>{
  const {data}=useContext(ExpenseContext);
  
  const categorytotals=data?.reduce((acc,curr)=>{
    const cat=curr.category;
    const amount=parseFloat(curr.amount);
    acc[cat]=(acc[cat]||0)+amount;
    return acc;
  },{})||{};

  const chartData=Object.keys(categorytotals).map(category=>({
    name:category,
    value:categorytotals[category]
  }))
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      
    </ResponsiveContainer>
  );
}


export default Chart;
