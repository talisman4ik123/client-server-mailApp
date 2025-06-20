import MessagePrev from "./MessagePrev"

function MessageList() {
    return (
        <ul className="flex flex-col bg-white">
            <MessagePrev/>
            <MessagePrev/>
            <MessagePrev/>
        </ul>
    )
}

export default MessageList