export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export function createTodo(task) {
    return {
        type: ADD_TODO,
        task
    }
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}