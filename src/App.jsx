import Forecast from "./components/Forecast"
import Cities from "./components/Cities"
import { useCityContext } from "./Contexts/CityContext";

function App() {
  const { cities } = useCityContext();
  return (

    <div className="bg-base w-full min-h-screen flex justify-center">
      <div className="w-[90%] py-8 max-w-4xl flex flex-col gap-3">
        <Cities />
        {
          cities.map((city) => (
            <Forecast key={city.id} city={city} />
          ))
        }

      </div>
    </div>
  )
}

export default App
