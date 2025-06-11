import { FaRegStar } from "react-icons/fa";
import { LuMailOpen } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";
import Checkbox from "../UI/Checkbox";
import { useState } from "react";

function PreMessage() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <li className="w-full flex border-b-1 border-b-gray-300 p-2 items-center cursor-pointer" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}>
            <Checkbox />
            <button className="mr-2 star-btn cursor-pointer"><FaRegStar className="text-[#dee2e6] hover:text-[#0d6efd] w-4 h-4"/></button>
            <span className="mr-8 font-bold">from</span>
            <span className="font-bold mr-4">subject</span>
            <p className="mr-auto">message</p>
            <span className="font-bold">date</span>
            <div className={isHovered ? "block" : "hidden"}>
                <button><MdDeleteForever /></button>
                <button><LuMailOpen /></button>
            </div>
        </li>
    )
}

export default PreMessage