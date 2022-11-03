import {createStore} from "redux";
import {createAction} from "@reduxjs/toolkit";

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");


const reducer = (state = JSON.parse(window.localStorage.getItem("todos")) || [], action) => {
    switch (action.type) {
      case addToDo.type:
        return save([{ text: action.payload, id: Date.now() }, ...state]);
      case deleteToDo.type:
        return save(state.filter(toDo => toDo.id !== action.payload));
      default:
        return state;
    }
  };

const save = (state) => {
    window.localStorage.setItem("todos", JSON.stringify(state));
    return state;
};

const store = createStore(reducer);

export default store; 