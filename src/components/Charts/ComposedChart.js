import { ComposedChart, XAxis, YAxis, Tooltip, Legend, Area, Bar, Line, CartesianGrid } from "recharts";
import React from "react";

const data = [
    {
      "name": "07/31",
      "Available": 4000,
      "Leased": 2400,
      "Amount": 2400
    },
    {
      "name": "08/01",
      "Available": 3000,
      "Leased": 1398,
      "Amount": 2210
    },
    {
      "name": "08/02",
      "Available": 2000,
      "Leased": 9800,
      "Amount": 2290
    },
    {
      "name": "08/03",
      "Available": 2780,
      "Leased": 3908,
      "Amount": 2000
    },
    {
      "name": "08/04",
      "Available": 1890,
      "Leased": 4800,
      "Amount": 2181
    },
    {
      "name": "08/05",
      "Available": 2390,
      "Leased": 3800,
      "Amount": 2500
    },
    {
      "name": "08/06",
      "Available": 3490,
      "Leased": 4300,
      "Amount": 2100
    }
  ]
  
  export default function ResourceComposedChart () {
         return (                     
            <ComposedChart width={650} height={250} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="Amount" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="Leased" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="Available" stroke="#ff7300" />
            </ComposedChart>
    );
  }