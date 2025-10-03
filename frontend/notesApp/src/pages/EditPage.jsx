import { useEffect, useState } from "react"
import {  Link, useNavigate, useParams } from "react-router-dom"

export default function EditPage()
{
  const param = useParams()
  const[content ,setContent] =useState("")
  const[title ,setTitle] =useState("")
  console.log(param)
  const navigate = useNavigate()
  useEffect(()=>{
    fetch(`http://localhost:5000/api/notes/${param.id}`)
    .then(res=>res.json())
    .then(data=>{
      setTitle(data.title) ;
      setContent(data.content) 
    })
  },[])
  function edit()
  {
        fetch(`http://localhost:5000/api/notes/${param.id}`,{  method:"PUT",
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify({title:title , content:content})
        })
        .then(res=>res.json())
        .then(()=>navigate("/"))
  }
  return <>
  <header className="create-header">
    <Link className="back-link" to="/">Back to notes</Link>
  </header>
  <div className="note">
  <div className="title">
  <label className="label-note">Title</label>
  <textarea className="title-area" name="title"  rows={2} cols={70} value={title} onChange={(e)=>{setTitle(e.target.value)}}></textarea>
  </div>
  <div className="content">
    <label className="label-note">Content</label>
    <textarea className="content-area"name="content" rows={20} cols={93} value={content} onChange={(e)=>{setContent(e.target.value)}}></textarea>
  </div>
  <button onClick={edit}>Edit Note</button>
</div>
  </>
}