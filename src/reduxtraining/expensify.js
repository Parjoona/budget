import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// Expenses Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                return expense
            })

        default: 
            return state
    }
}










// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text}

        case 'SORT_BY_DATE':
            return { ...state, sortBy: 'date'}

        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: 'amount'}

        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate ? action.startDate : undefined}

        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate}

        default: 
            return state
    }
}









// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        let startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate 
        let endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate 
        let textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') return a.createdAt < b.createdAt ? 1 : -1
        if (sortBy === 'amount') return a.amount < b.amount ? 1 : -1
    })
}

//Store creation - Using combineReducers
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.subscribe(() => {
    const state = store.getState()
    const visExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visExpenses)
})


// Testing dispatches
const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 1000, createdAt: -1000}))
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 2000, createdAt: 1000}))
// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 5000} ))
// store.dispatch(setTextFilter('Rent'))
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
store.dispatch(setStartDate(1000))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))


// Dummy data
const demostate = {
    expenses: [{
        id: 'heahaeg',
        description: 'lol',
        note: 'Hello remember this',
        amount: 135351,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}

