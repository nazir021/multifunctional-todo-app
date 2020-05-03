import React from 'react'
import {CustomInput,Button, Table} from 'reactstrap'
import PropTypes from 'prop-types'

const TableItem = ({todo,toggleSelect,toggleComplete})=>(
    <tr>
        <th scope='row'>
            <CustomInput 
                type='checkbox'
                id={todo.id}
                checked={todo.isSelected}
                onChange={()=>toggleSelect(todo.id)}
            />
        </th>
        <td>
            {todo.time.toDateString()}
        </td>
        <td>
            {todo.title}
        </td>
        <td>
            <Button color={todo.isCompleted ? 'danger' : 'success'} onClick={()=> toggleComplete(todo.id)}>
                {todo.isCompleted ? 'Done' : 'Running'}
            </Button>
        </td>
    </tr>
)

TableItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

const TableView = ({todos,toggleSelect,toggleComplete}) =>(
    <Table >
        <thead>
            <tr>
                <th >Select</th>
                <th>Time</th>
                <th>ToDo</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {todos.map(todo=>(
                <TableItem 
                    key={todo.id}
                    todo={todo}
                    toggleSelect={toggleSelect}
                    toggleComplete={toggleComplete}
                />
            ))}
        </tbody>
    </Table>
)

TableView.propTypes = {
    todos: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default TableView