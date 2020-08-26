import React, { Component } from 'react';

export default class newTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ""
        }
    }

    handleChange(e) {
        this.setState({todo: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleAdd(this.state.todo);
        this.setState({todo: ""});
        this.props.history.push("/todos");
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label htmlFor="todo">Todo:</label>
                <input type="text" name="todo" id="todo" value={this.state.todo} onChange={(e) => this.handleChange(e)} />
                <input type="submit" value="Add Todo" />
            </form>
        );
    }
}