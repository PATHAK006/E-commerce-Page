import React, { useContext } from "react";
import styles from "./shop.module.css";
import { ShopContext } from "../../context/shop-context";
const Product = ({ data }) => {
  const { id, productName, price, productImage } = data;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className={styles.product}>
      <img src={productImage} alt="Images" />
      <div className={styles.description}>
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>

      <button className={styles.addToCartBttn} onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
