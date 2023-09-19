import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import styles from "./Header.module.css";
import logo from "./assets/img/logo.png";

function Header() {
    const { info } = useSelector((state) => state.user);
    const { cartInfo } = useSelector((state) => state.cart);

    function computeCart(){
        let sum = 0;
        for (const tea of cartInfo.product) {
            sum += tea.quantity * tea.priceEach;
        }
        return sum.toFixed(2);
    }
    
    return (
        <header>
            <p>Livraison offerte à partir de 65€ d'achat</p>
            <Link to={"/cart"} className={styles.cart}>
                <FontAwesomeIcon icon={faCartShopping} className={styles.cartIcon}/>
                {cartInfo.product.length ? computeCart() + "€" : "rien"} 
            </Link>
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
