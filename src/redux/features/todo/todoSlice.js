import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  test: "hello"
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {}
})

export default todoSlice.reducer

// todo:  for selector :
export const useTodo = (state) => state.todo