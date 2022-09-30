import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons'




import Chat from './pages/Chat'
import './index.css'



library.add( faUser, faPaperPlane )



const App = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Chat />} />

                    {/* <Route component={PageNotFound} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default App
