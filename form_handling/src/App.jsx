import React, { useState } from "react";

const App=()=>{


  const [title,settitle] = useState('')
  const submitbtn = (e)=>{
    e.preventDefault();



    console.log("information is submited by ",title)
    settitle('')

  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitbtn(e);

      }}>
        <input onChange={(e)=>{
          settitle(e.target.value)
        }} value={title} type="text" placeholder="enter your name" />
        <button type="submit">submit</button>
      </form>
      
    </div>
  )
}

export default App