import selectExpensesTotal from '../../../store/selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('Shuld return 0 if no expenses', () => {
  const res = selectExpensesTotal([])
  expect(res).toBe(0)
})

test('Should correclty add up a single expense', () => {
  const res = selectExpensesTotal([expenses[0]])
  expect(res).toBe(1250)
})

test('Should correclty add up a multiple expenses', () => {
  const res = selectExpensesTotal(expenses)
  expect(res).toBe(51259)
})