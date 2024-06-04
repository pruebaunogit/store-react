import { useRef, useState, useEffect } from "react";
import styles from "./Checkout.module.css";

export default function Checkout({ product }) {

    const [quantity, setQuantity] = useState(1);
    const [button, setButton] = useState(false);

    const units = useRef(1)

    useEffect(() => {
        console.log("useEffect");
        let productsOnCart = [];
        if (localStorage.getItem("cart")) {
            productsOnCart = JSON.parse(localStorage.getItem("cart"));
        } else {
            localStorage.setItem("cart", JSON.stringify([]));
        }
        const one = productsOnCart.find((item) => item.id === product.id);
        if (one) {
            setQuantity(one.units);
            setButton(true);
        } else {
            setQuantity(1);
            setButton(false);
        }
    }, [product.id]);


    let productsInStorage = [];
    !localStorage.getItem("cart")
        ? localStorage.setItem("cart", JSON.stringify([]))
        : (productsInStorage = JSON.parse(localStorage.getItem("cart")));

    const manageCart = () => {
        console.log("manageCart");
        let productsOnCart = [];
        if (localStorage.getItem("cart")) {
            productsOnCart = JSON.parse(localStorage.getItem("cart"));
        }
        const one = productsInStorage.find(
            each => each.id === product.id
        );
        if (!one) {
            product.units = quantity;
            productsInStorage.push(product);
            setButton(true);
        } else {
            productsInStorage = productsInStorage.filter(
                each => each.id !== product.id
            );
            setButton(false);
        }
        localStorage.setItem("cart", JSON.stringify(productsInStorage));
    };



    return <div className={styles["product-checkout-block"]}>
        <div className={styles["checkout-container"]}>
            <span className={styles["checkout-total-label"]}>Total:</span>
            <h2 id="price" className={styles["checkout-total-price"]}>
                $ {(product.price * quantity).toLocaleString()}
            </h2>

            <p className={styles["checkout-description"]}>
                Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                50711 haciendo la solicitud en AFIP.
            </p>
            <ul className={styles["checkout-policy-list"]}>
                <li>
                    <span className={styles["policy-icon"]}
                    ><img src="../truck.png" alt="Truck"
                        /></span>
                    <span className={styles["policy-desc"]}
                    >Agrega el producto al carrito para conocer los costos de
                        envío</span
                    >
                </li>
                <li>
                    <span className={styles["policy-icon"]}
                    ><img src="../plane.png" alt="Plane"
                        /></span>
                    <span className={styles["policy-desc"]}
                    >Recibí aproximadamente entre 10 y 15 días hábiles,
                        seleccionando envío normal</span
                    >
                </li>
            </ul>
            <div className={styles["checkout-process"]}>
                <div className={styles["top"]}>
                    <input
                        id="input-quantity"
                        type="number"
                        min="1"
                        value={quantity}
                        // onChange={(event) => setQuantity(Number(event?.target.value))
                        ref={units}
                        onChange={() => setQuantity(Number(units.current.value))}
                    />

                    <button
                        type="button"
                        className={button ? styles["remove-btn"] : styles["cart-btn"]}
                        // onClick={() => setButton(!button)}
                        onClick={manageCart}
                    >
                        {button ? "Remover del carrito" : "Añadir al Carrito"}
                    </button>
                </div>
            </div>
        </div>
    </div>
}