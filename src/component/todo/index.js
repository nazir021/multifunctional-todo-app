import React from 'react'
import {Modal,ModalBody,ModalHeader} from 'reactstrap'
import ListView from '../listview'
import TableView from '../tableview'
import Controller from '../controller'
import CreateForm from '../todo-form'
import shortid from 'shortid'

class Todo extends React.Component{
    state = {
        todo: [
            {
                id: 'dfdf3f',
                title: 'Todo One',
                description: 'Try a description',
                time: new Date(),
                isCompleted: false,
                isSelected: false
            },
            {
                id: 'dfdf4f',
                title: 'Todo Two',
                description: 'Try a description',
                time: new Date(),
                isCompleted: false,
                isSelected: false
            }
        ],
        isOpenTodoForm : false,
        searchTerm: '',
        view: 'list',
        filter: 'all'
}
    toggleSelect = (todoId) =>{
        const todos = [...this.state.todo]
        const todo = todos.find(singleTodo => singleTodo.id === todoId)
        todo.isSelected = !todo.isSelected
        this.setState({todo:todos})
    }
    toggleComplete = (todoId) =>{
        const todos = [...this.state.todo]
        const todo = todos.find(singleTodo => singleTodo.id === todoId)
        todo.isCompleted = !todo.isCompleted
        this.setState({todo:todos})
    }
    searchHandler = value =>{
        this.setState({searchTerm: value})
    }
    toggleForm = () =>{
        this.setState({
            isOpenTodoForm : !this.state.isOpenTodoForm
        })
    }
    createTodo = todo =>{
        todo.id = shortid.generate()
        todo.time = new Date()
        todo.isCompleted = false
        todo.isSelected = false

        const todos = [todo, ...this.state.todo]
        this.setState({todo:todos})
        this.toggleForm()

    }
    filterHandler = filter =>{
        this.setState({filter})
    }
    changeView = event =>{
        this.setState({
            view : event.target.value
        })
    }
    clearSelected =() =>{
        const todos = this.state.todo.filter(st=> !st.isSelected)
        this.setState({todo: todos})
    }
    clearCompleted =() =>{
        const todos = this.state.todo.filter(st=> !st.isCompleted)
        this.setState({todo: todos})
    }
    reset =() =>{
        this.setState({
            isOpenTodoForm : false,
            searchTerm: '',
            view: 'list',
            filter: 'all'
        })
    }

    performSearch = () => {
       return this.state.todo.filter(st=>st.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }
    performFilter = todos => {
        let {filter} = this.state
        if(filter === 'done'){
            return todos.filter(todo=> todo.isCompleted)
        }else if(filter === 'running') {
            return todos.filter(todo=> !todo.isCompleted)
        }else{
            return todos
        }
    }

    getView = ()=> {
        let todos = this.performSearch()
        todos = this.performFilter(todos)
        return this.state.view === 'list' ? (
            <ListView todos={todos} toggleSelect={this.toggleSelect} toggleComplete={this.toggleComplete}/>
        ) : (
            <TableView todos={todos} toggleSelect={this.toggleSelect} toggleComplete={this.toggleComplete}/>
        )
    }
    render(){
        return(
            <div >
                <h1 className='display-4 text-center mb-5'>My ToDo</h1>
                <Controller 
                    term={this.state.searchTerm}
                    view={this.state.view}
                    searchHandler={this.searchHandler}
                    toggleForm={this.toggleForm}
                    filterHandler={this.filterHandler}
                    changeView={this.changeView}
                    clearSelected={this.clearSelected}
                    clearCompleted={this.clearCompleted}
                    reset={this.reset}
                />
                <div>
                    {this.getView()}
                </div>
                <Modal
                    isOpen={this.state.isOpenTodoForm}
                    toggle={this.toggleForm}
                >
                    <ModalHeader toggle={this.toggleForm} >
                        Create New Todo
                    </ModalHeader>
                    <ModalBody>
                        <CreateForm createTodo={this.createTodo}/>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Todo