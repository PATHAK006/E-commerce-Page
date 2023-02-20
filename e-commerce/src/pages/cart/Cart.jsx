import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
import styles from "./cart.module.css";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className={styles.cart}>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className={styles.cartItems}>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className={styles.checkout}>
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
