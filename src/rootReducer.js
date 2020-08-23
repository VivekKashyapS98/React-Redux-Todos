import { ADD_TODO, REMOVE_TODO } from './actionCreators';

const initialState = {
    todos: [],
    id: 0
}

export default function rootReducer(state=initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            const newState = { ...state };
            newState.id++;
            return {
                ...newState,
                todos: [...state.todos, {name:action.task, id: newState.id}]
            };
        case REMOVE_TODO:
            return {
                todos: state.todos.filter(val => val.id !== action.id),
                id: state.id-1
            };
        default:
            return state;
    }
}