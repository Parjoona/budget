import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routers/AppRouter'

// CSS
import 'normalize.css/normalize.css'
import './styles/main.scss'

// Redux imports
import configureStore from './store/configureStore'
import { addExpense } from './store/actions/expenses'
// import { setTextFilter } from './store/actions/filters' 

const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }))
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 200 }))
store.dispatch(addExpense({ description: 'Rent', amount: 192000 }))
// store.dispatch(setTextFilter('bill'))

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </Provider>
), document.getElementById('app'))