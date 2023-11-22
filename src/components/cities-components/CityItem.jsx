
import { MdDelete, MdDragIndicator } from "react-icons/md";
import { useCityContext } from "../../CityContext";
import { Draggable } from "react-beautiful-dnd";

const CityItem = ({ index, city, edit, isMobile }) => {
    const { cities, deleteCity } = useCityContext();

    const handleDelete = () => {
        deleteCity(city)
    }

    return (
        <Draggable draggableId={city.id.toString()} index={index} isDragDisabled={edit}>
            {(provided, snapshot) => (
                <div
                    className={`bg-widget-light border-2 border-widget-light-s rounded-lg  p-2 pl-4 flex items-center justify-between
                    hover:brightness-110
                    ${isMobile ? (index === cities.length - 1 ? '' : ' mb-3') : (index === cities.length - 1 ? '' : ' mr-3')}
                    ${snapshot.isDragging ? 'brightness-110' : ''}
                    `}

                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <span className="capitalize text-sm truncate mr-2"> {city.label} </span>
                    {
                        edit ? (
                            <MdDelete size={20} onClick={handleDelete} className="cursor-pointer" />
                        ) : (
                            <MdDragIndicator size={20} />
                        )
                    }

                </div>
            )}
        </Draggable>
    );
}

export default CityItem;