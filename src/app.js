import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routers/AppRouter'

// CSS
import 'normalize.css/normalize.css'
import './styles/main.scss'
import 'react-dates/lib/css/_datepicker.css'

// Redux imports
import configureStore from './store/configureStore'
import { startSetExpenses } from './store/actions/expenses'
// import { setTextFilter } from './store/actions/filters'

import { firebase } from './firebase/firebase'

const store = configureStore()

ReactDOM.render((
    <p>Loading ...</p>
), document.getElementById('app'))

store
    .dispatch(startSetExpenses())
    .then(() => {
        ReactDOM.render((
            <Provider store={store}>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </Provider>
        ), document.getElementById('app'))
    })

firebase
    .auth()
    .onAuthStateChanged((user) => {
    user ? console.log('Log in') : console.log('Log out') 
})