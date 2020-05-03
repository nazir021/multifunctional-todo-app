import React from 'react'
import PropTypes from 'prop-types'
import {Col,Row} from 'reactstrap'

import Search from './search'
import Filter from './filter'
import View from './view'
import Bulk from './bulk'

const Controller = ({term,searchHandler,toggleForm,filterHandler,changeView,view,clearCompleted,clearSelected,reset}) =>(
    <div>
        <Search 
            term={term}
            searchHandler={searchHandler}
            toggleForm={toggleForm}
        />
        <Row className='my-4'>
            <Col md={{size:4}}>
                <Filter filterHandler={filterHandler}/>
            </Col>
            <Col md={{size:4}}>
                <View view={view} changeView={changeView}/>
            </Col>
            <Col md={{size:4}} className='d-flex'>
                <div className='ml-auto'>
                    <Bulk clearSelected={clearSelected} clearCompleted={clearCompleted} reset={reset} />
                </div>
            </Col>
        </Row>
    </div>
)

Controller.propTypes = {
    term: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
    searchHandler: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired,
    filterHandler: PropTypes.func.isRequired,
    changeView: PropTypes.func.isRequired,
    clearSelected: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}

export default Controller
