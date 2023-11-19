import ForecastMain from "./forecast-components/ForecastMain";
import ForecastSide from "./forecast-components/ForecastSide";

const Forecast = () => {
    return ( 
        <div className="flex w-full gap-3">
            <div className="w-1/2">
                <ForecastMain/>
            </div>
            <div className="flex flex-col w-1/2 gap-3">
                <ForecastSide/>
                <ForecastSide/>
            </div>
        </div>
    );
}
 
export default Forecast;