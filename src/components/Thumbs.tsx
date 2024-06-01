
import styles from "./Thumbs.module.css";

export default function Thumbs({product}) {
    // const { id, title, color, price, image,description } = props
    return (
        <section className={styles["product-images-block"]}>
          <div className={styles["product-images"]}>
            {product.images.map((each) => (
              <img
                className={styles["mini-img"]}
                key={each}
                src={each}
                alt={product.title}
              />
            ))}
          </div>
          <img
            className={styles["big-img"]}
            id="big-img"
            src={product.images[0]}
            alt={product.title}
          />
        </section>
      );
}