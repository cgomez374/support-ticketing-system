import { useState } from "react"
import { useSupportTicketContext } from "../context/TicketContext"
import FilterControls from "../components/FilterControls"
import TicketList from "../components/TicketList";

export default function AdminDashboard(){
  const { ticketList } = useSupportTicketContext()

  // TRY WITH LOCALSTORAGE SO FILTERS PERSIST
  const [statusFilter, setStatusFilter] = useState('all')
  const [priorityFilter, setPriorityFilter] = useState('all')

  const filteredTicketList = ticketList.filter(ticket => {    
      const matchedStatus = statusFilter === 'all' || ticket.status.toLowerCase() === statusFilter.toLowerCase()
      const matchedPriority = priorityFilter === 'all' || ticket.priority.toLowerCase() === priorityFilter.toLowerCase()
      return matchedStatus && matchedPriority
    })
  return (
    <section className="col-center">
      <h1>Admin Dashboard</h1>
      <FilterControls 
        statusFilter={statusFilter}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
        setStatusFilter={setStatusFilter}
      />
      <TicketList filteredTicketList={filteredTicketList} />
    </section>
  )
}