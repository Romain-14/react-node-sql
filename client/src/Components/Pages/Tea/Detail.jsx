import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Containers/Loading/Index";

import { addToCart } from "../../../store/slices/cart";

function Detail() {
    const { info }     = useSelector((state) => state.user);
    const { cartInfo } = useSelector((state) => state.cart);
    const params   = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const [teas, setTeas] = useState(null);
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        async function getDatas() {
            try {
                const res = await fetch("/api/v1/tea/" + params.url_tea + "/" + params.id );
                if(res.status === 404) {
                    navigate("/not-found");
                }
                if(res.status === 200){
                    const json = await res.json();
                    setTeas(json);
                }
            } catch (error) {
                throw new Error(error);
            }
        }

        getDatas();
    }, []);

    function handleAddToCart() {
        const indexProduct = cartInfo.product.findIndex(
            (product_cart) => product_cart.ref === teas[index].ref
        );
        
        if (indexProduct === -1) {
            const newCart = {
                product: [
                    ...cartInfo.product,
                    { ref: teas[index].ref, quantity: 1, priceEach: parseFloat(teas[index].price) },
                ],
                buyer: info.id,
            };
            localStorage.setItem("cart", JSON.stringify(newCart));
            dispatch(addToCart(newCart));
        } else {
            const newCart = {
                product: [
                    ...cartInfo.product,
                ],
                buyer: info.id,
            };
            newCart.product[indexProduct] = {
                ...newCart.product[indexProduct],
                quantity: cartInfo.product[indexProduct].quantity + 1,
            };
            localStorage.setItem("cart", JSON.stringify(newCart));
            dispatch(addToCart(newCart));
        }
    }

    return (
        <>
            {!teas ? (
                <Loading />
            ) : (
                <div>
                    <h2>{teas[index].label_1}</h2>
                    <p>{teas[index].label_2}</p>
                    <i>Ref: {teas[index].ref}</i>
                    {!teas[index].vote_average && <p>pas encore de note 😒</p>}
                    <img src={"/img/tea/" + teas[index].url_image} alt="" />
                    <form>
                        <select
                            name="packaging"
                            onChange={(e) =>
                                setIndex(parseInt(e.target.value) - 1)
                            }
                        >
                            {teas.map((tea) => (
                                <option
                                    key={tea.packaging_id}
                                    value={tea.packaging_id}
                                >
                                    {tea.package}
                                </option>
                            ))}
                        </select>
                    </form>
                    <p>{teas[index].price}€</p>
                    <button
                        className="cta-tea cta-cart"
                        onClick={() => handleAddToCart()}
                    >
                        ajouter au panier
                    </button>
                    <p>❤️ Ajouter à ma liste d'envie</p>
                    <pre>{teas[index].description}</pre>

                    <p>Profitez d'une remise de 5% sur la pochette de 500g &#40;prix déjà remisé&#41;</p>
                </div>
            )}
        </>
    );
}

export default Detail;
