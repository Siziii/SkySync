import Forecast from "./components/Forecast"
import Cities from "./components/Cities"
import { useCityContext } from "./CityContext";

function App() {
  const { cities,addCity } = useCityContext();
  return (

      <div className="bg-base w-full min-h-screen flex justify-center">
        <div className="w-[90%] pt-8 max-w-4xl flex flex-col gap-3">
          <Cities/>
           {
          cities.map((city) => (
            <Forecast key={city} city={city} />
          ))
          }
          
        </div>
      </div>
  )
}

export default App
