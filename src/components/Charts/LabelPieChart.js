import {
    PieChart,
    Pie,
    Legend,
    Cell,
    ResponsiveContainer,
    Label
  } from "recharts";
  import Grid from "@mui/material/Grid";

  const data01 = [
    { name: "Datacenters", value: 100 },
    { name: "IPAddressPool", value: 100 },
    { name: "Rack", value: 100 },
    { name: "Lab", value: 100 },
    { name: "Server", value: 100 },
    { name: "Switch", value: 100 },
    { name: "VLANPool", value: 100 },
    { name: "VM", value: 100 },

  ];
  
  const COLORS = ["#81ca9c", "#a3de6b", "#8ed0e1", '#82a6ec', '#8784d8', "#403e9f", '#d16485', '#ffc658'];
  
  const Bullet = ({ backgroundColor, size }) => {
    return (
      <div
        className="CirecleBullet"
        style={{
          backgroundColor,
          width: size,
          height: size
        }}
      ></div>
    );
  };
  
  const CustomizedLegend = (props) => {
    const { payload } = props;
    return (
      <ul className="LegendList">
        {payload.map((entry, index) => (
          <li key={`item-${index}`}>
            <div className="BulletLabel">
              <Bullet backgroundColor={entry.payload.fill} size="10px" />
              <div className="BulletLabelText">{entry.value}</div>
            </div>
            <div style={{ marginLeft: "20px" }}>{entry.payload.value}</div>
          </li>
        ))}
      </ul>
    );
  };
  
  const CustomLabel = ({ viewBox, labelText, value }) => {
    const { cx, cy } = viewBox;
    return (
      <g>
        <text
          x={cx}
          y={cy}
          className="recharts-text recharts-label"
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fontSize="15"
        >
          {labelText}
        </text>
        <text
          x={cx}
          y={cy + 20}
          className="recharts-text recharts-label"
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fill="#81ca9c"
          fontSize="26"
          fontWeight="600"
        >
          {value}
        </text>
      </g>
    );
  };
  
  export default function CustomPieChart() {
    return (
      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data01}
              dataKey="value"
              cx={400}
              cy={150}
              innerRadius={80}
              outerRadius={120}
            >
              {data01.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <Label
                content={<CustomLabel labelText="Resources" value={800} />}
                position="center"
              />
            </Pie>
            <Legend/>
        </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
  