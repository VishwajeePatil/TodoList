"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TodoCard from './Components/TodoCard';
import style from "./page.module.css"
const page = () => {
  const [arr, setarr] = useState([]);
  useEffect(()=>{
    fetch_data()
  },[])
  const fetch_data = async ()=>{
        const data = await axios.get("http://localhost:8000/get_todo");
        setarr(data.data)
  }
  const update = async (id)=>{
    try {
      const data = {id:id}
      await axios.post("http://localhost:8000/update_todo",data)
      fetch_data()
      return true
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={style.main}>
      <div className='container'>

        {
          arr.map((elem)=>
          <TodoCard data={elem} update={update}/>
          )
        }
      </div>
    </div>
  )
}

export default page
