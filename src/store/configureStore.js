import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import expensesReducer from './reducers/expenses'
import filtersReducer from './reducers/filters'
import thunk from 'redux-thunk'

const componseEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    //Store creation - Using combineReducers
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        componseEnchancers(applyMiddleware(thunk))
    )

    return store
}