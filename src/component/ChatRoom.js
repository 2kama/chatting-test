import React from 'react'
import ChatMsg from './ChatMsg'
import TypeArea from './TypeArea'


const ChatRoom = ({ userId, className }) => {

    return(
        <div className={className}>
            <ChatMsg userId={userId} />
            <TypeArea userId={userId} />
        </div>
    )
}

export default ChatRoom