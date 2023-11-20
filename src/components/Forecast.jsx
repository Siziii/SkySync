import getFormattedWeatherData from "../utils/getForcastData";
import ForecastCardList from "./forecast-components/ForecastCardList";
import ForeCastMain from "./forecast-components/ForecastMain";
import ForecastSide from "./forecast-components/ForecastSide";
import { useState, useEffect } from "react";
const Forecast = () => {
    const [query, setQuery] = useState({ q: "berlin" });
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({ ...query }).then((data) => {
                setWeather(data);
            });
        };
        fetchWeather();
    }, [query]);
    return (
        <div className="flex flex-col w-full bg-widget-dark border-2 rounded-lg border-widget-dark-s p-3">
            <div className="w-full flex gap-3">
                <div className="w-1/2">
                    {weather ? (
                        <ForeCastMain weather={weather} city={query.q} />
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="w-1/2">
                    {weather ? (
                        <ForecastSide weather={weather} />
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