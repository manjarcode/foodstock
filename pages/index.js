import {FoodChart} from "../components/foodChart"
import {data} from './test.data'

export default function Home() {
  return (
    <FoodChart data={data}></FoodChart>
  )
}
