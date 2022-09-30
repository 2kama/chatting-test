import React, { useState } from 'react'
import ChatRoom from '../component/ChatRoom'




const Chat = () => {

    const[show, setShow] = useState('user1')

    return (
        <>
          <div className="header">
              Messaging App
          </div>
          <div className="tabHead">
              <div onClick={() => setShow('user1')} className={`tabBlock ${show === 'user1' ? 'chosen' : ''}`}>User 1</div>
              <div onClick={() => setShow('user2')} className={`tabBlock ${show === 'user2' ? 'chosen' : ''}`}>User 2</div>
          </div>
          <ChatRoom className={`${show === 'user1' ? '' : 'hideMe'} chatroom`} userId="user1" />
          <ChatRoom className={`${show === 'user1' ? 'hideMe' : ''} chatroom`} userId="user2" />
        </>
    )
}

export default Chat