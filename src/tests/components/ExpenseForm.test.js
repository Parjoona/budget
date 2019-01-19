import React from 'react'
import { shallow } from 'enzyme'

import ExpenseForm from '../../components/ExpenseForm'

import expense from '../store/fixtures/expenses'
////////////////////////////////
//// Mocking libraries: moment() __mocks__

describe('ExpenseForm rendering', () => {
  test('Should render ExpenseForm', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
  })
  
  test('Should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expense[0]} />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('ExpenseForm interactions', () => {
  test('Should render error for invalid submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper
      .find('form')
      .simulate('submit', {
        preventDefault: () => {}
      })

      expect(wrapper.state('error').length)
        .toBeGreaterThan(0)

    expect(wrapper).toMatchSnapshot()
  })

  test('Should set description on input change', () => {
    const value = "new description"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input')
      .at(0)
      .simulate('change', {
        target: { value }
      })

      expect(wrapper.state('description')).toBe(value)
  })
  
  test('Should set textarea on input change', () => {
    const value = "new note"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea')
      .at(0)
      .simulate('change', {
        target: { value }
      })

      expect(wrapper.state('note')).toBe(value)
  })

  test('Should set amount if valid input', () => {
    const value = "23.50"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input')
      .at(1)
      .simulate('change', {
        target: { value }
      })

      expect(wrapper.state('amount')).toBe(value)
  })

  test('Should set amount if invalid input', () => {
    const value = "23.550"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input')
      .at(1)
      .simulate('change', {
        target: { value }
      })

      expect(wrapper.state('amount')).toBe('')
  })
})


