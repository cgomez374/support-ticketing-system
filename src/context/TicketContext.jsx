import { createContext, useContext, useState } from "react";
import tickets from "../data/tickets"

// CREATE CONTEXT
const SupportTicketContext = createContext()

// CUSTOM HOOK
export const useSupportTicketContext = () => useContext(SupportTicketContext)

// PROVIDER
export function SupportTicketProvider({children}){
  const [ticketList, setTicketList] = useState([
    ...JSON.parse(localStorage.getItem("tickets")) 
      ?  JSON.parse(localStorage.getItem("tickets"))
      : tickets
  ])

  const [statusFilter, setStatusFilter] = useState('all')
  const [priorityFilter, setPriorityFilter] = useState('all')

  function setFilter(name, value){
    if(name === "status") setStatusFilter(value)
    if(name === "priority") setPriorityFilter(value)
  }

  function findTicket(id){
    return ticketList.find(ticket => ticket.id === id)
  }

  function addNewTicket(newTicket){
    setTicketList(prevTicketList => {
      const newTicketList = [
        ...prevTicketList,
        {
          ...newTicket,
          id: crypto.randomUUID(),
          status: 'open',
          createdAt: new Date().toLocaleString()
        }
      ]
      localStorage.setItem("tickets", JSON.stringify(newTicketList))
      return newTicketList
    })
  }

  function updateTicketList(updatedTicket){
    setTicketList(prevTicketList => {
      const newTicketList = prevTicketList.map(ticket => ticket.id === updatedTicket.id 
        ? updatedTicket 
        : ticket)
      console.log(newTicketList)
      localStorage.setItem("tickets", JSON.stringify(newTicketList))
      return newTicketList
    })
  }

  function ticketsByAdmin(adminId){
    return ticketList.filter(ticket => ticket.adminId === adminId)
  }

  return (
    <SupportTicketContext.Provider value={{ ticketList, setTicketList, addNewTicket, updateTicketList, findTicket, ticketsByAdmin, setFilter, statusFilter, priorityFilter }}>
      { children }
    </SupportTicketContext.Provider>
  )

}