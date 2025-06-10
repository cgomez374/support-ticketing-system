import { createContext, useContext, useState } from "react";
import users from "../data/users";


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export function AuthProvider({children}) {
  const [loginStatus, setLoginStatus] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  function login(username, password){
    users.forEach(user => {
      if(user.username === username && user.password === password){
        setLoginStatus(true)
        setCurrentUser(user)
      }
    })
  }

  function logout(){
    setCurrentUser(null)
    setLoginStatus(false)
  }
  return (
    <AuthContext.Provider value={{ loginStatus, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )

}