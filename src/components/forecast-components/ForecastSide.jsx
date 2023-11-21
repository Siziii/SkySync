import { FaArrowDown, FaArrowUp, FaCompass, FaWater, FaWind } from "react-icons/fa";
import { WiBarometer, WiSunrise, WiSunset } from "react-icons/wi";

const ForecastSide = ({weather}) => {
    const { temp_minCelsius, temp_maxCelsius,speed,deg,pressure,humidity,formattedSunrise,formattedSunset} = weather;
    return (
        <div className="grid grid-cols-4 grid-rows-2 gap-3">

            <div className="row-span-2 bg-widget-light border-2 border-widget-light-s rounded-lg flex flex-col justify-between p-3 items-center">
                <span className="opacity-50 text-sm">Max</span>
                <div className="flex items-center gap-1">
                    <FaArrowUp />
                    <span className="font-semibold">{temp_minCelsius}°C</span>
                </div>
                <hr className="border-2 w-full rounded border-widget-light-s" />
                <div className="flex items-center gap-1">
                    <FaArrowDown />
                    <span className="font-semibold">{temp_maxCelsius}°C</span>
                </div>
                <span className="opacity-50 text-sm">Min</span>
            </div>

            <div className="col-span-2 bg-widget-light border-2 border-widget-light-s rounded-lg flex flex-col items-center p-3">
                <span className="opacity-50 text-sm">Wind</span>
                <div className="w-full flex h-full items-center">
                    <div className="w-full flex flex-col h-full items-center">
                        <div className="h-full flex items-center">
                            <FaWind size={32} className="my-4"/>
                        </div>
                        <span className="font-semibold text-sm">{speed}km/h</span>
                    </div>
                    <hr className="border-2 h-[85%] rounded border-widget-light-s" />
                    <div className="w-full flex flex-col h-full items-center">
                        <div className="h-full flex items-center">
                            <FaCompass size={32} className="my-4"/>
                        </div>

                        <span className="font-semibold text-sm">{deg}°</span>
                    </div>
                </div>
            </div>

            <div className="col-start-4 bg-widget-light border-2 border-widget-light-s rounded-lg flex flex-col p-3 items-center justify-between">
                <span className="opacity-50 text-sm">Humidity</span>
                <FaWater size={32} className="my-4"/>
                <span className="font-semibold text-sm">{humidity}%</span>
            </div>

            <div className="col-span-2 col-start-2 row-start-2 bg-widget-light border-2 border-widget-light-s rounded-lg flex flex-col items-center p-3">
                
                <div className="w-full flex h-full items-center">
                
                    <div className="w-full flex flex-col h-full items-center">
                    <span className="opacity-50 text-sm">Sunrise</span>
                        <div className="h-full flex items-center">
                            <WiSunrise size={48} className="my-4"/>
                        </div>
                        <span className="font-semibold text-sm">{formattedSunrise}</span>
                    </div>
                    <hr className="border-2 h-[85%] rounded border-widget-light-s" />
                    <div className="w-full flex flex-col h-full items-center">
                    <span className="opacity-50 text-sm">Sunset</span>
                        <div className="h-full flex items-center">
                            <WiSunset size={48} className="my-4"/>
                        </div>
                        <span className="font-semibold text-sm">{formattedSunset}</span>
                    </div>
                </div>
            </div>

            <div className="col-start-4 bg-widget-light border-2 border-widget-light-s rounded-lg flex flex-col p-3 items-center justify-between">
                <span className="opacity-50 text-sm">Pressure</span>
                <WiBarometer size={48} className="my-4" />
                <span className="font-semibold text-sm">{pressure}hPa</span>
            </div>

        </div>
    );
}

export default ForecastSide;