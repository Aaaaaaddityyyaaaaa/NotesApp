import { Link } from "react-router-dom";

export default function HeaderCreate()
{
  return<header className="create-header">
    <Link className="back-link" to="/">Back to notes</Link>
    <div></div>
  </header>
}