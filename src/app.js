import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// CSS
import 'normalize.css/normalize.css'
import './styles/main.scss'

const ExpenseDashboard = () => <p>Hello</p>
const AddExpense = () => <p>Create expense</p>
const EditExpense = () => <p>Edit expense</p>
const Help = () => <p>Get help</p>
const NotFound = () => <h1>404, page not found</h1>

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={ExpenseDashboard}/>
            <Route path="/create" component={AddExpense}/>
            <Route path="/edit" component={EditExpense}/>
            <Route path="/help" component={Help}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))