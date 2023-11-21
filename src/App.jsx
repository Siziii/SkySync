import Forecast from "./components/Forecast"
import Cities from "./components/Cities"
import { useCityContext } from "./CityContext";

function App() {
  const { cities, setCities } = useCityContext();
  return (

    <div className="bg-base w-full min-h-screen flex justify-center">
      <div className="w-[90%] pt-8 max-w-4xl flex flex-col gap-3">
        <Cities />
        {
          cities.map((city, index) => (
            <Forecast key={city.id} city={city.name} />
          ))
        }

      </div>
    </div>
  )
}

export default App
