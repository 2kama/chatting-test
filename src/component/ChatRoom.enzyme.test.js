import { shallow, configure } from 'enzyme'
import ChatRoom from './ChatRoom'
import ChatMsg from './ChatMsg'
import TypeArea from './TypeArea'
import React from 'react'

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('<ChatRoom />', () => {
    it('should render well', () => {
        const className = 'chatroom'

        const wrapper = shallow(
            <ChatRoom className={className} />
        )

        expect(wrapper.find(ChatMsg).length).toBe(1)
        expect(wrapper.find(TypeArea).length).toBe(1)
    })
})