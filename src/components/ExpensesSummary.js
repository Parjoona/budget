import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../store/selectors/expenses'
import selectExpensesTotal from '../store/selectors/expenses-total'

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
  const formatedTotal = numeral(expenseTotal / 100).format('$0,0.00')
  return (
    <div className="page-header">
      <div className="container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totaling <span>{formatedTotal}</span></h1>
        <div className="page-header__actions">
          <Link className="button__blue" to="/create">Add expense</Link>
        </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)

  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpenseSummary)