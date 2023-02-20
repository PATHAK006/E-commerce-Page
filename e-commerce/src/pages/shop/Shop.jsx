import React from "react";
import styles from "./shop.module.css";
import Product from "./Product";
import { PRODUCTS } from "../../Products";
const Shop = () => {
  return (
    <div className={styles.shop}>
      <div className={styles.shopTitle}>
        <h1>Pathak's</h1>
      </div>
      <div className={styles.products}>
        {PRODUCTS.map((product) => (
          <Product data = {product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
