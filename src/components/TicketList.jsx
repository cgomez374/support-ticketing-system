import { useState } from "react"
import { useSupportTicketContext } from "../context/TicketContext"
import FilterControls from "./FilterControls"

export default function TicketList(){
  const { ticketList } = useSupportTicketContext()
  const [statusFilter, setStatusFilter]= useState('all')
  const [priorityFilter, setPriorityFilter]= useState('all')

  const filters = [
    {
      name: 'status',
      value: statusFilter,
      options: [
        { value: 'all', label: 'all statuses' },
        { value: 'open', label: 'open' },
        { value: 'in-progress', label: 'in-progress' },
        { value: 'closed', label: 'closed' },
      ]
    },
    {
      name: 'priority',
      value: priorityFilter,
      options: [
        { value: 'all', label: 'all priorities' },
        { value: 'high', label: 'high' },
        { value: 'medium', label: 'medium' },
        { value: 'low', label: 'low' },
      ]
    }
  ]

  function setFilter(name, value){
    if(name === "status") setStatusFilter(value)
    if(name === "priority") setPriorityFilter(value)
  }

  const filteredTicketList = ticketList.filter(ticket => {    
      const matchedStatus = statusFilter === 'all' || ticket.status.toLowerCase() === statusFilter.toLowerCase()
      const matchedPriority = priorityFilter === 'all' || ticket.priority.toLowerCase() === priorityFilter.toLowerCase()
      return matchedStatus && matchedPriority
    })

  return (
    <section className="col-center">
      <FilterControls 
        filters={filters}
        setFilter={setFilter}
      />
      <ul className="ticket-list">
        {
          filteredTicketList.map(ticket => (
            <li key={ ticket.id } >
              <h3>ticket # {ticket.id}</h3>
              <p><b>subject:</b> { ticket.subject }</p>
              <p><b>email:</b> { ticket.email }</p>
              <p><b>status:</b> { ticket.status }</p>
              <p><b>priority:</b> { ticket.priority }</p>
            </li>
          ))
        }
      </ul>
    </section>
  )
}