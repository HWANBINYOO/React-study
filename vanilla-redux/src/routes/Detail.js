import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
const myId = useParams().id;
const toDos = useSelector((state)=>state);
// find = 만족하는 첫번째 요소를 반환
const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));

return (
    <>
    <h1>{toDo?.text}</h1> 
    <h1>Created at: {toDo?.id}</h1>
    </>
);
}

export default Detail;