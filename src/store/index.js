import { createStore } from 'redux'
import * as actionTypes from './actions/actionTypes'

const initialState = {
    todos: []
}

const rootReducer= (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_TODO :
            return{
                ...state,
                todos: [...state.todos, action.payload]
            }
            case actionTypes.delete_todo:
                let newTodos = [...state.todos]
                newTodos.splice(action.payload.index, 1)

                return {
                    ...state,
                    todos: newTodos
                }
            case actionTypes.EDIT_TODO :
                let todos = [...state.todos]

                let index =action.payload.index
                let todo = action.payload.todo
                todos[index]= todo

                return{
                    ...state,
                    todos
                }


            default :
                return state
    }
    
}

const store = createStore(rootReducer)

export default store 