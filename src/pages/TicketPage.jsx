import { useLocation } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"

export default function TicketPage(){
  const location = useLocation()
  const { getUserInfo, currentUser } = useAuthContext()


  // NEED TO FINISH UPDATE TICKET FUNCTION TO UPDATE ASSINGED TO AND COMMENTS!!!!

  const { 
    id, 
    fullName, 
    email, 
    title, 
    description, 
    status, 
    priority, 
    createdAt,
    adminId,
    notes
    } = location.state

  const admin = getUserInfo(adminId)

  function handleClick(e){
    e.preventDefault()
  }

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
      <p>assinged to: { admin ? admin.fullName : "" }</p>
      {
        status !== "open" 
        ? <div className="">
        <h3>notes</h3>
        <ul>
          {
            notes.map((note, idx) => (
              <li key={idx}>-{note}</li>
            ))
          }
        </ul>
        {(currentUser.id === adminId && status !== "closed") && <form action="">
          <textarea name="notes" placeholder="Add a new note"></textarea>
          <button type="submit" onClick={handleClick}>submit</button>
        </form>
        }
      </div>
      : <button onClick={handleClick}>assign to me</button>
      }
    </section>
  )
}