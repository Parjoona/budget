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
import { setTextFilter } from './store/actions/filters' 
import getVisibleExpenses from './store/selectors/expenses'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill' }))
store.dispatch(addExpense({ description: 'Gas bill' }))
store.dispatch(setTextFilter('bill'))

const state = store.getState()
const visExp = getVisibleExpenses(state.expenses, state.filters)
console.log(visExp)

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </Provider>
), document.getElementById('app'))