import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./assets/img/logo.png";

function Header() {
    const { info } = useSelector((state) => state.user);
    const { cartInfo } = useSelector((state) => state.cart);
    console.log(cartInfo)
    return (
        <header>
            <div>
                {
                    // ici le panier calculer PLUS accès route
                    cartInfo.product.map(p => (
                        <span key={p.ref}>{p.ref} |</span>
                    ))
                }
            </div>
            <p>Livraison offerte à partir de 65€ d'achat</p>
            <img src={logo} alt="" width="310" height="90"/>
            <nav>
                <NavLink to={"/"}>accueil</NavLink>
                <NavLink to={"the"}>thés</NavLink>
                <NavLink to={"notre-histoire"}>notre histoire</NavLink>

                {!info.isLogged ? (
                    <NavLink
                        to={"utilisateur/connexion"}
                        title="vers le formulaire de connexion"
                    >
                        connexion
                    </NavLink>
                ) : (
                    <>
                        <NavLink
                            to={"utilisateur/votre-compte"}
                            title="aller à votre espace personnel"
                        >
                            votre compte
                        </NavLink>
                        <NavLink
                            to={"utilisateur/deconnexion"}
                            title="Se déconnecter"
                        >
                            déconnexion
                        </NavLink>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;
