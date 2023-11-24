import React from 'react'
import style from "./TodoCard.module.css"
import { FaClock, FaCheckCircle, FaTrash } from 'react-icons/fa';
const TodoCard = ({data}) => {
    const {todo,level,date,ispending} = data
  return (
    <div className={style.main}>
        <div className={style.info}>
            <h1>{todo}</h1>
            <h3 style={{color : level === "Routine" ? "Green" : level === "Important" ? "Orange" : "red"}}>{level}</h3>
            <p>{date}</p>
        </div>
        <div className={style.icons}>
            {
            ispending ? <FaClock color='orange'/> : <FaCheckCircle color='Green'/>
            }
            <FaTrash color='brown'/>
        </div>
    </div>
  )
}
export default TodoCard
