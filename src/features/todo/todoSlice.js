import { createSlice  ,nanoid} from "@reduxjs/toolkit";
// nanoid to generate random id
const initialState = {
    todos: [{id:1 , text:"Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo' , // property given
    initialState,
    reducers: {
        addTodo : (state , action) => {
            const todo  = {
                id : nanoid() ,
                text: action.payload
            }
            state.todos.push(todo) // update state
        } ,
        removeTodo : (state, action) =>{
            state.todos = state.todos.filter((todo)=> todo.id !==action.payload)
        },
    }
})

export const {addTodo ,removeTodo} = todoSlice.actions
export default todoSlice.reducer