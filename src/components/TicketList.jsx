import { Link } from "react-router-dom"

export default function TicketList({ filteredTicketList }){
  return (
    <ul className="ticket-list">
      {
        filteredTicketList.map(ticket => (
          <li key={ ticket.id } >
            <h3>ticket # {ticket.id}</h3>
            <p><b>subject:</b> { ticket.title }</p>
            <p><b>email:</b> { ticket.email }</p>
            <p><b>status:</b> { ticket.status }</p>
            <p><b>priority:</b> { ticket.priority }</p>
            <Link 
              to={ `/ticket/${ticket.id}` }  
              state={ticket}
            >
              view
            </Link>
          </li>
        ))
      }
    </ul>
  )
}