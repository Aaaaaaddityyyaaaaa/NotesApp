import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateNote()
  {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate()
    function create()
    {
      const newNote = {title:title , content:content}
      fetch("http://localhost:5000/api/notes",{method:"POST" , headers:{"Content-Type": "application/json"}, body: JSON.stringify(newNote)})
      .then(res=>res.json())
      .then(()=>navigate("/")) ;  
    }
    return<div className="note">
    <div className="title">
    <label className="label-note">Title</label>
    <textarea className="title-area" name="title" value={title} onChange={(e) => setTitle(e.target.value)} rows={2} cols={70}></textarea>
    </div>
    <div className="content">
      <label className="label-note">Content</label>
      <textarea className="content-area"name="content" value={content} onChange={(e) => setContent(e.target.value)}  rows={20} cols={93}></textarea>
    </div>
    <button onClick={create}>Create Note</button>
  </div>
  }
