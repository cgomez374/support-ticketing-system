import { useEffect } from "react"
import LoginForm from "../components/Login/LoginForm"
import { useAuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function LoginPage(){
  const { loginStatus, currentUser } = useAuthContext()
  const navigate = useNavigate()
  useEffect(() => {
    if(loginStatus){
      if(currentUser.role === 'admin') navigate('/admin')
      else navigate('/')
    }
  }, [loginStatus, currentUser])

  return (
    <section>
      <h1>ResolveIT</h1>
      {
        loginStatus && "Logged In!"
      }
      <LoginForm />
    </section>
  )
}