import firebase from '../../../utils/Firebase'

const db = firebase.firestore()


export const requestSendChat = chat => db.doc(`chats/${chat.id}`).set(chat)