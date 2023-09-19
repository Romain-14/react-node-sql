import { useState, useEffect } from "react";
import Loading from "../../Containers/Loading/Index";
import Wrapper from "./Components/Wrapper";

function Tea() {
    const [categories, setCategories] = useState(null);
    const [teas, setTeas] = useState(null);

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
                teasByCategory.map((datas) => <Wrapper key={datas.category.id} datas={datas}/>)
            )}
        </main>
    );
}

export default Tea;
