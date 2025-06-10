import './styles/App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// CONTEXT
import { SupportTicketProvider } from './context/TicketContext'
import { AuthProvider } from './context/AuthContext'
// PAGES
import Home from './pages/Home'
import AdminDashboard from './pages/AdminDashboard'
import TicketPage from './pages/TicketPage'
import LoginPage from './pages/LoginPage'
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
                <Route path="/" element={ <Home /> } />
                <Route path="/admin" element={ <AdminDashboard /> } />
                <Route path="/ticket/:id" element={ <TicketPage /> } />
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
