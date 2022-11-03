import {createStore} from "redux";


const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = text => {
    return {
      type: ADD,
      text
    };
  };

export const deleteToDo = id => {
    return {
      type: DELETE,
      id
    };
  };

const reducer = (state = JSON.parse(window.localStorage.getItem("todos")) || [], action) => {
    switch (action.type) {
      case ADD:
        return save([{ text: action.text, id: Date.now() }, ...state]);
      case DELETE:
        return save(state.filter(toDo => toDo.id !== action.id));
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