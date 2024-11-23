import { Outlet } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import { Navigate } from "react-router-dom";

export default function PublicLayout () {
  const { accessToken } = useAuth()

  if (accessToken) {
    return <Navigate to="/app/dashboard" replace/>
  }

  return (

    <div>
      <h1>Layout Public</h1>
      <Outlet />
    </div>

  )
}