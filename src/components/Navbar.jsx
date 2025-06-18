import { Link } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"

export default function Navbar(){
  const {loginStatus, currentUser, logout} = useAuthContext()
  return (
    <nav className="row-center">
      {
        loginStatus && 
        <div className="">Hello, {currentUser.fullName}!</div>
      }
      {
        !loginStatus 
          ? 
          <div className="">
            <Link to="/login">login</Link>
          </div> 
          : currentUser.role === 'admin' 
            ? <div className="nav-center">
              <Link to="/admin">Dashboard</Link>
              <Link to="/admin-tickets">Assigned tickets</Link>
            </div>
            
            : <div className="nav-center">
              <Link to="/">Dashboard</Link> 
              <Link to="/submit-ticket">Submit ticket</Link> 
            </div>
      }
      {
        loginStatus && 
        <div className="nav-end">
          <Link to="/" onClick={logout}>Logout</Link>
        </div>
        
      }
    </nav>
    
      
  )
}