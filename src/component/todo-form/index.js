import React from 'react'
import {Form,FormGroup, Label, Input, Button} from 'reactstrap'
import PropTypes from 'prop-types'

class CreateForm extends React.Component{
    state = {
        title: '',
        description: ''
    }
    changeHandler = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event =>{
        event.preventDefault()
        this.props.createTodo(this.state)
        event.target.reset()
        this.setState({text:'',description:''})
    }

    render(){
        return(
            <Form onSubmit={this.submitHandler}>
                <FormGroup>
                    <Label>Enter a Title</Label>
                    <Input 
                        placeholder='Give a title'
                        name='title'
                        value={this.state.title}
                        onChange={this.changeHandler}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Enter Description</Label>
                    <Input 
                        placeholder='Give a description'
                        type='textarea'
                        name='description'
                        value={this.state.description}
                        onChange={this.changeHandler}
                    />
                </FormGroup>
                <Button type='submit'>Create Task</Button>
            </Form>
        )
    }
}

CreateForm.propTypes = {
    createTodo: PropTypes.func.isRequired
}

export default CreateForm