import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'

import selectExpenses from '../store/selectors/expenses'

const ExpenseList = (props) => (
    <div>
        This is ExpenseList
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

// Makes the connection to the redux store.
export default connect(mapStateToProps)(ExpenseList)

