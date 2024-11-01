import styles from "./CartItem.module.css";

function CartItem(props) {
  return (
    <div className={styles.item}>
      <img className={styles.product} src={props.image} alt="" />
      <div>
        <p>QTY</p>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}

export default CartItem;
