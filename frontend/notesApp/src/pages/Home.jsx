import { useEffect, useState } from "react";
import Header from "../components/Header";
import NoteCard from "../components/NoteCard";

export default function Home()
{
  const[note,setNote] = useState([]) ;
  function getNotes()
  {
    fetch("http://localhost:5000/api/notes")
  .then(res=>res.json())
  .then(data=>setNote(data))
  }
  
  useEffect(()=>{
   getNotes() ; 
  },[])
  console.log(note)

  function del(id)
  {
      fetch(`http://localhost:5000/api/notes/${id}`,{method:"DELETE"})
      .then(()=>getNotes())
      .catch(err=>console.error(err)) ; 
  }

   const NoteCardArray = note.map(n=><NoteCard key={n._id} id={n._id} title = {n.title} content ={n.content} updated = {n.updated} del = {del}/>)


  return<>
  <Header/>
  <main className="home-main">
  {NoteCardArray}
  </main>
  
  </>
}