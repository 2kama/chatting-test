import { SEND_CHAT } from '../constant'

export const sendChat = chat => {{
    return {
        type: SEND_CHAT,
        chat
    }}
}


export default function chat (state = [], action) {
    const {type } = action

    switch (type) {
        default:
            return state;
    }
}