import React from 'react'
import { shallow } from 'enzyme'

// Component
import { ExpenseList } from '../../components/ExpenseList'
// Data
import expenses from '../store/fixtures/expenses'

test('Should render ExpensesList with expenses props', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render ExpensesList with "No expenses" message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />)
  expect(wrapper).toMatchSnapshot()
})