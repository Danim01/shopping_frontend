import { useEffect } from "react"
import useAuth from "../../hooks/UseAuth"
import Card from "../../components/Card"


export default function Dashboard() {
  const { user } = useAuth()

  return (
    user ? (
      <Card name={user.name} lastName={user.last_name} correo={user.email}/>
    ) : (
      <p>Cargando</p>
    )
  )
}
