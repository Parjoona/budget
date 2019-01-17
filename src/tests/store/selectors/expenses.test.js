import selectExpenses from '../../../store/selectors/expenses'

const expenses = [{
    note: 'when i bought something',
    amount: 1250,
    createdAt: 0,
    description: 'expense one',
    id: 1
}, {
    note: 'when i bought something',
    amount: 10,
    createdAt: -1000,
    description: 'expense two',
    id: 2
}, {
    note: 'when i bought something',
    amount: 40000,
    createdAt: 0,
    description: 'expense not four',
    id: 3
}, {
    note: 'when i bought something',
    amount: 9999,
    createdAt: 1000,
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