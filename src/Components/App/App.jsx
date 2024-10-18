import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const products = await (
        await fetch("https://fakestoreapi.com/products")
      ).json();

      // set state when the data received
      setData(products);
    };

    dataFetch();
  }, []);

  if (data) {
    data.map((product) => {
      return (
        <>
          <NavBar></NavBar>
          <img src={product.image} alt="" />
        </>
      );
    });
  } else {
    return (
      <>
        <NavBar></NavBar>
        <p>Loading...</p>
      </>
    );
  }
}

export default App;
