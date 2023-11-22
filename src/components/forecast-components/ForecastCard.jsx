import { formatToLocalDate, formatToLocalTime, iconUrlFromCode } from "../../utils/getForcastData";
import { useUnitsContext } from "../../Contexts/UnitsContext";
const ForecastCard = ({dt, icon, dateVisible,temp,timezone }) => {
    const {tempUnit, units} = useUnitsContext();
    return (
        <div className="flex flex-col">
            <div className="flex h-10 justify-center items-center">
                {
                    dateVisible ? (
                        <span className="opacity-50 text-sm">{formatToLocalDate(dt)}</span>
                    ) : (
                        <hr className="w-full border-2 rounded-sm border-widget-light-s" />
                    )
                }
            </div>
            <div className="bg-widget-light w-24 border-2 border-widget-light-s rounded-lg flex flex-col py-3 items-center justify-between">
                <span className="opacity-50 text-sm whitespace-nowrap">{formatToLocalTime(dt, timezone, units)}</span>
                <img
                    src={iconUrlFromCode(icon)}
                    className="w-16 my-1"
                    alt=""
                />
                <span className="font-semibold">{Math.round(temp)}{tempUnit}</span>
            </div>
        </div>

    );
}

export default ForecastCard;
