import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendChat } from '../store/reducers/chat'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const TypeArea = ({ userId }) => {

    const dispatch = useDispatch()
    const[msg, setMsg] = useState("")

    const send = () => {
        if (msg !== "") {
            dispatch(sendChat({
                msg,
                poster: userId
            }))
        }
        

        setMsg('')
    }

    return(
        <div className="typeArea">
            <textarea placeholder='type here...' value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
            <button onClick={send}><FontAwesomeIcon icon="paper-plane" /></button>

        </div>
    )
}

export default TypeArea