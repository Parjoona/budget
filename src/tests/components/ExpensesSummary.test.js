import React from 'react' 
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpensesSummary'

test('Should correctly render ExpenseSummary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={325}/>)
  expect(wrapper).toMatchSnapshot()
})

test('Should correctly render ExpenseSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={11} expenseTotal={3205}/>)
  expect(wrapper).toMatchSnapshot()
})