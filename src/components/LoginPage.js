import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../store/actions/auth'


export const LoginPage = ({ startLogin }) => (
  <button onClick={startLogin}>Login</button>
)

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)