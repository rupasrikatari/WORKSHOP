import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Cards from "./components/Cards/Cards"
import Courses from "./pages/CoursesDetails/Courses"
import Register from "./pages/Register/register"
import AdminDashboard from "./components/admin/admindashboard" // Import the AdminDashboard component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cards" element={<Cards />} />
        <Route path="/courses/:id" element={<Courses />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} /> {/* New route for AdminDashboard */}
        <Route path="/admin/create-workshop" element={<Register />} /> {/* Route for creating a workshop */}
      </Routes>
    </Router>
  )
}

export default App

