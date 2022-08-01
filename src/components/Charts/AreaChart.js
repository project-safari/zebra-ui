import { AreaChart, linearGradient, CartesianGrid, Area, XAxis, YAxis, Tooltip } from "recharts";
import React from "react";

const data = [
    {
      "name": "07/31",
      "Available": 4000,
      "Leased": 2400,
      "amt": 2400
    },
    {
      "name": "08/01",
      "Available": 3000,
      "Leased": 1398,
      "amt": 2210
    },
    {
      "name": "08/02",
      "Available": 2000,
      "Leased": 9800,
      "amt": 2290
    },
    {
      "name": "08/03",
      "Available": 2780,
      "Leased": 3908,
      "amt": 2000
    },
    {
      "name": "08/04",
      "Available": 1890,
      "Leased": 4800,
      "amt": 2181
    },
    {
      "name": "08/05",
      "Available": 2390,
      "Leased": 3800,
      "amt": 2500
    },
    {
      "name": "08/06",
      "Available": 3490,
      "Leased": 4300,
      "amt": 2100
    }
  ]
  
export default function ResourceAreaChart () {            
    return (               
        <AreaChart width={650} height={250} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
            <linearGradient id="colorAvailable" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorLeased" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="Available" stroke="#8884d8" fillOpacity={1} fill="url(#colorAvailable)" />
            <Area type="monotone" dataKey="Leased" stroke="#82ca9d" fillOpacity={1} fill="url(#colorLeased)" />
        </AreaChart>
    );
}