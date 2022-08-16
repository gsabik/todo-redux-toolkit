import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = [
    {
        id: uuid(), 
        title: "Example todo",
        description: "Example todo description",
    },
]

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },

        deleteTodo: (state, action) => {
            const todoFound = state.find(todo => todo.id === action.payload);
            if(todoFound) {
                state.splice(state.indexOf(todoFound), 1);
            }
        },

        updateTodo: (state, action) => {
            const { id, title, description } = action.payload;
            const foundTodo = state.find(todo => todo.id === id);
            if(foundTodo) {
                foundTodo.title = title;
                foundTodo.description = description;
            }
        }
    }
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;