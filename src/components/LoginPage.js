import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../store/actions/auth'


export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Budget application</h1>
      <p className="box-layout__sub-title">Time to get expenses in order</p>
      <button className="button__blue" onClick={startLogin}>Login using Google</button>
    </div>
  </div>
)

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)