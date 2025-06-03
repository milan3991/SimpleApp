import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import './App.css'
import Navigation from "./components/Navigation/Navigation"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Counter from "./pages/Counter/Counter"

function App() {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/state" element={<Counter />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
