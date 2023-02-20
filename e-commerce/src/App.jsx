import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { NavBar } from "./components";
import ShopContextProvider from "./context/shop-context";
import { Cart, Shop } from "./pages";
function App() {
  return (
    <div className={styles.App}>
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
