import { createSlice } from "@reduxjs/toolkit";


const initialState = JSON.parse(localStorage.getItem('tasks')) || []

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, { payload }) => { state.push(payload) },
    editTask: (state, { payload }) => state.map(task => task.id === payload.id ? {
      ...task, text: payload.text
    } : task),
    toggleStatus: (state, { payload }) => state.map(task => task.id === payload.id ? {
      ...task, status: !task.status
    } : task),
    delateTask: (state, { payload }) => state.filter(task => task.id === payload.id),
    delateAll: () => [],
  }
})
export default todoSlice.reducer

// todo:  for selector :
export const useTodo = (state) => state.todo