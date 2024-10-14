import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const cardinal = curveCardinal.tension(0.2);

const WorkedHours = () => {
  return (
<div className=' p-4 shadow'>
<p className=' text-lg font-medium'>Average  Worked Hours</p>
<p className=' text-5xl font-semibold'>06:12:50</p>
<ResponsiveContainer className={"w-full"} height={210}>
        
        <AreaChart
          data={data}
          margin={{
            top: 10,
           
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
    
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#df5899" fill="#e36da5" fillOpacity={0.3} />
          <Area type={cardinal} dataKey="uv" stroke="#df5899" fill="#eb97bf" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
</div>
  );
};

export default WorkedHours;
