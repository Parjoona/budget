import selectExpenses from '../../../store/selectors/expenses'
import moment from 'moment';

const expenses = [{
    note: 'when i bought something',
    amount: 1250,
    createdAt: 0,
    description: 'expense one',
    id: 1
}, {
    note: 'when i bought something',
    amount: 10,
    createdAt: moment(0).subtract(4, 'day').valueOf(),
    description: 'expense two',
    id: 2
}, {
    note: 'when i bought something',
    amount: 40000,
    createdAt: moment().add(4, 'days').valueOf(),
    description: 'expense not four',
    id: 3
}, {
    note: 'when i bought something',
    amount: 9999,
    createdAt: moment().add(5, 'days').valueOf(),
    description: 'expense four',
    id: 4
}]

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