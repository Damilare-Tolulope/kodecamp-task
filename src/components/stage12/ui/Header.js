import './styles.css'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id="nav">
      <Link to="/kodecamp-task"><img src={logo} alt={logo} /></Link>
      <ul className='links'>
        <li><Link to="/kodecamp-task">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </header>
  )
}

export default Header