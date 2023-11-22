import { useUnitsContext } from "../../Contexts/UnitsContext";
const CitiesUnits = () => {
    const { tempUnit, toggleUnits } = useUnitsContext();
    return ( 
        <button
        className="w-10 h-10 border-2 border-widget-light-s rounded-lg hover:brightness-110 transition-all bg-widget-light aspect-square"
        onClick={toggleUnits}
        >
        {tempUnit}
        </button>
     );
}
 
export default CitiesUnits;