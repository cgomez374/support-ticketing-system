import { createContext, useContext, useState } from "react";
import tickets from "../data/tickets"

// CREATE CONTEXT
const SupportTicketContext = createContext()

// CUSTOM HOOK
export const useSupportTicketContext = () => useContext(SupportTicketContext)

// PROVIDER
export function SupportTicketProvider({children}){
  const [ticketList, setTicketList] = useState([...tickets])

  return (
    <SupportTicketContext.Provider value={{ ticketList, setTicketList }}>
      { children }
    </SupportTicketContext.Provider>
  )

}