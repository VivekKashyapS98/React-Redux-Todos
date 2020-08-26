import React, { Component } from 'react';
import Todo from './Todo';
import NewTodo from './newTodo';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createTodo, removeTodo } from './actionCreators';

class TodoList extends Component{
    handleAdd(val) {
        this.props.createTodo(val);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        let todos = this.props.todos.map((task,index) => <Todo task={task} key={index} remove={(id) => this.removeTodo(id)} />);
        return (
            <div>
                <Route path="/todos/new" render={props => (
                    <NewTodo {...props} handleSubmit={val => this.handleAdd(val)} />
                )} />
                <Route exact path="/todos" component={() => <ul>{todos}</ul>} />
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