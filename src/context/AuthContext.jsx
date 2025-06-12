import { createContext, useContext, useState } from "react";
import users from "../data/users";


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export function AuthProvider({children}) {
  const loginInfo = JSON.parse(localStorage.getItem("loginInfo"))
  const [loginStatus, setLoginStatus] = useState(
    loginInfo ? loginInfo.loginStatus : false
  )
  const [currentUser, setCurrentUser] = useState(
    loginInfo ? loginInfo.currentUser : null
  )

  function login(username, password){
    users.forEach(user => {
      if(user.username === username && user.password === password){
        setLoginStatus(true)
        setCurrentUser(user)
        localStorage.setItem("loginInfo", JSON.stringify({
          loginStatus: true,
          currentUser: user
        }))
      }
    })
  }

  function logout(){
    setCurrentUser(null)
    setLoginStatus(false)
    localStorage.setItem("loginInfo", JSON.stringify({
      loginStatus: false,
      currentUser: null
    }))
  }

  function getUserInfo(id){
    return users.find(user => user.id === id)
  }
  return (
    <AuthContext.Provider value={{ loginStatus, currentUser, login, logout, getUserInfo }}>
      {children}
    </AuthContext.Provider>
  )

}