import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import 'normalize.css/normalize.css'
import './styles/main.scss'

const ExpenseDashboard = () => <p>Hello</p>
const AddExpense = () => <p>Create expense</p>
const EditExpense = () => <p>Edit expense</p>
const Help = () => <p>Get help</p>

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" exact={true} component={ExpenseDashboard}/>
            <Route path="/create" component={AddExpense}/>
            <Route path="/edit" component={EditExpense}/>
            <Route path="/help" component={Help}/>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))