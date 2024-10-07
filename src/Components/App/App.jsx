import { useState } from "react";
import NavBar from "../NavBar/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <body></body>
    </>
  );
}

export default App;
