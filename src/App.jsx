import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
//import Error from './pages/Error'
//import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

/**
 * Creation of pages routes
 * @returns App component
 */
const App = () => {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>

    )
}

export default App