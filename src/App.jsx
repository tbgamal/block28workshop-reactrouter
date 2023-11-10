import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Blue from './components/Blue'
import Red from './components/Red'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div id="container">
        <Navbar />
        <div id="main-section">
          <Routes>
            <Route path ="/" element= {<Home />} />
            <Route path ="/blue" element= {<Blue />} />
            <Route path ="/red" element= {<Red />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
