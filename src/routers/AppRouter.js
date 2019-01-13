
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '../components/Header'

import ExpenseDashboard from '../components/ExpenseDashboard'
import AddExpense from '../components/AddExpensePage'
import EditExpense from '../components/EditExpensePage'
import Help from '../components/Help'
import NotFound from '../components/404'

const AppRouter = () => (
    <div>
        <Header />
        <Switch>
            <Route path="/" exact={true} component={ExpenseDashboard}/>
            <Route path="/create" component={AddExpense}/>
            <Route path="/edit/:id" component={EditExpense}/>
            <Route path="/help" component={Help}/>
            <Route component={NotFound}/>
        </Switch>
    </div>
)

export default AppRouter