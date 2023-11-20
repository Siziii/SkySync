import { FaCloud } from "react-icons/fa";

const ForecastCard = ({time, date, desc, temp,dateVisible}) => {
    return ( 
        <div className="flex flex-col">
            <div className="flex h-10 justify-center items-center">
                {
                    dateVisible ? (
                        <span className="opacity-50 text-sm">{date}</span>
                    ):(
                        <hr className="w-full border-2 rounded-sm border-widget-light-s"/>
                    ) 
                }
            </div>
            <div className="bg-widget-light border-2 border-widget-light-s rounded-lg flex flex-col py-3 px-6 items-center justify-between">
                <span className="opacity-50 text-sm">{time}</span>
                <FaCloud size={32} className="my-4"/>
                <span className="font-semibold">{temp}°C</span>
            </div>
        </div>

     );
}
 
export default ForecastCard;
