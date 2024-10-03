import styles from "./NavBar.module.css";
import shopCart from "../../assets/shopping-cart.svg";

function NavBar() {
  return (
    <>
      <button>
        <img src={shopCart} className="logo-shop" alt="React logo" />
      </button>
      <button> </button>
    </>
  );
}

export default NavBar;
