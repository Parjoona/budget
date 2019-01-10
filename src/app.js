import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'


import AppRouter from './routers/AppRouter'

// CSS
import 'normalize.css/normalize.css'
import './styles/main.scss'

ReactDOM.render((
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
), document.getElementById('app'))