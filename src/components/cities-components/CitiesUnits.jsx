import { useUnitsContext } from "../../Contexts/UnitsContext";
const CitiesUnits = () => {
    const { tempUnit, toggleUnits } = useUnitsContext();
    return ( 
        <button
        className="h-full flex items-center justify-center  border-2 border-widget-light-s rounded-lg px-2 aspect-square hover:brightness-110 transition-all bg-widget-light"
        onClick={toggleUnits}
        >
            {tempUnit}
        </button>
     );
}
 
export default CitiesUnits;