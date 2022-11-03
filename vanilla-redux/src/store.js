import {createStore} from "redux";
import {createAction , createReducer} from "@reduxjs/toolkit";

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");


const reducer = createReducer([], {
    [addToDo]: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    [deleteToDo]: (state, action) =>
      state.filter(toDo => toDo.id !== action.payload)
  });

const store = createStore(reducer);

export default store; 