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
      <div className="ticket-notes">
      <h3>Admin Notes</h3>
      <div className="note-list">
        {notes.map((note, idx) => (
          <div className="note-item" key={idx}>
            <p>{note}</p>
          </div>
        ))}
      </div>

      {(currentUser.id === adminId && status !== "closed") && (
        <form className="note-form" onSubmit={updateTicketComments}>
          <textarea
            name="notes"
            placeholder="Write an update for this ticket..."
            onChange={handleTextAreaChange}
            value={textAreaValue}
            rows="4"
          />
          <button type="submit">Add Note</button>
        </form>
      )}

      {(currentUser.id === adminId && status !== "closed") && (
        <button className="btn-red" onClick={closeTicket}>Close Ticket</button>
      )}
    </div>

      {/* {
        status !== "open" 
        ? 
        <div className="">
          <h3>notes:</h3>
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
              <button className="btn-red" onClick={closeTicket}>close ticket</button>
            </div>
            
          }
        </div>
      : <button className="btn-red" onClick={assignTicketToAdmin}>assign to me</button>
      } */}
    </section>
  )
}