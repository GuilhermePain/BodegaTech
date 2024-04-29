import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
  )
}

export default App
