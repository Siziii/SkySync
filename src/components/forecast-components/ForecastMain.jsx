import { useUnitsContext } from "../../Contexts/UnitsContext";
import { iconUrlFromCode,formatToLocalTime, formatToLocalDate } from "../../utils/getForcastData";
const ForeCastMain = ({ weather, city }) => {

    const { temp, feels_like, description, dt , icon, timezone} = weather;
    const isReallyMobile = window.innerWidth <= 300;
    const {tempUnit, units} = useUnitsContext();
    return (
        <div className="flex flex-col w-full h-full gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="bg-widget-light border-2 rounded-lg border-widget-light-s w-full flex items-center justify-center py-3">
                    <h1 className="text-2xl font-semibold capitalize">{city.label}</h1>
                </div>
                <div className="bg-widget-light border-2 rounded-lg border-widget-light-s py-3 px-6">
                    <div className="flex gap-2 items-center mb-1">
                        <span className="opacity-50 text-sm">Date:</span>
                        <span className="font-semibold text-sm whitespace-nowrap">{formatToLocalDate(dt, timezone)}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="opacity-50 text-sm">Time:</span>
                        <span className="font-semibold text-sm whitespace-nowrap">{formatToLocalTime(dt, timezone, units)}</span>
                    </div>
                </div>
            </div>
            <div className="bg-widget-light border-2 rounded-lg border-widget-light-s h-full py-3 flex justify-between">

                <div className="w-full flex items-center justify-center flex-col">
                    <div className="h-2/3">
                        <img
                        src={iconUrlFromCode(icon)}
                        className="w-24 my-1"
                        alt="icon"
                    />
                    </div>
                    <span className="capitalize text-center mt-2">{description}</span>
                </div>

                <hr className="border-2 h-full rounded border-widget-light-s" />

                <div className="w-full flex items-center justify-center flex-col">
                    <div className="flex h-2/3">
                        <h1 className="text-6xl sm:text-8xl">{Math.round(temp)}</h1>
                        <h2 className="text-xl sm:text-2xl font-bold">{tempUnit}</h2>
                    </div>
                    <span className="text-center mt-2">Feels{isReallyMobile ? '' : ' like'} <strong>{Math.round(feels_like)}{tempUnit}</strong></span>
                </div>
            </div>
        </div>
    );
}

export default ForeCastMain;