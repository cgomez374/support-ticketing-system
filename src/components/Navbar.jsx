import { Link } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"

export default function Navbar(){
  const {loginStatus, currentUser, logout} = useAuthContext()
  return (
    <nav className="row-center">
      <div className="">Hello, {currentUser.fullName}!</div>
      {
        !loginStatus 
          ? <Link to="/login">login</Link>
          : currentUser.role === 'admin' 
            ? <>
              <Link to="/admin">Dashboard</Link>
              <Link to="/admin-tickets">Assigned tickets</Link>
            </>
            
            : <>
              <Link to="/submit-ticket">submit ticket</Link> 
              <Link to="/">User Dashboard</Link> 
            </>
      }
      {
        loginStatus && <Link to="/" onClick={logout}>Logout</Link>
      }
    </nav>
    
      
  )
}