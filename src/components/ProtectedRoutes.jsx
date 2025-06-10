import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoutes(){
  const { loginStatus } = useAuthContext()
  return !loginStatus ? <Navigate to="/login" /> : <Outlet />
  
}