import { useContext } from "react"
import { CounterContext } from "../CounterContext"

function Display() {
  const { state } = useContext(CounterContext)

  return (
    <div>
      <h2>Count: {state.count}</h2>
    </div>
  )
}

export default Display