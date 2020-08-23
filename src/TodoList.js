import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { createTodo, removeTodo } from './actionCreators';

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todo: ""
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTodo(this.state.todo);
        this.setState({todo: ""});
    }

    handleChange(e) {
        this.setState({todo: e.target.value});
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        let todos = this.props.todos.map((task,index) => <Todo task={task} key={index} remove={(id) => this.removeTodo(id)} />);
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label htmlFor="todo">Todo:</label>
                    <input type="text" name="todo" id="todo" value={this.state.todo} onChange={(e) => this.handleChange(e)} />
                    <input type="submit" value="Add Todo" />
                </form>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(reduxState) {
    return {
        todos: reduxState.todos
    }
}

export default connect(mapStateToProps, { createTodo, removeTodo })(TodoList);