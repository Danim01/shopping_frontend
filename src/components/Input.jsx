import './Input.css'

export function Input ({ label, name, type }) {
  return (
    <label>
      <span>{label}</span>
      <input type={type} name={name} />
    </label>

  )
}