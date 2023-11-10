import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <div id="navbar">
      <Link to="/">home</Link>
      <Link to="/blue">blue</Link>
      <Link to="/red">red</Link>
    </div>
  )
}

export default Navbar