"use client"
import React, { useState } from 'react'
import axios from 'axios';
import style from "./page.module.css"
import Pop from '../Components/Pop';
const page = () => {
  const [showpopup, setShowPopup] = useState(false);
  const [formdata, setformdata] = useState({
    todo: "",
    level: "Routine",
  });
  // Add Todo Function
  const add_todo = (e)=>{
    setformdata({
      ...formdata,
      todo:e.target.value,
    })
  }
  // Add Level Function 
  const add_lvl = (e)=>{
    setformdata({
      ...formdata,
      level:e.target.value,
    })
  }
  // Function Submit And Post Data To Server
  const post_data = async (event)=>{
    event.preventDefault();
    console.log(formdata)
    setShowPopup(true)
    try {
      await axios.post("http://localhost:8000/add_todo",formdata)
      console.log("Data Sended Successfully")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    { showpopup ? <Pop message={"Task Added SuccessFully"} setShowPopup={setShowPopup}/> : null}
    <div className={style.main}>
      <div className='container'>
        <div className={style.form}>
          <form onSubmit={post_data}>
            <div className={style.heading}>
              <p>ADD TODO</p>
            </div>
            <div className={style.inp_todo}>
              <label>Task Name</label>
              <input type='text' placeholder='Enter Task' onChange={add_todo}/>
            </div>
            <div className={style.inp_lvl}>
              <label>Add Level</label>
              <select value={formdata.level} onChange={add_lvl}>
                <option value={"Routine"}>Routine</option>
                <option value={"Important"}>Important</option>
                <option value={"Crucial"}>Crucial</option>              
              </select>
            </div>
            <div className={style.inp_smt}>
              <input type='submit'/>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default page
