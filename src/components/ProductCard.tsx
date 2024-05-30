import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

export default function ProductCard(parametros) {
   
  const { id, title, color, price, image } = parametros
  return (
    <Link to={"./details/"+id} className={styles["product-card"]}> 
      <img
        className={styles["product-img"]}
        src={ image }
        alt={ id }
      />
      <div className={styles["product-info"]}>
        <span className={styles["product-title"]}>{ title }</span>
        <span className={styles["product-description"]}>{ color }</span>
        <div className={styles["product-price-block"]}>
          <span className={styles["product-price"]}>{ price }</span>
          <span className={styles["product-discount"]}>50% Off</span>
        </div>
        <div className={styles["product-tax-policy"]}>
          Incluye impuesto País y percepción AFIP
        </div>
      </div> 
    </Link>
  );
}
 