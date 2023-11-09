
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Blue from './components/Blue'
import Red from './components/Red'
import Home from './components/Home'

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/">home</Link>
          <Link to="/blue">blue</Link>
          <Link to="/red">red</Link>
        </div>
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
