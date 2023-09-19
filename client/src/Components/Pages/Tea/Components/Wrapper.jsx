import Card from "./Card";
import styles from "../Tea.module.css";

function Wrapper({ datas }) {
    return (
        <div className={styles.wrapper}>
            <article>
                <img src={"/img/category/" + datas.category.url_image} alt="" />
                <h2>{datas.category.label}</h2>
                <p>{datas.category.description}</p>
            </article>
            {datas.teas.map((tea) => (
                <Card key={tea.id} tea={tea} />
            ))}
        </div>
    );
}

export default Wrapper;
