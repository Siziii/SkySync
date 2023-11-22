import { useCityContext } from "../../CityContext";
import { DragDropContext } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "../../helpers/StrictModeDroppable";
import CityItem from "./CityItem";

const CitiesList = ({ edit }) => {

    const { cities, setCities } = useCityContext();
    const isMobile = window.innerWidth <= 640;

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const reorderedCities = Array.from(cities);
        const [removed] = reorderedCities.splice(result.source.index, 1);
        reorderedCities.splice(result.destination.index, 0, removed);

        setCities(reorderedCities);
    }

    return (
        <div className="w-full">
            {
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="cities" direction={isMobile ? "vertical" : "horizontal"}>
                        {(provided) => (
                            <section {...provided.droppableProps} ref={provided.innerRef} className="flex flex-col sm:flex-row">
                                {cities.map((city, index) => (
                                <CityItem key={city.id} city={city} index={index} edit={edit} isMobile={isMobile}/> 
                                ))}
                                {provided.placeholder}
                            </section>
                        )}
                    </Droppable>
                </DragDropContext>
            }
        </div>
    )
}

export default CitiesList;