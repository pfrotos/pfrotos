import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

// 1. IMPORT YOUR LEGAL FILES
import Terms from './components/legal/Terms.jsx' 
import Privacy from './components/legal/Privacy.jsx' 
import Cookies from './components/legal/Cookies.jsx' // <--- ADD THIS IMPORT

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Layout currentPageName="Home">
          <Home />
        </Layout>
      } />
      
      <Route path="/home" element={
        <Layout currentPageName="Home">
          <Home />
        </Layout>
      } />

      {/* 2. ADD THE LEGAL ROUTES */}
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} /> 
      <Route path="/cookies" element={<Cookies />} /> {/* <--- ADD THIS ROUTE */}

    </Routes>
  )
}

export default App
