import { Link } from "react-router-dom"

export default function Header({addNote})
{
  function createNote()
  {
    return <h1>Card</h1>
  }
  return<header className="home-header">
    <h1>ThinkBoard</h1>
    <Link to = "/create" ><button className= "add-home" onClick={addNote}>+ New Note</button></Link>
  </header>
}