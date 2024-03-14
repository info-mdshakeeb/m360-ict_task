import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todo/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice
  }
})
store.subscribe(() => {
  localStorage.setItem('todo', JSON.stringify(store.getState().todo));
});