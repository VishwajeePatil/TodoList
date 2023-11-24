import React from 'react'
import style from "./Popup.module.css"
const Pop = ({message,setShowPopup}) => {
    const clickbtn = ()=>{
        setShowPopup(false);
    }
  return (
    <div className={style.main}>
      <p>{message}</p>
      <button className={style.cancel_button} onClick={clickbtn}>&#10006;</button>
    </div>
  )
}

export default Pop
