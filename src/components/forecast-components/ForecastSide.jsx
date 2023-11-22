import { FaArrowDown, FaArrowUp, FaCompass, FaWater, FaWind } from "react-icons/fa";
import { WiBarometer, WiSunrise, WiSunset } from "react-icons/wi";
import { formatToLocalTime } from "../../utils/getForcastData";
import { useUnitsContext } from "../../Contexts/UnitsContext";

const ForecastSide = ({weather, isMobile}) => {

    const { temp_min, temp_max,speed,deg,pressure,humidity,sunrise,sunset,timezone} = weather;
    const {tempUnit, speedUnit, units} = useUnitsContext();

    const r = {
        element1: 'row-span-2',
        element2: isMobile ? 'col-span-2 col-start-1 row-start-3' : 'col-span-2',
        element3: isMobile ? 'col-start-2 row-start-1' : 'col-start-4',
        element4: isMobile ? 'col-span-2 col-start-1 row-start-4' : 'col-span-2 col-start-2 row-start-2', 
        element5: isMobile ? 'col-start-2 row-start-2' : 'col-start-4 row-start-2', 
    };

    return (
        <div className="grid grid-cols-2 grid-rows-4 sm:grid-cols-4 sm:grid-rows-2 gap-3">

            <div className={`${r.element1} bg-widget-light border-2 border-widget-light-s rounded-lg flex flex-col justify-between p-3 items-center`}>
                <span className="opacity-50 text-sm">Max</span>
                <div className="flex items-center gap-1">
                    <FaArrowUp />
                    <span className="font-semibold">{Math.round(temp_max)}{tempUnit}</span>
                </div>
                <hr className="border-2 w-full rounded border-widget-light-s" />
                <div className="flex items-center gap-1">
                    <FaArrowDown />
                    <span className="font-semibold">{Math.round(temp_min)}{tempUnit}</span>
                </div>
                <span className="opacity-50 text-sm">Min</span>
            </div>

            <div className={`${r.element2} bg-widget-light border-2 border-widget-light-s rounded-lg flex flex-col items-center p-3`}>
                <span className="opacity-50 text-sm">Wind</span>
                <div className="w-full flex h-full items-center">
                    <div className="w-full flex flex-col h-full items-center">
                        <div className="h-full flex items-center">
                            <FaWind size={32} className="sm:my-4"/>
                        </div>
                        <span className="font-semibold text-sm">{Math.round(speed)} {speedUnit}</span>
                    </div>
                    <hr className="border-2 h-[85%] rounded border-widget-light-s" />
                    <div className="w-full flex flex-col h-full items-center">
                        <div className="h-full flex items-center">
                            <FaCompass size={32} className="sm:my-4"/>
                        </div>

                        <span className="font-semibold text-sm">{deg}°</span>
                    </div>
                </div>
            </div>

            <div className={`${r.element3} bg-widget-light border-2 border-widget-light-s rounded-lg flex flex-col p-3 items-center justify-between`}>
                <span className="opacity-50 text-sm">Humidity</span>
                <FaWater size={32} className="sm:my-4"/>
                <span className="font-semibold text-sm">{humidity}%</span>
            </div>

            <div className={`${r.element4} bg-widget-light border-2 border-widget-light-s rounded-lg flex flex-col items-center p-3`}>
                
                <div className="w-full flex h-full items-center">
                
                    <div className="w-full flex flex-col h-full items-center">
                    <span className="opacity-50 text-sm">Sunrise</span>
                        <div className="h-full flex items-center">
                            <WiSunrise size={48} className="sm:my-4"/>
                        </div>
                        <span className="font-semibold text-sm">{formatToLocalTime(sunrise, timezone, units)}</span>
                    </div>
                    <hr className="border-2 h-[85%] rounded border-widget-light-s" />
                    <div className="w-full flex flex-col h-full items-center">
                    <span className="opacity-50 text-sm">Sunset</span>
                        <div className="h-full flex items-center">
                            <WiSunset size={48} className="sm:my-4"/>
                        </div>
                        <span className="font-semibold text-sm">{formatToLocalTime(sunset, timezone, units)}</span>
                    </div>
                </div>
            </div>

            <div className={`${r.element5} bg-widget-light border-2 border-widget-light-s rounded-lg flex flex-col p-3 items-center justify-between`}>
                <span className="opacity-50 text-sm">Pressure</span>
                <WiBarometer size={48} className="sm:my-4" />
                <span className="font-semibold text-sm">{pressure} hPa</span>
            </div>

        </div>
    );
}

export default ForecastSide;