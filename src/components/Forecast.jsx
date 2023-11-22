import getFormattedWeatherData from "../utils/getForcastData";
import ForecastCardList from "./forecast-components/ForecastCardList";
import ForeCastMain from "./forecast-components/ForecastMain";
import ForecastSide from "./forecast-components/ForecastSide";
import { useState, useEffect } from "react";
import { useUnitsContext } from "../Contexts/UnitsContext";

const Forecast = ({city}) => {
    const [weather, setWeather] = useState(null);
    const { units } = useUnitsContext();

    const isMobile = window.innerWidth <= 640;

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({ lat: city.lat, lon: city.lon, units }).then((data) => {
                setWeather(data);
            });
        };
        fetchWeather();
    }, [city,units]);

    return (
        <div className="flex flex-col w-full bg-widget-dark border-2 rounded-lg border-widget-dark-s p-3">
            <div className="w-full flex flex-col md:flex-row gap-3">
                <div className="w-full">
                    {weather ? (
                        <ForeCastMain weather={weather} city={city} isMobile={isMobile}/>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="w-full">
                    {weather ? (
                        <ForecastSide weather={weather} isMobile={isMobile}/>
                    ) : (
                        <p>Loading...</p>
                    )}

                </div>
            </div>
            <div className="w-full">
                {weather ? (
                        <ForecastCardList weather={weather}/>
                    ) : (
                        <p>Loading...</p>
                    )}

            </div>
        </div>
    );
}

export default Forecast;