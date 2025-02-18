import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Cards from "./components/Cards/Cards"
import Courses from "./pages/CoursesDetails/Courses"
import Register from "./pages/Register/register"
import AdminDashboard from "./components/admin/admindashboard"
import UserCards from "./pages/user/userCards" // ✅ Correct Import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/user" element={<UserCards />} /> {/* ✅ Fixed Component Name */}
        <Route path="/courses/:id" element={<Courses />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/create-workshop" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
