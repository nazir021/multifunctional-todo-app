import React from 'react'
import {ListGroup,ListGroupItem,CustomInput,Button} from 'reactstrap'
import PropTypes from 'prop-types'

const ListItem = ({todo,toggleSelect,toggleComplete}) =>(
    <ListGroupItem className='d-flex align-items-center'>
        <CustomInput
            type='checkbox'
            id={todo.id}
            checked={todo.isSelected}
            onChange={()=>toggleSelect(todo.id)}
        />
        <div className='mx-3'>
            <h4>{todo.title}</h4>
            <p>{todo.time.toDateString()}</p>
        </div>
        <Button className='ml-auto' color={todo.isCompleted ? 'danger' : 'success'} onClick={()=>toggleComplete(todo.id)}>
            {todo.isCompleted ? 'Done' : 'Running'}
        </Button>
    </ListGroupItem>
)
 
ListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

const ListView = ({todos,toggleSelect,toggleComplete}) =>(
    <ListGroup>
        {todos.map(todo=>(
            <ListItem 
                key={todo.id}
                todo={todo}
                toggleSelect={toggleSelect}
                toggleComplete={toggleComplete}
            />
        ))}
    </ListGroup>
)

ListItem.propTypes = {
    todos: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default ListView