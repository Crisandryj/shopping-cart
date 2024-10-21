import { useState } from "react";
import styles from "./App.module.css";
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";
import { useEffect, NavLink } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (!data) {
    return { loading } && <p> loading</p>;
  } else {
    return (
      <div className="main">
        <NavBar />
        <ul>
          {data &&
            data.map(({ id, image, title, price }) => (
              <li key={id}>
                <Card image={image} title={title} price={price}></Card>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;
