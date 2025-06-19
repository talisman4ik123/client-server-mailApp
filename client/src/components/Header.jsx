import SearchInput from "../UI/SearchInput"
import Logo from "./Logo"
import UserAvatar from "../UI/userAvatar"
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import UserInfo from "./userInfo";
import { useState } from "react";

function Header() {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <header className="w-full bg-white px-8 py-4 shadow flex justify-between items-center">
            <Logo/>
            <SearchInput/>
            <div className="flex items-center relative">
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <UserAvatar/>
                    {isHovered && <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><UserInfo/></div>}
                </div>
                <Button variant="outlined" sx={{color: "black", border: "1px solid black", marginLeft: "10px", textTransform: "none"}}>
                    <span className="mr-2">Logout</span>
                    <LogoutIcon/>
                </Button>
            </div>
        </header>
    )
}

export default Header