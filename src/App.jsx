import Forecast from "./components/Forecast"

function App() {
  return (
    <div className="bg-base w-screen min-h-screen flex justify-center">
      <div className="w-[80%] pt-8 max-w-4xl flex flex-col gap-3">
        <Forecast/>
      </div>
    </div>
  )
}

export default App
