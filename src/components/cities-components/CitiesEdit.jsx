import { FaEdit } from "react-icons/fa";

const CitiesEdit = ({edit, setEdit}) => {
    return ( 
        <button 
            className={`flex items-center justify-center w-10 h-10 border-2 border-widget-light-s rounded-lg aspect-square 
            hover:brightness-110 transition-all
            ${edit?('bg-[#ec6e4c] border-[#f28061]'):('bg-widget-light')}`}
            onClick={()=>setEdit(!edit)}
        >
            <FaEdit size={20}/>
        </button>
     );
}
 
export default CitiesEdit;