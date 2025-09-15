import './App.css'
import Login from './pages/Login.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Verify from './pages/Verify.jsx'
import Chats from './pages/Chats.jsx'
function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/Register' element={<Register />}/>
          <Route path='/Verify' element={<Verify />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/Chats' element={<Chats />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
