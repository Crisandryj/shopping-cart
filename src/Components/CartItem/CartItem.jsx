import styles from "./CartItem.module.css";

function CartItem(props) {
  return (
    <div className={styles.item}>
      {console.log(props.image)}
      <img className={styles.product} src={props.image} alt="" />
      <button>+</button>
      <button>-</button>
      <p>QTY</p>
      <p>Total</p>
    </div>
  );
}

export default CartItem;
