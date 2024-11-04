import styles from "./CartItem.module.css";

function CartItem(props) {
  return (
    <li className={styles.item} key={props.key}>
      <img className={styles.product} src={props.image} alt="" />
      <div>
        <p>QTY</p>
        <button>+</button>
        <button>-</button>
      </div>
    </li>
  );
}

export default CartItem;
