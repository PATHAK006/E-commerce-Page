import React, {useContext} from "react";
import styles from "./cart.module.css";
import { ShopContext } from "../../context/shop-context";
const CartItem = ({ data }) => {
  const {id,  productName, price, productImage } = data;
  const { cartItems, addToCart, removeFromCart, updateCountItemCount } = useContext(ShopContext);
  return (
    <div className={styles.cartItem}>
      <img src={productImage} alt="product-Image" />
      <div className={styles.description}>
        <p>
          <b>{productName}</b>
        </p>
        <p>$ {price}</p>
        <div className={styles.countHandler}>
            <button onClick={() => removeFromCart(id)}>-</button>
            <input value={cartItems[id]} onChange = {(e) => updateCountItemCount(Number(e.target.value), id)}/>
            <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
