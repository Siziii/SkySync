import getFormattedWeatherData from "../utils/getForcastData";
import ForecastCardList from "./forecast-components/ForecastCardList";
import ForeCastMain from "./forecast-components/ForecastMain";
import ForecastSideDesktop from "./forecast-components/ForecastSideDesktop";
import { useState, useEffect } from "react";

const Forecast = ({city}) => {
    const [weather, setWeather] = useState(null);
    
    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({ lat: city.lat, lon: city.lon }).then((data) => {
                setWeather(data);
            });
        };
        console.log("fetch")
        fetchWeather();
    }, [city]);


    return (
        <div className="flex flex-col w-full bg-widget-dark border-2 rounded-lg border-widget-dark-s p-3">
            <div className="w-full flex flex-col sm:flex-row gap-3">
                <div className="w-full sm:w-1/2">
                    {weather ? (
                        <ForeCastMain weather={weather} city={city} />
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="w-full sm:w-1/2">
                    {weather ? (
                        <ForecastSideDesktop weather={weather} />
                    ) : (
                        <p>Loading...</p>
                    )}

                </div>
            </div>
            <div className="w-full">
                {weather ? (
                        <ForecastCardList weather={weather} />
                    ) : (
                        <p>Loading...</p>
                    )}

            </div>
        </div>
    );
}

export default Forecast;