import React from 'react'
import style from "./TodoCard.module.css"
import { FaClock, FaCheckCircle, FaTrash } from 'react-icons/fa';
const TodoCard = ({data,update}) => {
    const {todo,level,date,ispending,_id} = data
    const upd = ()=>{
      update(_id)
    }
  return (
    <div className={style.main}>
        <div className={style.info}>
            <h1>{todo}</h1>
            <h3 style={{color : level === "Routine" ? "Green" : level === "Important" ? "Orange" : "red"}}>{level}</h3>
            <p>{date}</p>
        </div>
        <div className={style.icons} onClick={upd}>
            { 
              ispending ? <FaClock color='orange'/> : <FaCheckCircle color='Green'/>
            }
            <FaTrash color='brown'/>
        </div>
    </div>
  )
}
export default TodoCard
