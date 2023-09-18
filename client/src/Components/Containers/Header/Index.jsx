import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import Ribbon from './Ribbon'

function Header() {

	const {info} = useSelector(state => state.user);
	
    return (
        <header>
            <nav>
                <NavLink to={"/"}>accueil</NavLink>
                <NavLink to={"the"}>thés</NavLink>
                <NavLink to={"notre-histoire"}>notre histoire</NavLink>

				{!info.isLogged ?  
					<NavLink
						to={"utilisateur/connexion"}
						title="vers le formulaire de connexion"
					>connexion</NavLink>
					
					:
					<>
					<NavLink
						to={"utilisateur/dashboard"}
						title="aller à votre espace personnel"
						>dashboard</NavLink>
					<NavLink
						to={"utilisateur/deconnexion"}
						title="Se déconnecter"
						>déconnexion</NavLink>
					</>
					
				}
            </nav>
            {/* <Ribbon/> */}
        </header>
    );
}

export default Header;
