

import styles from "./Details.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import products from '../assets/products';
import Thumbs from "../components/Thumbs";
import Description from "../components/Description";
import Checkout from "../components/Checkout";

function Details() {

    const { id } = useParams();
    const product = products.find((each) => each.id === id);
    debugger;
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
 
                        <Thumbs product={product} />
                        <Description product={product} />
                        <Checkout product={product} />


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
    return <> NO HAY PLATA!!</>
}
export default Details