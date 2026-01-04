import React, { useState } from "react";
import { X } from 'lucide-react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({title,details})

    setTask(copyTask);
    console.log(task);
    

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx)=>{
    const copyTask = [...task];
    
    copyTask.splice(idx,1)

    setTask(copyTask)
    

  }
  return (
    <div className="min-h-screen  lg:flex bg-black   text-white  ">
      
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className=" flex items-start lg:w-1/2 w-full gap-4  flex-col p-10 ">
        <h1 className=" text-3xl font-bold" >Add Notes</h1>
        {/* pahala input for heading */}
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className=" px-5 w-full  font-medium py-2 border-2 rounded outline-none "
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value);
              
            }}
          />
          {/* second  input for details */}
          <textarea
            type="text"
            className=" px-5  w-full h-32 font-medium flex items-start flex-row py-2 border-2 outline-none  rounded"
            placeholder="Write Details Here"
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
          />
          <button 
          className="bg-white active:scale-95 w-full font-medium text-black px-5  outline-none  py-2 rounded">
            Add Note
          </button>
      </form>
      <div className="  lg:w-1/2 lg:border-l-2  p-10 h-full">
      <h1 className=" text-4xl font-bold" >Recent Notes</h1>
        <div className="flex  flex-wrap items-start justify-start  gap-5 mt-6 h-full  overflow-auto">
          {task.map(function(elem,idx){
            return <div key={idx} className="flex justify-between flex-col relative h-52 w-40 rounded-xl pt-9 pb-4 px-4  text-black bg-cover  bg-[url('https://imgs.search.brave.com/Sy8UrNAAls611Pvu8Qi3_FVBoZyXVIsAj5GPLUEsNik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MTUyLzY3Ny9zbWFs/bC9zdGlja3ktbm90/ZS1wYXBlci1iYWNr/Z3JvdW5kLWZyZWUt/cG5nLnBuZw')] ">
            <div>
              <h3 className=" leading-tight text-lg font-bold" >{elem.title}</h3>
              <p className="mt-4 leading-tight text-sm font-medium text-gray-500" >{elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx)
            }} className="w-full cursor-pointer active:scale-95 bg-red-600 rounded text-xs  font-bold text-white py-1 " >delete</button>
            </div>
          })}
        

        </div>
      </div>
    </div>
  );
};

export default App;
