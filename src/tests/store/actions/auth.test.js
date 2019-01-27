import { login, logout } from '../../../store/actions/auth'

test('Should generate login action object', () => {
  const uid = 'gaejiaehnoj31'
  const action = login(uid)

  expect(action).toEqual({
    type: 'LOGIN',
    uid
  })
})

test('Should generate action object', () => {
  const action = logout()
  expect(action).toEqual({
    type: 'LOGOUT'
  })
})