import { useContext } from "react"
import { CounterContext } from "../CounterContext"

function Reset() {
  const { dispatch } = useContext(CounterContext)

  return (
    <div>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  )
}

export default Reset