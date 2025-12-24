import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

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
    </Routes>
  )
}

export default App
