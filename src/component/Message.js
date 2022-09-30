import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment'


const Message = ({chatBlock, myself, profile, newDate}) => {

    return(
        <div className="message">
            {newDate && <div className='newDate'>{moment(chatBlock.time).format('MMM D')}</div>}
            {!myself && <div className="profilePic">
                {profile && <FontAwesomeIcon icon="user" />}
                
            </div>}
            <div className={`messageBlock ${myself ? 'myself' : 'otherPerson'}`}>
                <div className="textPrint">
                    {chatBlock.msg}
                </div>
                <span className="time">{moment(chatBlock.time).format('h:mm a')}</span>
            </div>
        </div>
    )

}

export default Message