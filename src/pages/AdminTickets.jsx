import TicketList from "../components/TicketList"
import { useAuthContext } from "../context/AuthContext"
import { useSupportTicketContext } from "../context/TicketContext"

export default function AdminTickets(){
  const { ticketsByAdmin } = useSupportTicketContext()
  const { currentUser } = useAuthContext()
  const adminsTickets = ticketsByAdmin(currentUser.id)
  return (
    <section>
      <h1>Assigned Tickets</h1>
      <TicketList filteredTicketList={adminsTickets} />
    </section>
  )
}