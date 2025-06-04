import { Link } from "react-router-dom"

export default function Navbar(){
  return (
    <ul>
      <li>
        <Link to="/">User - submit ticket</Link>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  )
}