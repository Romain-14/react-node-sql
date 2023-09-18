import { Link } from "react-router-dom";

function Card({ datas, type, heading }) {

    if (type === "category") {
        return (
            <div>
                {datas.map((category) => (
                    <figure key={category.id}>
                        <img
                            src={"/img/category/" + category.url_image}
                            alt=""
                        />
                        <figcaption>{category.label}</figcaption>
                    </figure>
                ))}
            </div>
        );
    } else {
        return (
            <>
                {datas.map((tea) => (
                    <article key={tea.ref}>
                        <h2>{heading}</h2>
                        <figure>
                            <img src={"/img/tea/" + tea.url_image} alt="" />
                            <figcaption>{tea.label_1}</figcaption>
                        </figure>
                        <p>{tea.description}</p>
                        <p>
                            à partir de <br /> {tea.price.replace(".", ",")}€
                        </p>
                        <Link to={"detail/" + tea.id}>voir ce produit</Link>
                    </article>
                ))}
            </>
        );
    }
}

export default Card;
