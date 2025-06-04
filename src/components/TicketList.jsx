import { useSupportTicketContext } from "../context/TicketContext"

export default function TicketList(){
  const { ticketList } = useSupportTicketContext()

  // ADD FILTERING FOR THE LIST

  return (
    <ul>
      {
        ticketList.map(ticket => (
          <li key={ ticket.id } >
            <p>subject: { ticket.subject }</p>
            <p>email: { ticket.email }</p>
            <p>status: { ticket.status }</p>
            <p>priority: { ticket.priority }</p>
          </li>
        ))
      }
    </ul>
  )
}