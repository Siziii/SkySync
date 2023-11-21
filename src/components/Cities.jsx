import { useRef, useState } from "react";
import { useCityContext } from "../CityContext";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "../helpers/StrictModeDroppable";

import { MdDragIndicator } from "react-icons/md";

const Cities = () => {
    const { cities, setCities, addCity } = useCityContext();
    const [inputValue, setInputValue] = useState('');
    const isMobile = window.innerWidth <= 768;

    const handleSubmit = (event) => {
        event.preventDefault();
        const trimmedCityName = inputValue.trim();
        if (trimmedCityName && !cities.some(city => city.name.toLowerCase() === trimmedCityName.toLowerCase()) && cities.length<5) {
            addCity(trimmedCityName);
            setInputValue('');
        } else {
            console.log("City name is empty or already exists.");
        }
    }

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const reorderedCities = Array.from(cities);
        const [removed] = reorderedCities.splice(result.source.index, 1);
        reorderedCities.splice(result.destination.index, 0, removed);

        setCities(reorderedCities);
    }

    return (
        <div className="flex flex-col w-full bg-widget-dark border-2 rounded-lg border-widget-dark-s p-3 gap-3 ">
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
            <div className="w-full">
                {
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="cities" direction={isMobile ? "vertical":"horizontal"}>
                            {(provided) => (
                                <section {...provided.droppableProps} ref={provided.innerRef} className="flex flex-col sm:flex-row">
                                    {cities.map((city, index) => (
                                        <Draggable key={city.id} draggableId={city.id.toString()} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    className={`
                                                    bg-widget-light border-2 border-widget-light-s rounded-lg w-[20%] px-4 py-2 flex items-center justify-between
                                                    ${isMobile?(index === cities.length-1 ? '' : ' mb-3'):(index === cities.length-1 ? '' : ' mr-3')}
                                                    ${snapshot.isDragging ? 'brightness-110' : ''}
                                                    `}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <span className="capitalize text-sm"> {city.name} </span>
                                                    <MdDragIndicator size={20} />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </section>
                            )}
                        </Droppable>
                    </DragDropContext>
                }
            </div>
        </div>
    );
}

export default Cities;