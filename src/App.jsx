import './styles/App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// PAGES
import Home from './pages/Home'
import AdminDashboard from './pages/AdminDashboard'
import TicketPage from './pages/TicketPage'
// COMPONENTS


function App() {
  const [ticketList, setTicketList] = useState([])
  console.log(ticketList)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Home setTicketList={setTicketList} /> } />
          <Route path="/admin" element={ <AdminDashboard /> } />
          <Route path="/ticket/:id" element={ <TicketPage /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
