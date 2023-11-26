import ForecastCard from "./ForecastCard";
import React, { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { formatToLocalDate } from "../../utils/getForcastData";
const ForecastCardList = ({ weather }) => {
    const ref = useRef();
    const { events } = useDraggable(ref);
    const { forecastList } = weather;

    return (
        <div className="w-full relative">
            <div className="flex justify-end">
                <div className=" pointer-events-none bg-gradient-to-l from-widget-dark to-transparent w-1/6 h-full absolute z-10" />
            </div>
            
            <div
                ref={ref}
                {...events}
                className="flex gap-3 overflow-auto cursor-grab hidescroll"
            >

                {forecastList.map((forecastItem, index) => {
                    let dateVisible = index === 0 || formatToLocalDate(forecastItem.dt) !== formatToLocalDate(forecastList[index - 1].dt);
                    return (

                        <ForecastCard
                            key={index}
                            dt={forecastItem.dt}
                            temp={forecastItem.temp}
                            icon={forecastItem.icon}
                            dateVisible={dateVisible}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default ForecastCardList;