import React, { Component } from 'react'
import { connect } from 'react-redux'
// Importerar actions för att ändra state
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../store/actions/filters'
import { DateRangePicker } from 'react-dates'

export class ExpenseListFilters extends Component {
    state = {
        calenderFocused: null,

    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    onTextChange = (e) => {
        // props.dispatch passas in genom redux
        this.props.setTextFilter(e.target.value)
    }

    onSortChange = (e) => {
        if (e.target.value === 'date') this.props.sortByDate()
        if (e.target.value === 'amount') this.props.sortByAmount()
    }

    render() {
        return (
            <div className="container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                        type="text" 
                        className="text-input"
                        placeholder="Search"
                        value={this.props.filters.text} 
                        onChange={this.onTextChange} />
                    </div>

                    <div className="input-group__item">
                        <select 
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={this.onSortChange}>
                            <option value='date'>Date</option>
                            <option value='amount'>Amount</option>
                        </select>
                    </div>

                    <div className="input-group__item">
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
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    filters: state.filters
})

const mapDispatchToProps = dispatch => ({
    setTextFilter: text => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: startDate => dispatch(setStartDate(startDate)),
    setEndDate: endDate => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)