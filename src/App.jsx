import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CommitteeDetail from './pages/CommitteeDetail'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/committee/:name" element={<><CommitteeDetail /><Footer /></>} />
          <Route path="/register" element={<><Register /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
