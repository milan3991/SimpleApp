import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import './App.css'
import Navigation from "./components/Navigation/Navigation"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import State from "./pages/Counter/State"
import Users from "./pages/Users/Users"

function App() {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/state" element={<State />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
