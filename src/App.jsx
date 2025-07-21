import { useState } from 'react'
import './App.css'
import Home from './Pages/home'
import Details from './Pages/details'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import componentsApi from './components/components-api'
import { ThemeToggleProvider } from './components/Theme-toggler/theme-toggler'


function App() {

  return (
   <ThemeToggleProvider> 
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
    </ThemeToggleProvider>
    
  )

}

export default App
