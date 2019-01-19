import React from 'react'
import { shallow } from 'enzyme'

import ExpenseForm from '../../components/ExpenseForm'

import expense from '../store/fixtures/expenses'
////////////////////////////////
//// Mocking libraries: moment()

test('Should render ExpenseForm', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expense[0]} />)
  expect(wrapper).toMatchSnapshot()
})