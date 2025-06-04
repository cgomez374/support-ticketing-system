import TicketForm from "../components/TicketForm";

export default function Home({ setTicketList }){
  return (
    <section>
      <h1>HOME (Ticket submission)</h1>
      <TicketForm setTicketList={setTicketList} />
    </section>
  )
}