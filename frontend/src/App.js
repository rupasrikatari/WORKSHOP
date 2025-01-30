import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Cards from "./components/Cards/Cards"
import Courses from "./pages/CoursesDetails/Courses"
import Register from "./pages/Register/register" // Import the Register component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/courses/:id" element={<Courses />} />
        <Route path="/register" element={<Register />} /> {/* New route for Register page */}
      </Routes>
    </Router>
  )
}

export default App

