import { Link } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"

export default function Navbar(){
  const {loginStatus, currentUser} = useAuthContext()
  return (
    <nav className="row-center">
      {
        !loginStatus 
          ? <Link to="/login">login</Link>
          : currentUser.role === 'admin' 
            ? <Link to="/admin">Dashboard</Link>
            : <Link to="/">User - submit ticket</Link>
      }
    </nav>
    
      
  )
}