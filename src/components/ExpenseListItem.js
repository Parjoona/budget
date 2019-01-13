import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeExpense } from '../store/actions/expenses'

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>

        <p>{amount} / {createdAt}</p>
        <button onClick={() => dispatch(removeExpense({id}))}>Remove</button>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expense: state.expenses
    }
}

export default connect(mapStateToProps)(ExpenseListItem)