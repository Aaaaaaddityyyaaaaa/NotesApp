import { Link } from "react-router-dom";

export default function NoteCard({id , title , content , updated , del})
{
  return <div className="note-card">
            <div className="note-card-title">
              <label >Title</label>
              <textarea readOnly value={title}></textarea>
            </div>
            <div className="note-card-content">
              <label>Content</label>
              <textarea readOnly  value={content}></textarea>
            </div>
            <div className="button-area">
              <button className="delete-button" onClick={()=>del(id)}>delete</button>
              <Link to={`/edit/${id}`} title="title" content="content"><button className="edit-button">edit</button></Link>            
            </div>
              
          </div>
  
}
