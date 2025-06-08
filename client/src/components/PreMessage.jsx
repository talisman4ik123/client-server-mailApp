import { FaRegStar } from "react-icons/fa";
import { LuMailOpen } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";

function PreMessage() {
    return (
        <li className="w-full flex border-b-1 border-b-gray-300 p-2 items-center">
            <input type="checkbox" className="mr-2 w-4 h-4 accent-white"/>
            <button className="mr-2"><FaRegStar /></button>
            <span className="mr-8 font-bold">from</span>
            <span className="font-bold mr-4">subject</span>
            <p className="mr-auto">message</p>
            <span className="font-bold">date</span>
            <div className="hidden">
                <button><MdDeleteForever /></button>
                <button><LuMailOpen /></button>
            </div>
        </li>
    )
}

export default PreMessage