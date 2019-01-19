import React from 'react'
import { shallow } from 'enzyme'

// Component
import ExpenseListItem from '../../components/ExpenseListItem'
// Data
import expenses from '../store/fixtures/expenses'

test('Should render ExpensesList with "No expenses" message', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
  expect(wrapper).toMatchSnapshot()
})