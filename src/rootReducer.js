import { GET_TODO, ADD_TODO, REMOVE_TODO } from './actionCreators';

const initialState = {
    todos: [],
}

export default function rootReducer(state=initialState, action) {
    switch(action.type) {
        case GET_TODO:
            return {
                ...state,
                todos: action.todo
            };
        case ADD_TODO:
            return {
                todos: [...state.todos, action.task]
            };
        case REMOVE_TODO:
            return {
                todos: state.todos.filter(val => val._id !== action.id)
            };
        default:
            return state;
    }
}