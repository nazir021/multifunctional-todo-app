import  React from 'react'
import {Label,CustomInput} from 'reactstrap'
import PropTypes from 'prop-types'

const View = ({view,changeView}) =>(
    <div className='d-flex'>
        <Label for='list-view' className='mr-4'>
            <CustomInput 
                className='d-inline-block'
                type='radio'
                name='view'
                value='list'
                id='list-view'
                onChange={changeView}
                checked={view == 'list'}
            /> List View
        </Label>
        <Label for='table-view' className='mr-4'>
            <CustomInput 
                className='d-inline-block'
                type='radio'
                name='view'
                value='table'
                id='table-view'
                onChange={changeView}
                checked={view == 'table'}
            /> Table View
        </Label>

    </div>
)
View.propTypes = {
    view: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired
}


export default View