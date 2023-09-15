import { useState, useEffect } from "react";
import styles from "./home.module.css";


function Home() {
    const [datas, setDatas] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const result = await (
                    await fetch("/api/v1/tea/all")
                ).json();
                    console.log(result.datas)
                setDatas(result.datas);
            } catch (error) {
                console.log(error);
            }
        }

        getData();
    }, []);

    return (
        <main id="home">
            {!datas ? (
                <p>LOADING ...</p>
            ) : (
                datas.map((data) => (
                    <article key={data.id} className={styles.card}>
                        <h2>{data.label_1}</h2>
                        <p>{data.description}</p>
                    </article>
                ))
            )}
        </main>
    );
}

export default Home;
