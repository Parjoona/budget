import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routers/AppRouter'

import configureStore from './store/configureStore'

// CSS
import 'normalize.css/normalize.css'
import './styles/main.scss'

const store = configureStore()

ReactDOM.render((
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
), document.getElementById('app'))