import styles from "./NavBar.module.css";
import shopCart from "../../assets/shopping-cart.svg";
import home from "../../assets/home.svg";

function NavBar(props) {
  return (
    <>
      <button onClick={props.onClick}>
        <img src={shopCart} className="logo-shop" alt="React logo" />
      </button>
      <button onClick={props.onClick}>
        {" "}
        <img src={home} className="logo-shop" alt="React logo" />
      </button>
    </>
  );
}

export default NavBar;
