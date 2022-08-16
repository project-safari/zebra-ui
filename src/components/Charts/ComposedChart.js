import { ComposedChart, XAxis, YAxis, Tooltip, Legend, Area, Bar, Line, CartesianGrid } from "recharts";
import React from "react";

const data = [
    {
      "name": "4:00 A.M.",
      "Requests": 0,
      "Leased": 2,
      "Inventory": 24,
      "Anomalies": 0
    },
    {
      "name": "5:00 A.M.",
      "Requests": 2,
      "Leased": 4,
      "Inventory": 22,
      "Anomalies": 1
    },
    {
      "name": "6:00 A.M.",
      "Requests": 0,
      "Leased": 3,
      "Inventory": 22,
      "Anomalies": 0
    },
    {
      "name": "7:00 A.M.",
      "Requests": 5,
      "Leased": 5,
      "Inventory": 20,
      "Anomalies": 0
    },
    {
      "name": "8:00 A.M.",
      "Requests": 8,
      "Leased": 8,
      "Inventory": 21,
      "Anomalies": 1
    },
    {
      "name": "9:00 A.M.",
      "Requests": 40,
      "Leased": 25,
      "Inventory": 25,
      "Anomalies": 2
    },
    {
      "name": "10:00 A.M.",
      "Requests": 34,
      "Leased": 15,
      "Inventory": 21,
      "Anomalies": 0
    }
  ]
  
  export default function ResourceComposedChart () {
         return (                     
            <ComposedChart width={1200} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="Inventory" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="Leased" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="Anomalies" stroke="#B63722" />
                <Line type="monotone" dataKey="Requests" stroke="#ff7300" />
            </ComposedChart>
    );
  }