import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../store/actions/expenses'

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
})

export class EditExpensePage extends Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }

    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id})
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="container">
                        <h1 className="page-header__title">Save</h1>
                    </div>
                </div>
                <div className="container">
                    <ExpenseForm 
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}/>
                    <button className="button button__secondary" onClick={this.onRemove}>Remove</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)