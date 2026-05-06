import CounterProvider from "./CounterContext"
import Display from "./components/Display"
import Buttons from "./components/Buttons"
import Reset from "./components/Reset"

function App() {
  return (
    <CounterProvider>
      <h1>Counter App</h1>
      <Display />
      <Buttons />
      <Reset />
    </CounterProvider>
  )
}

export default App