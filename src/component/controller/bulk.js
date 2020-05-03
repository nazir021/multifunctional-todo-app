import  React from 'react'
import {ButtonGroup,Button} from 'reactstrap'
import PropTypes from 'prop-types'

const Bulk = ({clearSelected,clearCompleted,reset}) =>(
    <ButtonGroup>
        <Button color='danger' onClick={clearSelected}>Clear Selected</Button>
        <Button color='danger' onClick={clearCompleted}>Clear Completed</Button>
        <Button color='danger' onClick={reset}>Reset</Button>
    </ButtonGroup>
)

Bulk.propTypes = {
    clearSelected: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}

export default Bulk