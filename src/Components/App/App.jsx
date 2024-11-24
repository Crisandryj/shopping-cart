import { useState } from "react";
import styles from "./App.module.css";
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";
import { useEffect, NavLink } from "react";
import ShoppingCart from "../ShoppingCart/ShopingCart";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  // show main page or cart
  const toggleShowCart = () => {
    if (showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
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

  const handlePlusClick = (item) => {
    item[quantity] += 1;
  };

  const handleMinusClick = (item) => {
    item[quantity] -= 1;
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
    if (showCart == false) {
      return (
        <div>
          <NavBar onClick={toggleShowCart} />
          <ul>
            {data &&
              data.map(({ id, image, title, price }) => (
                <li key={id}>
                  <Card
                    key={id}
                    image={image}
                    title={title}
                    price={price}
                    onClick={addToCart}
                  ></Card>
                </li>
              ))}
          </ul>
        </div>
      );
    } else {
      return (
        <>
          <NavBar onClick={toggleShowCart} />
          <ShoppingCart cart={cart} />
        </>
      );
    }
  }
}

export default App;
