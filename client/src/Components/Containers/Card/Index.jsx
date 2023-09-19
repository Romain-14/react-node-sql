import { Link } from "react-router-dom";
import styles from "./card.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Card({ datas, type, heading }) {
    if (type === "category") {
        return (
            <div className={`${styles.flex_wrap} ${styles.wrapper}`}>
                <h2>{heading}</h2>
                {datas.map((category) => (
                    <figure key={category.id}>
                        <LazyLoadImage src={"/img/category/" + category.url_image}
                            alt="soon"
                            width={150}
                            height={140}
                            className={styles.category_img}
                            />
                        {/* <img
                            src={"/img/category/" + category.url_image}
                            alt=""
                            width="150"
                            height="140"
                            className={styles.category_img}
                            loading="lazy"
                        /> */}
                        <figcaption>{category.label}</figcaption>
                    </figure>
                ))}
            </div>
        );
    } else if (type === "best-seller") {
        return (
            <article className={`${styles.flex_wrap} ${styles.wrapper}`}>
                <h2>{heading}</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolorem a placeat, qui laudantium illum dignissimos veniam
                    error pariatur vel quaerat quasi autem. Consectetur
                    doloremque dolor sunt earum magni corporis delectus quia
                    harum commodi ea facere accusantium mollitia aut voluptatum
                    rerum, dolorem impedit eum recusandae veniam? Explicabo eum
                    deleniti esse dolorem!
                </p>
            </article>
        );
    } else {
        return (
            <>
                {datas.map((tea) => (
                    <article
                        key={tea.ref}
                        className={`${styles.flex_wrap} ${styles.wrapper}`}
                    >
                        <h2>{heading}</h2>
                        <figure>
                        <LazyLoadImage src={"/img/tea/" + tea.url_image}
                                alt="SOON"
                                width={400}
                                height={400}
                                className={styles.tea_img}/>
                            {/* <img
                                src={"/img/tea/" + tea.url_image}
                                alt=""
                                width="450"
                                height="450"
                                className={styles.tea_img}
                                loading="lazy"
                            /> */}
                            <figcaption>{tea.label_1}</figcaption>
                        </figure>
                        <p>{tea.description}</p>
                        <p className={styles.price}>
                            à partir de <br /> {tea.price.replace(".", ",")}€
                        </p>
                        <Link
                            to={"/the/"+ tea.url_tea + "/" + tea.id}
                            className="cta-tea"
                        >
                            voir ce produit
                        </Link>
                    </article>
                ))}
            </>
        );
    }
}

export default Card;
