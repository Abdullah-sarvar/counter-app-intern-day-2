import { useContext } from "react"
import { CounterContext } from "../CounterContext"

function Buttons() {
  const { dispatch } = useContext(CounterContext)

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+ Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>- Decrement</button>
    </div>
  )
}

export default Buttons