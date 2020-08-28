import React, { Component } from 'react';
import Todo from './Todo';
import NewTodo from './newTodo';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getTodo, addTodo, removeTodo } from './actionCreators';

class TodoList extends Component{
    componentDidMount() {
        this.props.getTodo();
    }

    handleAdd(val) {
        this.props.addTodo(val);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        let todos = this.props.todos.map((task) => <Todo task={task} key={task._id} remove={(id) => this.removeTodo(id)} />);
        return (
            <div>
                <Route path="/todos/new" render={props => (
                    <NewTodo {...props} handleAdd={val => this.handleAdd(val)} />
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

export default connect(mapStateToProps, { getTodo, addTodo, removeTodo })(TodoList);