import { FaEdit } from "react-icons/fa";

const CitiesEdit = ({edit, setEdit}) => {
    return ( 
        <button 
            className={`h-full flex items-center justify-center  border-2 border-widget-light-s rounded-lg px-2 aspect-square 
            hover:brightness-110 transition-all
            ${edit?('bg-[#dddddd] border-[#ffffff]'):('bg-widget-light')}`}
            onClick={()=>setEdit(!edit)}
        >
            <FaEdit size={20} fill={edit?('#222222'):('#ffffff')}/>
        </button>
     );
}
 
export default CitiesEdit;