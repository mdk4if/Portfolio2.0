import "./Navbar.css";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul className="NavParent">
            <li className="NavChild"><Link to="/">Home</Link></li>
            <li className="NavChild"><Link to="/projects">Projects</Link></li>
            <li className="NavChild"><Link to="about">About</Link></li>
            <li className="NavChild"><Link to="links">Links</Link></li>
            <li className="NavChild"><Link to="contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar