import React from 'react';
import {
  Pie, PieChart, ResponsiveContainer,
  AreaChart, CartesianGrid, XAxis,
  YAxis, Tooltip, Area
} from 'recharts';
import './Doughnut.css'

const DoughnutChart = () => {
  const data = [
    { name: 'Tablet', amount: 120000 },
    { name: 'Smartphone', amount: 80000 }
  ]
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie data={data} dataKey="amount" nameKey="name" innerRadius={99} fill="#8884d8" />
        <Pie data={data} dataKey="amount" nameKey="name1" innerRadius={99} fill="#8884d8" />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default DoughnutChart;