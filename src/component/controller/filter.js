import  React from 'react'
import {ButtonGroup,Button} from 'reactstrap'
import PropTypes from 'prop-types'

const Filter = ({filterHandler}) =>(
    <ButtonGroup>
        <Button onClick={()=>filterHandler('all')}>All</Button>
        <Button onClick={()=>filterHandler('running')}>Running</Button>
        <Button onClick={()=>filterHandler('done')}>Completed</Button>
    </ButtonGroup>
)
Filter.propTypes = {
    filterHandler: PropTypes.func.isRequired
}

export default Filter