import styles from "./NavBar.module.css";
import shopCart from "../../assets/shopping-cart.svg";
import home from "../../assets/home.svg";
import bag from "../../assets/shopping-bag.svg";

function NavBar(props) {
  return (
    <div className={styles.container}>
      <button onClick={props.onClickCart}>
        <img src={shopCart} className="logo-shop" alt="React logo" />
      </button>

      <button onClick={props.onClickHome}>
        <img src={home} className="logo-shop" alt="React logo" />
      </button>

      <button onClick={props.onClickShopping}>
        <img src={bag} className="logo-shop" alt="React logo" />
      </button>
    </div>
  );
}

export default NavBar;
