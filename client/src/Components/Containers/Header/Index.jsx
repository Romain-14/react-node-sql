import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <header>
        <nav>
            <NavLink to={"/"}>accueil</NavLink>
            <NavLink to={"the"}>thés</NavLink>
            <NavLink to={"notre-histoire"}>notre histoire</NavLink>
            <NavLink to={"connexion"}>connexion</NavLink>
        </nav>
    </header>
  )
}

export default Header