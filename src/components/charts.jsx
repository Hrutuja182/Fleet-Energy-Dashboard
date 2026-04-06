 import { LineChart,Line, BarChart, Bar,XAxis,YAxis,Tooltip, ResponsiveContainer } from "recharts";

 export default function Charts({data}){
   return(
    <>
    <div className="h-64 bg-white p-4 shadow rounded">
        <h2>Fuel Trend</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="fuel" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="h-64 bg-white p-4 shadow rounded">
        <h2>Ship Comparison</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="ship" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="fuel" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
   )
 }
