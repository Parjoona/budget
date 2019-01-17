import selectExpenses from '../../../store/selectors/expenses'
import moment from 'moment';

import expenses from '../fixtures/expenses'

test('Should filter by text value', () => {
    const filters = {
        text: 'four',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([
        expenses[3],
        expenses[2]
    ])
})

test('Should sort by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([
        expenses[3],
        expenses[2],
        expenses[0]
    ])
})


test('Should sort by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }

    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([
        expenses[0],
        expenses[1]
    ])
})

test('Should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([
        expenses[3],
        expenses[2],        
        expenses[0],
        expenses[1]
    ])
})

test('Should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([
        expenses[2],
        expenses[3],        
        expenses[0],
        expenses[1]
    ])
})