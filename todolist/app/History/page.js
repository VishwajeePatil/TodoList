"use client"
import React, { useEffect, useState } from 'react'
import TodoCard from '../Components/TodoCard';
import style from "./page.module.css"
import axios from 'axios';
const page = () => {
  const [arr, setarr] = useState([]);
  useEffect(()=>{
    fetch_data()
  },[])
  const fetch_data = async ()=>{
        const data = await axios.get("http://localhost:8000/history");
        setarr(data.data)
  }
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
