import { useState } from "react";

function App() {
  const [color,setcolor]=useState("olive")
  return (
    <div className=" w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center   inset-x-0 px-2 top-3 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3  py-2 rounded-3xl text-white">
          <button className="outline-none px-4 py-1 rounded-full shadow-lg " onClick={()=>{setcolor("red")}} style={{background:"red"}}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg " onClick={()=>{setcolor("violet")}} style={{background:"violet"}}>violet</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg " onClick={()=>{setcolor("Green")}} style={{background:"Green"}}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg " onClick={()=>{setcolor("Orange")}} style={{background:"Orange"}}>Orange</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg " onClick={()=>{setcolor("Maroon")}} style={{background:"Maroon"}}>Maroon</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg " onClick={()=>{setcolor("#C41E3A")}} style={{background:"#C41E3A"}}>Cardinal</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg " onClick={()=>{setcolor("Brown")}} style={{background:"Brown"}}>Brown</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg " onClick={()=>{setcolor("#9FA91F")}} style={{background:"#9FA91F"}}>Citron</button>
        </div>
      </div>
    </div>
  )
}

export default App;