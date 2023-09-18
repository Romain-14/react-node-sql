import { useState, useEffect } from "react";

import Loading from "../../Containers/Loading/Index";
import Card from "../../Containers/Card/Index";

function Home() {
    const [categories, setCategories]     = useState(null);
    const [lastInserted, setLastInserted] = useState(null);
    const [bestSeller, setBestSeller]     = useState("");
    const [favorite, setFavorite]         = useState(null);

    // récupère et mets à jour une state pour les catégories
    useEffect(() => {
        async function getData() {
            try {
                const result = await (
                    await fetch("/api/v1/category/all")
                ).json();
                setCategories(result.datas);
            } catch (error) {
                throw Error(error);
            }
        }

        getData();
    }, []);

    // récupère et mets à jour une state pour le dernier thé insérer en BDD
    useEffect(() => {
        async function getData() {
            try {
                const result = await (
                    await fetch("/api/v1/tea/lastInserted")
                    ).json();
                    setLastInserted(result.datas);
                } catch (error) {
                    throw Error(error);
                }
            }
            
            getData();
        }, []);
        
    // récupère et mets à jour une state pour le thé meilleur vente
    useEffect(() => {
        async function getData() {
            try {
                const result = await (
                    await fetch("/api/v1/tea/bestSeller")
                ).json();
                setBestSeller(result.datas);
            } catch (error) {
                throw Error(error);
            }
        }

        getData();
    }, []);

    // récupère et mets à jour une state pour le thé coup de coeur
    useEffect(() => {
        async function getData() {
            try {
                const result = await (
                    await fetch("/api/v1/tea/favorite")
                ).json();
                setFavorite(result.datas);
            } catch (error) {
                throw Error(error);
            }
        }

        getData();
    }, []);
    

    return (
        <main id="home">
            <h2>C'est noël, profitez-en !</h2>
            {!categories && !lastInserted && !bestSeller && !favorite ? (
                <Loading />
            ) : (
                <>
                    {categories && <Card datas={categories} type="category"/>}
                    
                    <div>
                        {lastInserted && <Card datas={lastInserted} heading="Notre nouveauté"/>}
                        {bestSeller.length && (<><h2>Notre best-seller</h2><p>{bestSeller} </p></>) }
                        {favorite && <Card datas={favorite} heading="Notre coup de coeur" />}
                    </div>
                </>
            )}
            
        </main>
    );
}

export default Home;
