import { } from './Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    

    <header >
       <div>
        <img src="imagensagencia/logoagencia.png" />
      </div>
     
      <nav>
     
        <Link to="/">Home</Link>
        <Link to="/Destinos">Destinos</Link>
        <Link to="/Promocoes">Promoções</Link>
        <Link to="/Contatos">Contatos</Link>
      </nav>
    </header>
  )
}