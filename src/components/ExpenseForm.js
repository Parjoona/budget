import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class ExpenseForm extends Component {
    state = {
        description: '',
        amount: '',
        note: ''
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

    render() {
        return (
            <form>
                <input 
                    type="text" 
                    placeholder="Description" 
                    value={this.state.description}
                    onChange={this.onDescriptionChange}/>
                
                <input 
                    type="number" 
                    placeholder="Amount" 
                    value={this.state.amount}
                    onChange={this.onAmountChange} />

                <textarea 
                    placeholder="Add a note for expense"
                    value={this.state.note}
                    onChange={this.onNoteChange}></textarea>
                
                    <button>Submit</button>
            </form>
        )
    }
}