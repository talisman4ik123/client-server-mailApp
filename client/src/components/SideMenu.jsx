import { NavLink } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/Inbox';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import LabelImportantOutlineIcon from '@mui/icons-material/LabelImportantOutline';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function SideMenu({messagesCount}) {

    const links = [
        {
            to: "/inbox",
            icon: <MarkEmailUnreadIcon/>,
            title: "Inbox",
            count: messagesCount
        },
        {
            to: "/unread",
            icon: <InboxIcon/>,
            title: "Unread",
            count: messagesCount
        },
        {
            to: "/important",
            icon: <LabelImportantOutlineIcon/>,
            title: "Important",
            count: messagesCount
        },
        {
            to: "/sent",
            icon: <PresentToAllIcon/>,
            title: "Sent",
            count: messagesCount
        },
        {
            to: "/bin",
            icon: <DeleteForeverIcon/>,
            title: "Bin",
            count: messagesCount
        }
    ]

    return (
        <aside className='inline-flex flex-col p-8 space-y-1 min-w-[250px] bg-white h-lvh'>
            {links.map(link => (
                <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) => `${isActive ? "bg-[#dff2f3] font-bold" : "bg-transparent hover:bg-gray-200"} flex items-center px-4 py-1 rounded-r-md transition-colors duration-300`}
                >
                {({ isActive }) => (
                <>
                    {link.icon}
                    <span className='ml-4'>{link.title}</span>
                    {isActive && (
                    <span className="block ml-auto">{link.count}</span>
                    )}
                </>)}
                </NavLink>))}
        </aside>
    )
}

export default SideMenu