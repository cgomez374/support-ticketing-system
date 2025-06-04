import './styles/App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// CONTEXT
import { SupportTicketProvider } from './context/TicketContext'
// PAGES
import Home from './pages/Home'
import AdminDashboard from './pages/AdminDashboard'
import TicketPage from './pages/TicketPage'
// COMPONENTS
import Navbar from './components/Navbar'


function App() {
  return (
    <>
      <SupportTicketProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/admin" element={ <AdminDashboard /> } />
            <Route path="/ticket/:id" element={ <TicketPage /> } />
          </Routes>
        </Router>
      </SupportTicketProvider>
    </>
  )
}

export default App
