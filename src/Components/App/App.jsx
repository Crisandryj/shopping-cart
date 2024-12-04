import { useState } from "react";
import styles from "./App.module.css";
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";
import { useEffect, NavLink } from "react";
import ShoppingCart from "../ShoppingCart/ShopingCart";
import Home from "../Home/home";
import Shopping from "../Shopping/Shopping";
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);

  const toggleShopping = () => {
    setPage("shopping");
  };

  const toggleCart = () => {
    setPage("cart");
  };

  const toggleHome = () => {
    setPage("home");
  };

  const addToCart = (item) => {
    if (cart.some((cart) => cart.item.title == item.title)) {
      let currentItem = cart.find((cart) => cart.item.title === item.title);
      currentItem.quantity += 1;
    } else {
      cart.push({
        id: crypto.randomUUID(),
        item: item,
        quantity: 1,
      });
    }
  };

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
        setData(postsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForPosts();
  }, []);

  if (loading) {
    return <p> loading</p>;
  } else {
    if (page == "shopping") {
      return (
        <>
          <NavBar
            onClickHome={toggleHome}
            onClickShopping={toggleShopping}
            onClickCart={toggleCart}
          />
          <Shopping showCart={toggleCart} data={data} addToCart={addToCart} />
        </>
      );
    } else if (page == "cart") {
      return (
        <div>
          <NavBar
            onClickHome={toggleHome}
            onClickShopping={toggleShopping}
            onClickCart={toggleCart}
          />
          <ShoppingCart cart={cart} />
        </div>
      );
    } else if (page == "home") {
      return (
        <div>
          <NavBar
            onClickHome={toggleHome}
            onClickShopping={toggleShopping}
            onClickCart={toggleCart}
            data={data}
            addToCart={addToCart}
          />
          <Home />
        </div>
      );
    }
  }
}

export default App;
