import React, { createContext, useEffect, useState } from 'react'
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import Header from './components/Header';
import TaskList from './components/TaskList';

export const DeleteHandlerContext= createContext()
 const App = () => {
const [tasks,setTasks]=useState([])

useEffect(()=>{
  fetchingData()
},[])

const fetchingData=async()=>{
   try{
    const res= await fetch("https://aluminum-delicate-snowshoe.glitch.me/tasks")
    if(!res.ok) throw new Error("Something went wrong")
    const data=await res.json();
    setTasks(data)
    console.log(data)
   }catch(error){
    console.log(error.message)
   }
}

//delete handler 
const handleDelete=(id)=>{
 // delete data
 console.log(id)
 deleteData(id)
 // se update task  
}

const  deleteData=async(id)=>{
   await fetch(`https://aluminum-delicate-snowshoe.glitch.me/tasks/${id}`,{
    method:"DELETE",
    headers:{
      "Content-type": "application/json"
    }
   })
}


  return (
    <div className='wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-100 flex flex-col py-10'>
    <DeleteHandlerContext.Provider value={handleDelete}>
       <Header/>
      <AddTask  tasks={tasks}  setTasks={setTasks}/>
      <TaskList tasks={tasks} />
      <Footer/>
    </DeleteHandlerContext.Provider>
    </div>
  )
}

export default App;