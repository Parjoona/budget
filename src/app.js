import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import AppRouter from './routers/AppRouter'
import createHistory from 'history/createBrowserHistory'
import Loader from './components/Loader'

// CSS
import 'normalize.css/normalize.css'
import './styles/main.scss'
import 'react-dates/lib/css/_datepicker.css'

// Redux imports
import configureStore from './store/configureStore'
import { startSetExpenses } from './store/actions/expenses'
import { login, logout } from './store/actions/auth'

import { firebase } from './firebase/firebase'

const store = configureStore()
const history = createHistory()

let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render((
            <Provider store={store}>
                <Router history={history}>
                    <AppRouter />
                </Router>
            </Provider>
        ), document.getElementById('app'))
        hasRendered = true
    }
}

ReactDOM.render((
    <Loader />
), document.getElementById('app'))

firebase
    .auth()
    .onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store
            .dispatch(startSetExpenses())
            .then(() => {
                renderApp()
                if (history.location.pathname === '/') history.push('/dashboard')
            })
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})