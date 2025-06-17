import './styles/App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// CONTEXT
import { SupportTicketProvider } from './context/TicketContext'
import { AuthProvider } from './context/AuthContext'
// PAGES
import SubmitTicket from './pages/SubmitTicket'
import AdminDashboard from './pages/AdminDashboard'
import TicketPage from './pages/TicketPage'
import LoginPage from './pages/LoginPage'
import UserDashboard from './pages/UserDashboard'
import AdminTickets from './pages/AdminTickets'
// COMPONENTS
import Navbar from './components/Navbar'
import ProtectedRoutes from './components/ProtectedRoutes'


function App() {
  return (
    <>
      <AuthProvider>
        <SupportTicketProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route element={<ProtectedRoutes />}>
                <Route path="/" element={ <UserDashboard /> } />
                <Route path="/admin" element={ <AdminDashboard /> } />
                <Route path="/admin-tickets" element={ <AdminTickets /> } />
                <Route path="/ticket/:id" element={ <TicketPage /> } />
                <Route path='/submit-ticket' element={<SubmitTicket />} />
              </Route>
              <Route path='/login' element={<LoginPage />} />
            </Routes>
          </Router>
        </SupportTicketProvider>
      </AuthProvider>
    </>
  )
}

export default App
