import { useLocation } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"
import { useSupportTicketContext } from "../context/TicketContext"
import { useState } from "react"

export default function TicketPage(){
  const location = useLocation()
  const { getUserInfo, currentUser } = useAuthContext()
  const { updateTicketList, findTicket } = useSupportTicketContext()
  const [textAreaValue, setTextAreaValue]  = useState("")

  const ticket = findTicket(location.state?.id)

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
    } = ticket

  const admin = getUserInfo(adminId)

  function handleTextAreaChange(e){
    setTextAreaValue(e.target.value)
  }

  function assignTicketToAdmin(e){
    e.preventDefault()
    updateTicketList({
      ...ticket,
      adminId: currentUser.id,
      status: "in-progress"
    })
  }

  function closeTicket(e){
    e.preventDefault()
    updateTicketList({
      ...ticket,
      status: "closed"
    })
  }

  function updateTicketComments(e){
    e.preventDefault()
    updateTicketList({
      ...ticket,
      notes: [
        ...notes,
        textAreaValue
      ]
    })
    setTextAreaValue("")
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
        ? 
        <div className="">
          <h3>notes</h3>
          <ul>
            {
              notes.map((note, idx) => (
                <li key={idx}>-{note}</li>
              ))
            }
          </ul>
          {(currentUser.id === adminId && status !== "closed") 
            &&
            <div className="">
              <form onSubmit={updateTicketComments}>
                <textarea 
                  name="notes" 
                  placeholder="Add a new note"
                  onChange={handleTextAreaChange}
                  value={textAreaValue}
                >
                </textarea>
                <button type="submit">submit</button>
              </form>
              <button onClick={closeTicket}>close ticket</button>
            </div>
            
          }
        </div>
      : <button onClick={assignTicketToAdmin}>assign to me</button>
      }
    </section>
  )
}