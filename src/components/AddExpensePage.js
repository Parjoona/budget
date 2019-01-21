import React, { Component} from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { addExpense } from '../store/actions/expenses';

export class AddExpensePage extends Component {
    onSubmit = (expense) => {
        this.props.onSubmit(expense)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                This is expensePage
                <ExpenseForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)