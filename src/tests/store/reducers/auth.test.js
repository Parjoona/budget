import authReducer from '../../../store/reducers/auth'

test('Should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: '123316l13gea'
  }

  const state = authReducer({}, action)
  expect(state.uid).toBe(action.uid)
})

test('Should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  }
  const state = authReducer({ uid: 'aeahae' }, action)
  expect(state).toEqual({})
})