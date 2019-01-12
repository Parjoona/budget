// change webpack entry-point to this file

import { createStore } from 'redux'

// ################################
// ##### REDUCER
// En ren funktion, använder enbart det som tas in i funktionen.
const countReducer = (state = {count: 0}, action) => {
    // Checkar action type
    switch(action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy }

        case 'DECREMENT': 
            // checkar om en action passar med mer information. 
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return { count: state.count - decrementBy }

        case 'RESET': 
            return { count: 0 }

        default: return state
    }
}

// ################################
// ##### STORE
// fungerar som this.setState(() => {}) över en applikation
const store = createStore(countReducer)
// Gets store states.
store.getState()

// ################################
// ##### ACTIONS
// Utför handlingar för en store.
let increment = {type: 'INCREMENT', incrementBy: 5}
let decrement = {type: 'DECREMENT', decrementBy: 5}
let reset = {type: 'RESET'}

// ################################
// ##### DISPATCH
//dispatch sender iväg objekt
store.dispatch(decrement)


// ################################
// ##### ACTION GENERATORS
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})
store.dispatch(incrementCount({incrementBy: 5}))

// ################################
// ##### Subscripe & unsubscribe
const subscription = store.subscribe(() => {
    console.log(store.getState())
})
// unsubscribes när returvärdet är kallat på som funktion
subscription()

console.log(store.getState())