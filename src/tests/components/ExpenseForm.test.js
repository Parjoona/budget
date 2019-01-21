import React from 'react'
import moment from 'moment'
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

  test('Should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expense[0]} onSubmit={onSubmitSpy}/>)
    wrapper
      .find('form')
      .simulate('submit', {
        preventDefault: () => {}
      })

    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      description: expense[0].description,
      amount: expense[0].amount,
      note: expense[0].note,
      createdAt: expense[0].createdAt
    })
  })

  test('Should set new date ondateChange()', () => {
    const now = moment()
    const wrapper = shallow (<ExpenseForm/>)
    wrapper
      .find('SingleDatePicker')
      .prop('onDateChange')(now)
      
    expect(wrapper.state('createdAt')).toEqual(now)
  })


  test('Should set focused on onFocusChange()', () => {
    const focused = true
    const wrapper = shallow (<ExpenseForm/>)
    wrapper
      .find('SingleDatePicker')
      .prop('onFocusChange')({ focused })
      
    expect(wrapper.state('calenderFocused')).toEqual(focused)
  })
})


