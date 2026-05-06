import { createContext, useReducer } from "react"

export const CounterContext = createContext()

function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 }
  }
  if (action.type === "DECREMENT") {
    return { count: state.count - 1 }
  }
  if (action.type === "RESET") {
    return { count: 0 }
  }
  return state
}

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider