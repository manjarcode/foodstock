import { LineChart, Line, XAxis, YAxis } from 'recharts'

export function FoodChart({data}) {
    
  return (
    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="price" stroke="#8884d8" />,
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  )
}