import React, { Component } from 'react'
import { connect } from 'react-redux'
// Importerar actions för att ändra state
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../store/actions/filters'
import { DateRangePicker } from 'react-dates'

class ExpenseListFilters extends Component {
    state = {
        calenderFocused: null,

    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    render() {
        return (
            <div>
                <input type="text" 
                    value={this.props.filters.text} 
                    onChange={(e) => {
                        // props.dispatch passas in genom redux
                        this.props.dispatch(setTextFilter(e.target.value))
                    }} />
        
                <select 
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date') this.props.dispatch(sortByDate())
                        if (e.target.value === 'amount') this.props.dispatch(sortByAmount())
                    }}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
        
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)