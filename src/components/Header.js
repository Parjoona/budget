import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../store/actions/auth'

export const Header = ({ startLogout }) => (
    <header>
        <h1>Header</h1>
        <NavLink activeClassName="is-active" exact to="/">Home</NavLink> 
        <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink>    
        <NavLink activeClassName="is-active" to="/help">Help</NavLink>
        <button onClick={startLogout}>Log Out</button>     
    </header>
)

const mapDispatchToProps = dispatch => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)