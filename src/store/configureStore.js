import { createStore, combineReducers } from 'redux'

import expensesReducer from './reducers/expenses'
import filtersReducer from './reducers/filters'

export default () => {
    //Store creation - Using combineReducers
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    )

    return store
}