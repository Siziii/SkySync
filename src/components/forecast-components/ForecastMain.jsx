import { FaCloud } from "react-icons/fa";

const ForeCastMain = ({weather, city}) => {
    const { tempCelsius, country, feels_likeCelsius,description, formattedTime,formattedDate} = weather;

    return ( 
        <div className="flex flex-col w-full h-full gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="bg-widget-light border-2 rounded-lg border-widget-light-s w-full flex items-center justify-center py-3">
                    <h1 className="text-2xl font-semibold capitalize">{city}, {country}</h1>
                </div>
                <div className="bg-widget-light border-2 rounded-lg border-widget-light-s py-3 px-6">
                    <div className="flex gap-2 items-center mb-1">
                        <span className="opacity-50 text-sm">Date:</span>
                        <span className="font-semibold text-sm">{formattedDate}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="opacity-50 text-sm">Time:</span>
                        <span className="font-semibold text-sm">{formattedTime}</span>
                    </div>
                </div>
            </div>
            <div className="bg-widget-light border-2 rounded-lg border-widget-light-s h-full p-3 flex justify-between">
                <div className="w-full flex items-center justify-center flex-col">
                    <FaCloud size={100} />
                    <span className="mt-2 capitalize">{description}</span>
                </div>
                <hr className="border-2 h-full rounded border-widget-light-s" />
                <div className="w-full flex items-center justify-center flex-col">
                    <div className="flex">
                        <h1 className="text-8xl">{tempCelsius}</h1>
                        <h2 className="text-3xl font-bold">°C</h2>
                    </div>
                    <div className="flex gap-1 mt-2">
                    <span>Feels like</span>
                    <span>{feels_likeCelsius}°C</span>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default ForeCastMain;