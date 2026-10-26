import { Link } from "react-router-dom"
import './header.css'
function Header(){
    return(
        <div className="header">
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
    )
}
export default Header