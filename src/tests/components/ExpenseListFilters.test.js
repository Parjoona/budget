import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../store/fixtures/filters'

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate

beforeEach(() => {
  setTextFilter = jest.fn()
  sortByDate = jest.fn()
  sortByAmount = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(
    <ExpenseListFilters
      setTextFilter={setTextFilter}
      filters={filters}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />)
})

test('Should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseListFilters with alt-data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot()
})