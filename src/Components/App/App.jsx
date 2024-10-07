import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch("https://fakestoreapi.com/products")
      ).json();

      // set state when the data received
      setData(data);
    };

    dataFetch();
  }, []);

  console.log(data);

  return (
    <>
      <NavBar></NavBar>
      <div>
        <Card></Card>
      </div>
    </>
  );
}

export default App;
