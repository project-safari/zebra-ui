import { LineChart, XAxis, YAxis, Tooltip, Legend, Area, Bar, Line, CartesianGrid } from "recharts";
import React from "react";
import { Typography } from "@mui/material/Typography";

const data = [
    {
        "name": "January",
        "Resources under management": 40,
        "Percent Resources Utilized": 24,
      },
    {
      "name": "February",
      "Resources under management": 40,
      "Percent Resources Utilized": 24,
      "amt": 24
    },
    {
      "name": "March",
      "Resources under management": 30,
      "Percent Resources Utilized": 13,
    },
    {
      "name": "April",
      "Resources under management": 20,
      "Percent Resources Utilized": 98,
      "amt": 22
    },
    {
      "name": "May",
      "Resources under management": 27,
      "Percent Resources Utilized": 39,
    },
    {
      "name": "June",
      "Resources under management": 18,
      "Percent Resources Utilized": 48,
    },
    {
      "name": "July",
      "Resources under management": 23,
      "Percent Resources Utilized": 38,
    },
    {
      "name": "August",
      "Resources under management": 34,
      "Percent Resources Utilized": 43,
    }
  ]
  

  export default function InventoryLineChart () {
    return (
        <LineChart width={850} height={250} data={data}
            margin={{ top: 5, right: 5, left: 1, bottom: 15 }}>
            <text x={850 / 2} y={243} fill="black" textAnchor="middle" dominantBaseline="central">
              <tspan fontSize="16">Note: Uses Mock Data</tspan>
            </text>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Resources under management" stroke="#8884d8" />
            <Line type="monotone" dataKey="Percent Resources Utilized" stroke="#82ca9d" />
        </LineChart>
    );
}

