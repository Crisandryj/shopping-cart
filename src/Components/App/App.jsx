import { useState } from "react";
import styles from "./App.module.css";
import NavBar from "../NavBar/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
    </>
  );
}

export default App;
