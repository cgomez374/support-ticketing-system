import { useState } from "react"
import { useSupportTicketContext } from "../context/TicketContext"
import FilterControls from "../components/FilterControls"
import TicketList from "../components/TicketList";

export default function AdminDashboard(){
  const { ticketList, statusFilter, priorityFilter } = useSupportTicketContext()

  const filteredTicketList = ticketList.filter(ticket => {    
      const matchedStatus = statusFilter === 'all' || ticket.status.toLowerCase() === statusFilter.toLowerCase()
      const matchedPriority = priorityFilter === 'all' || ticket.priority.toLowerCase() === priorityFilter.toLowerCase()
      return matchedStatus && matchedPriority
    })
  return (
    <section className="col-center">
      <h1>Admin Dashboard</h1>
      <FilterControls />
      <TicketList filteredTicketList={filteredTicketList} />
    </section>
  )
}