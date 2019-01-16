import { addExpense, editExpense, removeExpense } from '../../../store/actions/expenses'

test('Should setup remove expense:action:object', () => {
    const action = removeExpense({ id: 'abcde' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abcde'
    })
})

test('Should setup edit expense:action', () => {
    const action = editExpense('abcde', { note: 'Updated' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abcde',
        updates: {
            note: 'Updated'
        }
    })
})

test('Should setup add expense:action with provided values', () => {
    const actionData = {
        note: 'new note',
        amount: 3600,
        createdAt: 1000,
        description: "new description"
    }

    const action = addExpense(actionData)
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...actionData,
            id: expect.any(String)
        }
    })
})

test('Should setup add expense:action with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            note: '',
            amount: 0,
            createdAt: 0,
            description: '',
            id: expect.any(String)
        }
    })
})



