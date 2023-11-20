import ForecastCard from "./ForecastCard";
import React, { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

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
                className="flex gap-3 overflow-hidden cursor-grab"
            >

                {forecastList.map((forecastItem, index) => {
                    let dateVisible = index === 0 || forecastItem.date !== forecastList[index - 1].date;
                    return (

                        <ForecastCard
                            key={index}
                            date={forecastItem.date}
                            time={forecastItem.time}
                            temp={forecastItem.temp}
                            desc={forecastItem.desc}
                            dateVisible={dateVisible}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default ForecastCardList;