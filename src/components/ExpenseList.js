import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'


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
        expenses: state.expenses
    }
}

// Makes the connection to the redux store.
export default connect(mapStateToProps)(ExpenseList)

