import React from 'react'
import TodoCard from './Components/TodoCard';
import style from "./page.module.css"
const page = () => {
  const data = {
    todo:"Practice FrontEnd",
    level:"Routine",
    date:"Fri 24-11-2023",
    ispending:true
  }
  const dat = {
    todo:"FrontEnd",
    level:"Routine",
    date:"Fri 24-11-2023",
    ispending:true
  }
  const arr = [data,dat,data,data,data];
  return (
    <div className={style.main}>
      <div className='container'>

        {
          arr.map((elem)=>
          <TodoCard data={elem}/>
          )
        }
      </div>
    </div>
  )
}

export default page
