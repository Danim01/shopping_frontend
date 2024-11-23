
export default function Card({ name, lastName, correo }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{lastName}</p>
      <span>{correo}</span>
    </div>
  )
}
