import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext"

export default function LoginForm(){
  const { login } = useAuthContext()
  const [loginFormData, setLoginFormData] = useState({
    username: '',
    password: ''
  })

  function handleChange(e){
    setLoginFormData(prevLoginData => {
      return {
        ...prevLoginData,
        [e.target.name]: e.target.value
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    login(loginFormData.username, loginFormData.password)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="username"
        value={loginFormData.username}
        type="text" 
        placeholder="username" 
        onChange={handleChange}
      />
      <input 
        name="password"
        value={loginFormData.password}
        type="password" 
        placeholder="password" 
        onChange={handleChange}
      />
      <button type="submit">submit</button>
    </form>
  )
}