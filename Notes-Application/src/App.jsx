import React, { useState } from "react";
import  {X} from 'lucide-react';


const App = () => {

  const submithandler = (e) => {
    e.preventDefault()

    const copytask = [...task];
    copytask.push({title,details})

    setTask(copytask)

    console.log(task)


    setTitle('');
    SetDetails('');
  }


  const deletenote=(idx)=>{
    console.log(idx)
   const copytask = [...task];
   copytask.splice(idx,1);
   setTask(copytask)


  }

  const [title, setTitle] = useState("")
  const [details, SetDetails] = useState("")
  const [task, setTask] = useState([])

  return (
    <div className="h-screen lg:flex bg-black text-white ">

      <form onSubmit={(e) => { submithandler(e) }} className="flex  flex-col  lg:w-1/2 gap-5 p-10  items-start ">
        <h1 className="text-lg font-bold ">Add notes

        </h1>

        {/* 
      first input for heading */}

        <input type="text"
          placeholder="Enter notes heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)

          }}
          className="px-5 py-2 border-2 outline-none rounded-2xl w-full "
        />


        {/* second input for details */}
        <textarea type="text"
          placeholder="Enter Details"
          value={details}
          className="px-5 py-2 border-2 rounded-2xl outline-none h-40 w-full"
          onChange={(e) => {
            SetDetails(e.target.value)
          }}
        />

        <button className="bg-white active:scale-75 text-black py-2 px-5 rounded-2xl w-full outline-none ">Add notes</button>



      </form>

          
          
          <div className="px-10 lg:w-1/2 flex flex-wrap p-10 gap-4 overflow-auto h-[90%]">


{
  task.map((elem,idx) => (

      
      <div key={idx} className=" relative h-52 w-40 rounded-2xl bg-cover cursor-pointer  bg-white text-black p-5 flex gap-4 flex-col ">
        <button onClick={
          (e)=>{
            deletenote(idx);

          }
        } className="absolute top-2 right-5 rounded-full bg-black text-white active:scale-75"><X /></button>
        <h1 className="text-lg font-bold">{elem.title}</h1>
        <p>{elem.details}</p>
      </div>

    
  ))
}



      </div>
    </div>
  
  )
}

export default App