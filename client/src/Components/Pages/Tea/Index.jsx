import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Containers/Loading/Index";

function Tea() {
    const [categories, setCategories] = useState(null);
    const [teas, setTeas]             = useState(null);

    const [teasByCategory, setTeasByCategory] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const teas = await (await fetch("/api/v1/tea/all")).json();
                setTeas(teas.datas);

                const categories = await (
                    await fetch("/api/v1/category/all")
                ).json();
                setCategories(categories.datas);
            } catch (error) {
                throw Error(error);
            }
        }

        getData();
    }, []);

    useEffect(() => {
        const datas = [];
        if (categories) {
            for (const category of categories) {
                datas.push({
                    category: category,
                    teas: teas.filter((t) => t.category_id === category.id),
                });
            }
        }
        setTeasByCategory(datas);
    }, [categories]);

    return (
        <main id="tea">
            
            {!teasByCategory ? (
                <Loading />
            ) : (
                teasByCategory.map((datas) => (
                    <div key={datas.category.id}>
                        <article>
                            <img
                                src={
                                    "/img/category/" + datas.category.url_image
                                }
                                alt=""
                            />
                            <h2>{datas.category.label}</h2>
                            <p>{datas.category.description}</p>
                        </article>
                        {datas.teas.map((tea) => (
                            <div key={tea.id}>
                                <figure>
                                    <figcaption>{tea.label_1}</figcaption>
                                    <img
                                        src={"/img/tea/" + tea.url_image}
                                        alt=""
                                    />
                                </figure>

                                <p>
                                    à partir de <br />{" "}
                                    {tea.price.replace(".", ",")}€
                                </p>
                                <Link to={"detail/" + tea.id}>
                                    voir ce produit
                                </Link>
                            </div>
                        ))}
                    </div>
                ))
            )}
        </main>
    );
}

export default Tea;
