import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import expensesReducer from './reducers/expenses'
import filtersReducer from './reducers/filters'
import authReducer from './reducers/auth'

const componseEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    //Store creation - Using combineReducers
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        componseEnchancers(applyMiddleware(thunk))
    )

    return store
}