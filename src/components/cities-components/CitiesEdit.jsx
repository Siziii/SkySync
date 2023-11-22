import { FaEdit } from "react-icons/fa";

const CitiesEdit = ({edit, setEdit}) => {
    return ( 
        <button 
            className={`flex items-center justify-center w-10 h-10 border-2 border-widget-light-s rounded-lg aspect-square 
            hover:brightness-110 transition-all
            ${edit?('bg-[#dddddd] border-[#ffffff]'):('bg-widget-light')}`}
            onClick={()=>setEdit(!edit)}
        >
            <FaEdit size={20} fill={edit?('#222222'):('#ffffff')}/>
        </button>
     );
}
 
export default CitiesEdit;