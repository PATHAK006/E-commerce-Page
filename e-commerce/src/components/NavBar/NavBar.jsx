import React from "react";
import styles from "./navbar.module.css";
import {Link} from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link to="/">Shop</Link>
        <Link to="/cart"><ShoppingCart size={32} /></Link>
      </div>
    </div>
  );
};

export default NavBar;
