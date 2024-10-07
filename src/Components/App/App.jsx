import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <body>
        <Card></Card>
      </body>
    </>
  );
}

export default App;
