import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends Component {
    state = {
        description: '',
        amount: '',
        note: '',
        createdAt: moment(),
        calenderFocused: false
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }))
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused}))
    }

    render() {
        return (
            <form>
                <input 
                    type="text" 
                    placeholder="Description" 
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                
                <input 
                    type="number" 
                    placeholder="Amount" 
                    value={this.state.amount}
                    onChange={this.onAmountChange} 
                />

                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />

                <textarea 
                    placeholder="Add a note for expense"
                    value={this.state.note}
                    onChange={this.onNoteChange}>
                </textarea>
                
                    <button>Submit</button>
            </form>
        )
    }
}