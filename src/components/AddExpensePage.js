import React, { Component} from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { startAddExpense } from '../store/actions/expenses';

export class AddExpensePage extends Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-header__title">Add Expense</h1>
                </div>
            </div>
            <div className="container">
                <ExpenseForm onSubmit={this.onSubmit}/>
            </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)