import FilterControls from "../components/FilterControls"
import TicketList from "../components/TicketList"
import { useAuthContext } from "../context/AuthContext"
import { useSupportTicketContext } from "../context/TicketContext"

export default function AdminTickets(){
  const { statusFilter, priorityFilter, ticketsByAdmin } = useSupportTicketContext()
  const { currentUser } = useAuthContext()

  const adminsTickets = ticketsByAdmin(currentUser.id)

  const filteredTicketList = adminsTickets.filter(ticket => {    
      const matchedStatus = statusFilter === 'all' || ticket.status.toLowerCase() === statusFilter.toLowerCase()
      const matchedPriority = priorityFilter === 'all' || ticket.priority.toLowerCase() === priorityFilter.toLowerCase()
      return matchedStatus && matchedPriority
    })
  return (
    <section className="col-center">
      <h1>Assigned Tickets</h1>
      <FilterControls />
      <TicketList filteredTicketList={filteredTicketList} />
    </section>
  )
}