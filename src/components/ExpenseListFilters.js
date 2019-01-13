import React from 'react'
import { connect } from 'react-redux'
// Importerar actions för att ändra state
import { setTextFilter } from '../store/actions/filters'

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" 
            value={props.filters.text} 
            onChange={(e) => {
                // props.dispatch passas in genom redux
                props.dispatch(setTextFilter(e.target.value))
            }} />
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)