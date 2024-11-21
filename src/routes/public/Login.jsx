import "./Login.css"
import { NavLink } from "react-router-dom";
import { Input } from "../../components/Input";
import Button from "../../components/Button";
import useAuth from "../../hooks/UseAuth";

export default function Login() {
  const { login } = useAuth()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const objectData = Object.fromEntries(formData)
    login(objectData)
    
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="email" name="email" type="email"/>
        <Input label="password" name="password" type="password"/>
        <Button type="submit" text="Iniciar Sesión"/>
      </form>
      <NavLink to="/app/dashboard">dashboard</NavLink>
    </div>
  )
}
