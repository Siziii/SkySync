
import { useState } from "react";
import CitiesEdit from "./cities-components/CitiesEdit";
import CitiesList from "./cities-components/CitiesList";
import CitiesSearch from "./cities-components/CitiesSearch";
import CitiesUnits from "./cities-components/CitiesUnits";

const Cities = () => {
    const [edit, setEdit] = useState(false);
    return (
        <div className="flex flex-col w-full bg-widget-dark border-2 rounded-lg border-widget-dark-s p-3 gap-3 ">
            <div className="flex flex-col-reverse sm:flex-row gap-3">
                <CitiesSearch/>
                <div className="flex gap-3 justify-end sm:justify-normal">
                    <CitiesEdit edit={edit} setEdit={setEdit}/>
                    <CitiesUnits/>
                </div>

            </div>
            
            <CitiesList edit={edit}/>
        </div>
    );
}

export default Cities;