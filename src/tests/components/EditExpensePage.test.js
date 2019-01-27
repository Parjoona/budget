import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expense from '../store/fixtures/expenses'

let editExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
  editExpense = jest.fn()
  startRemoveExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(
    <EditExpensePage 
      editExpense={editExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      expense={expense[2]}
    />)
})

test('Should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense[2])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(expense[2].id, expense[2])
})

test('Should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expense[2].id })
})