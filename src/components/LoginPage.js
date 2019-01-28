import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../store/actions/auth'


export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1>Budget application</h1>
      <p>Time to get expenses in order</p>
      <button onClick={startLogin}>Login</button>
    </div>
  </div>
)

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)