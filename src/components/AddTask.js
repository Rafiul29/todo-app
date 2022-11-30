import React, { useState,useRef } from 'react'

const AddTask = () => {

const [task, setTask]=useState("");
const inputRef=useRef(null);

const addTaskHandler=(e)=>{
    e.preventDefault();
// send data form server
    taskPosting(task);
    inputRef.current.blur();
    setTask("");
}
//task posting
const taskPosting=async(text)=>{
    const res= await fetch("https://aluminum-delicate-snowshoe.glitch.me/tasks",{
      method:"POST",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify({text}),
    })
}

  return (
    <form className='bg-gray-900 container mx-auto flex justify-between p-10' onSubmit={addTaskHandler}>
      <input 
      ref={inputRef}
      value={task}
      onChange={(e)=>setTask(e.target.value)}
      required
      type="text" 
      placeholder='What things to do?' className='bg-transparent outline-none border-b-2 border-gray-400 py-2 px-5 focus:border-teal-600'
       />

      <button 
      type="submit"
       className="bg-teal-900/30 py-2 px-5 border-2 border-teal-600 rounded text-teal-500 hover:bg-teal-500 hover:text-gray-900 duration-300"
       >Add task</button>

    </form>
  )
}

export default AddTask