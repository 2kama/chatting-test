import { takeLatest } from 'redux-saga/effects'
import { SEND_CHAT } from '../constant'
import { handleSendChat } from './handlers/chat'

export function* watcherSaga() {
    yield takeLatest(SEND_CHAT, handleSendChat)
}