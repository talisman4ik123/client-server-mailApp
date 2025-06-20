import Header from "../components/Header"
import MessageList from "../components/MessageList"
import SideMenu from "../components/SideMenu"
import TopMenu from "../components/TopMenu"

function Important() {
    return (
        <div>
            <Header/>
            <div className="flex">
                <SideMenu messagesCount={13}/>
                <div className="w-full pl-2 pr-2">
                    <TopMenu/>
                    <MessageList/>
                </div>
            </div>
        </div>
    )
}

export default Important