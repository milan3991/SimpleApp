import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import './App.css'
import Navigation from "./components/Navigation/Navigation"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"

function App() {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
