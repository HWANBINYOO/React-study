import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";
import { Link } from "react-router-dom";


function ToDo({ text, id }) {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(deleteToDo(id));
        };    return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onClick}>❌</button>
      </Link>
    </li>
  );
}

export default ToDo;