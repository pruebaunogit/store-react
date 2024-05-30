

import styles from "./Details.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import products from '../assets/products';

function Details() {

    const { id } = useParams();
    const product = products.find((each) => each.id === id);
    console.log(product);
    if (product) {
        return <>
            <NavBar />
            {/* ETIQUETAS CORRESPONDIENTES */}
            {/* <span className={...}>{product.title</span> */}
            {/* ETIQUETAS CORRESPONDIENTES */}


            {/* //     </> */}
            {/* //  }   */}
            <main>
                <div className={styles["details-container"]} >
                    <div id="details" className={styles["columns-container"]}>
                        <section className={styles["product-images-block"]}>
                            <div className={styles["product-images"]}>
                                <img
                                    className={styles["mini-img"]}
                                    src="../mock1.jpg"
                                    alt="MacBook Pro 13'4"
                                />
                                <img
                                    className={styles["mini-img"]}
                                    src="../mock2.jpg"
                                    alt="MacBook Pro 13'4"
                                />
                            </div>
                            <img
                                className={styles["big-img"]}
                                id="big-img"
                                src="../mock1.jpg"
                                alt="MacBook Pro 13'4"
                            />
                        </section>
                        <div className={styles["product-description-block"]}>
                            <h1 className={styles["product-title"]}>{product.title}</h1>
                            <form className={styles["product-selector"]}>
                                <fieldset className={styles["product-fieldset"]}>
                                    <label className={styles["product-label"]} htmlFor="color">Color</label>
                                    {/* <select
                                        className={styles["product-select"]}
                                        id="color"
                                    >
                                        <option value="Silver">Silver</option>
                                    </select> */}
                                    <select className={styles["product-select"]}
                                        id="color">
                                        {product.colors.map(each => <option value={each}>{each}</option>)}
                                    </select>
                                </fieldset>
                            </form>
                            <div className={styles["product-description"]}>
                                <span className={styles["product-label"]}>Descripción</span>
                                <p>
                                    {product.description}
                                </p>
                            </div>
                        </div>
                        <div className={styles["product-checkout-block"]}>
                            <div className={styles["checkout-container"]}>
                                <span className={styles["checkout-total-label"]}>Total:</span>
                                <h2 id="price" className={styles["checkout-total-price"]}>{product.price}</h2>
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
                                        <input type="number" min="1" value="1" />
                                        <button type="button" className={styles["cart-btn"]}>
                                            Añadir al Carrito
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles["sales-block"]}>
                        <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
                        <div id="product-container" className={styles["product-container"]}>
                            <a className={styles["product-card"]} href="./details.html">
                                <img
                                    className={styles["product-img"]}
                                    src="../kindle2.jpg"
                                    alt="Kindle Paperwhite"
                                />
                                <div className={styles["product-info"]}>
                                    <span className={styles["product-title"]}>Kindle Paperwhite</span>
                                    <span className={styles["product-description"]}>Black</span>
                                    <div className={styles["product-price-block"]}>
                                        <span className={styles["product-price"]}>100000</span>
                                        <span className={styles["product-discount"]}>50% Off</span>
                                    </div>
                                    <div className={styles["product-tax-policy"]}>
                                        Incluye impuesto País y percepción AFIP
                                    </div>
                                </div>
                            </a>
                            <a className={styles["product-card"]} href="./details.html">
                                <img
                                    className={styles["product-img"]}
                                    src="../kindle2.jpg"
                                    alt="Kindle Paperwhite"
                                />
                                <div className={styles["product-info"]}>
                                    <span className={styles["product-title"]}>Kindle Paperwhite</span>
                                    <span className={styles["product-description"]}>Black</span>
                                    <div className={styles["product-price-block"]}>
                                        <span className={styles["product-price"]}>100000</span>
                                        <span className={styles["product-discount"]}>50% Off</span>
                                    </div>
                                    <div className={styles["product-tax-policy"]}>
                                        Incluye impuesto País y percepción AFIP
                                    </div>
                                </div>
                            </a>
                            <a className={styles["product-card"]} href="./details.html">
                                <img
                                    className={styles["product-img"]}
                                    src="../kindle2.jpg"
                                    alt="Kindle Paperwhite"
                                />
                                <div className={styles["product-info"]}>
                                    <span className={styles["product-title"]}>Kindle Paperwhite</span>
                                    <span className={styles["product-description"]}>Black</span>
                                    <div className={styles["product-price-block"]}>
                                        <span className={styles["product-price"]}>100000</span>
                                        <span className={styles["product-discount"]}>50% Off</span>
                                    </div>
                                    <div className={styles["product-tax-policy"]}>
                                        Incluye impuesto País y percepción AFIP
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    }
    {/* ); */ }
}
export default Details