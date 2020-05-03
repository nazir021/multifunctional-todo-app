import React from 'react'
import {Input,Button} from 'reactstrap'
import PropTypes from 'prop-types'

const Search = ({term,searchHandler,toggleForm}) =>(
    <div className='d-flex'>
        <Input 
            placeholder='Search your task'
            className='mr-3'
            value={term}
            onChange={e => searchHandler(e.target.value)}
        />
        <Button color='success' onClick={toggleForm}>
            New
        </Button>
    </div>
)

Search.propTypes = {
    term: PropTypes.string.isRequired,
    searchHandler: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired 
}

export default Search
