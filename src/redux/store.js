import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./states/todoSlice";

export const store = configureStore({
    reducer: {
        todos: todoSlice.reducer,
    }
})