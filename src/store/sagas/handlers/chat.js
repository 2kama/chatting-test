import { call } from 'redux-saga/effects'
import { v4 as uuidv4 } from 'uuid'
import { requestSendChat } from '../requests/chat'




export function* handleSendChat(action) {

    const { chat } = action

    try {
        const nChat = {
            ...chat,
            id: uuidv4(),
            time: new Date().getTime()
        }
        yield call(requestSendChat, nChat)
    } catch (err) {
        console.log(err)
    }
}
