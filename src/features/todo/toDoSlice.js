import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  
  reducers: {
    addToDo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(todo)
    },
    removeToDo: (state,action) => {
        state.todos = state.todos.filter((todo)=> todo.id!==action.payload)
    },
  },
  updateToDo: (state, action) => {
    const { id, newText } = action.payload;

    // Find the index of the to-do item to be updated
    const indexToUpdate = state.todos.findIndex((todo) => todo.id === id);

    // Check if the to-do item with the specified ID exists
    if (indexToUpdate !== -1) {
      // Update the text of the to-do item
      state.todos[indexToUpdate].text = newText;
    }
  },
});

export const {addToDo, removeToDo, updateToDo} = toDoSlice .actions
export default toDoSlice.reducer