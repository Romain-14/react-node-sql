import { useState, useEffect } from "react";

import Loading from "../../Containers/Loading/Index";
import Card from "../../Containers/Card/Index";

// import styles from "./Home.module.css"

function Home() {
    const [categories, setCategories]     = useState(null);
    const [lastInserted, setLastInserted] = useState(null);
    const [bestSeller, setBestSeller]     = useState(["pas encore de commande"]);
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
            <section className="{styles.promo}">

                <h2>C'est noël, profitez-en !</h2>
            </section>
            {!categories && !lastInserted && !bestSeller && !favorite ? (
                <Loading />
            ) : (
                <>
                    {categories && <Card datas={categories} type="category" heading="Choisissez votre thé"/>}
                    
                    <div>
                        {lastInserted && <Card datas={lastInserted} heading="Notre nouveauté"/>}
                        {bestSeller.length && (<Card type="best-seller" heading="Notre best-seller" />) }
                        {favorite && <Card datas={favorite} heading="Notre coup de coeur" />}
                    </div>
                </>
            )}
            
        </main>
    );
}

export default Home;
