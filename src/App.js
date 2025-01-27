import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Cards from "./components/Cards/Cards"
import Courses from "./pages/CoursesDetails/Courses"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/courses/:id" element={<Courses />} />
      </Routes>
    </Router>
  )
}

export default App

