import { Link } from "react-router-dom";
import styles from "../tea.module.css"

function Card({ tea }) {
    return (
        <div className={styles.card}>
            <figure>
                <figcaption>{tea.label_1}</figcaption>
                <img src={"/img/tea/" + tea.url_image} alt="" />
            </figure>

            <p>
                à partir de <br /> <span>{tea.price.replace(".", ",")}€</span>
            </p>
            <Link to={tea.url_tea + "/" + tea.id} className="cta-tea">voir ce produit</Link>
        </div>
    );
}

export default Card;
