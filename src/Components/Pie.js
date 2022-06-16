import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
function Piegraph({ active, death, recovered }) {
  const data = [
    { name: "recovered", Number_of_cases: recovered },
    { name: "deaths", Number_of_cases: death },

    { name: "active", Number_of_cases: active },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar
          dataKey="Number_of_cases"
          fill="#357CBC"
          background={{ fill: "#eee" }}
        />
      </BarChart>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="Number_of_cases"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#357CBC"
          label
        />

        <Tooltip />
      </PieChart>
    </div>
  );
}
export default Piegraph;
