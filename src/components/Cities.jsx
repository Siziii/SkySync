import { useRef, useState } from "react";
import { useCityContext } from "../CityContext";


const Cities = () => {
    const { cities,setCities, addCity } = useCityContext();
    const [inputValue, setInputValue] = useState('');

    const dragCity = useRef(0);
    const draggedOverCity = useRef(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        addCity(inputValue);
        setInputValue('');
        console.log(cities)
    };

    const handleSort = () =>{
        const citiesClone = [...cities]
        const temp = citiesClone[dragCity.current]

        citiesClone[dragCity.current] = citiesClone[draggedOverCity.current]
        citiesClone[draggedOverCity.current] = temp

        setCities(citiesClone)
    }

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
                    cities.map((city, index) => (
                        <div className="bg-widget-light border-2 border-widget-light-s rounded-lg px-4 py-2"
                            key={index}
                            draggable
                            onDragStart={() => (dragCity.current = index)}
                            onDragEnter={() => (draggedOverCity.current = index)}
                            onDragEnd={handleSort}
                            onDragOver={(e) => e.preventDefault()}
                        >
                            <span className="capitalize"> {city} </span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Cities;