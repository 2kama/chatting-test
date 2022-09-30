import React, { useState, useEffect } from 'react'
import firebase from '../utils/Firebase'
import Message from './Message'
import ScrollToBottom from 'react-scroll-to-bottom';
import moment from 'moment';


const ChatMsg = ({ userId }) => {
    const db = firebase.firestore()

    const [chats, setChats] = useState([])

    useEffect(() => {
        db.collection('chats').orderBy("time", "asc").onSnapshot(querySnapshot => {
            let chatData = []
            querySnapshot.forEach(doc => {
                
                    chatData.push([doc.data()])
                
            })
            setChats(chatData)
        })
    }, [])

    return(
        <ScrollToBottom className="messageArea">
            {chats.map((chat, idx) => <Message 
            key={chat[0].id}
            chatBlock={chat[0]} 
            myself={userId === chat[0].poster} 
            profile={(userId !== chat[0].poster) && (idx === 0 || chats[idx-1][0].poster === userId)}
            newDate={idx === 0 || moment(chat[0].time).format('MMM Do YY') !== moment(chats[idx-1][0].time).format('MMM Do YY')} />)}
        </ScrollToBottom>
    )
}

export default ChatMsg