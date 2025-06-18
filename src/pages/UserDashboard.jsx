import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useSupportTicketContext } from "../context/TicketContext"
import TicketList from "../components/TicketList";
import FilterControls from "../components/FilterControls";

export default function UserDashboard(){
  const { ticketList, statusFilter, priorityFilter } = useSupportTicketContext()
  const { currentUser } = useAuthContext()

  const userTicketList = ticketList.filter(ticket => 
    ticket.userId === currentUser.id
  )

  const filteredTicketList = userTicketList.filter(ticket => {    
    const matchedStatus = statusFilter === 'all' || ticket.status.toLowerCase() === statusFilter.toLowerCase()
    const matchedPriority = priorityFilter === 'all' || ticket.priority.toLowerCase() === priorityFilter.toLowerCase()
    return matchedStatus && matchedPriority
  })
  return (
    <section className="col-center">
      <h1>Dashboard</h1>
      <FilterControls />
      <TicketList filteredTicketList={filteredTicketList} />
    </section>
  )
}