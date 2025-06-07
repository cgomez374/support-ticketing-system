import { Link } from "react-router-dom"

export default function Navbar(){
  return (
    <nav className="row-center">
      <Link to="/">User - submit ticket</Link>
      <Link to="/admin">Admin</Link>
    </nav>
    
      
  )
}