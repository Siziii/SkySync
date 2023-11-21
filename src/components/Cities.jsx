import { useState } from "react";
import { useCityContext } from "../CityContext";
import City from "./City"

const Cities = () => {
    const { cities,addCity } = useCityContext();
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addCity(inputValue);
        setInputValue('');
        console.log(cities)
    };

    return (
        <div className="flex flex-col w-full bg-widget-dark border-2 rounded-lg border-widget-dark-s p-3 gap-3">
            <h1 className="uppercase text-sm">locations</h1>
            <div className="flex gap-3">
                <form
                    onSubmit={handleSubmit}
                    className="flex gap-3 w-full"
                >
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="bg-widget-light border-2 border-widget-light-s rounded-lg px-4 py-2 outline-none focus:brightness-110 w-full"
                    />

                    <button type="submit" className="bg-widget-light border-2 border-widget-light-s rounded-lg px-4 py-2 hover:bg-[#e6e6e6] hover:border-[#ffffff] hover:text-base">Submit</button>
                </form>
                <button className="bg-widget-light border-2 border-widget-light-s rounded-lg px-4 py-2 hover:bg-[#e6e6e6] hover:border-[#ffffff] hover:text-base">Edit</button>
            </div>
            <div className="flex w-full gap-3">
                {
                    cities.map((city)=>(
                    <City key={city} cityName={city}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Cities;