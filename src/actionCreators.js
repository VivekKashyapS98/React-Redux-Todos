export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const GET_TODO = "GET_TODO";


function handleTodo(todo) {
    return {
        type: GET_TODO,
        todo
    }
}

function handleCreate(task) {
    return {
        type: ADD_TODO,
        task
    }
}

function handleRemove(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}

export function getTodo() {
    return dispatch => {
        fetch("http://localhost:3001/api/todos")
            .then(data => data.json())
            .then(data => dispatch(handleTodo(data)))
            .catch(err => console.log("Something went Wrong: ", err))
    }
}

export function addTodo(task) {
    return dispatch => {
        fetch("http://localhost:3001/api/todos", {
            method: 'POST',
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({title: task})
        }).then(data => data.json())
          .then(data => dispatch(handleCreate(data)))
          .catch(err => console.log("Something went Wrong: ", err))
    }
}

export function removeTodo(id) {
    return dispatch => {
        fetch(`http://localhost:3001/api/todos/${id}`, {
            method: 'DELETE'
        }).then(data => data.json())
          .then(() => dispatch(handleRemove(id)))
          .catch(err => console.log("Something went Wrong: ", err))
    }
}