import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { addExpense } from '../store/actions/expenses';

const AddExpensePage = (props) => (
    <div>
        This is expensePage
        <ExpenseForm onSubmit={(expense) => {
            props.dispatch(addExpense(expense))
            props.history.push('/')
        }}/>
    </div>
)
export default connect()(AddExpensePage)