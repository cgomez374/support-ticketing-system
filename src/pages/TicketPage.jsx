import { useLocation } from "react-router-dom"

export default function TicketPage(){
  const location = useLocation()
  const { id, fullName, email, title, description, status, priority, createdAt } = location.state
  return (
    <section className="ticket-details">
      <h1>Ticket #{id}</h1>
      <p>name: {fullName}</p>
      <p>email: {email}</p>
      <p>subject: {title}</p>
      <p>description: {description}</p>
      <p>status: {status}</p>
      <p>priority: {priority}</p>
      <p>Created at: {createdAt}</p>
    </section>
  )
}