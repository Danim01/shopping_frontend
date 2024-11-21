import { Outlet } from "react-router-dom";

export default function PrivateLayout () {
  return (
    <div>
      <p>Layout private</p>
      <Outlet />
    </div>
  )
}