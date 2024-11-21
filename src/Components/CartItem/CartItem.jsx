import styles from "./CartItem.module.css";
import { useState } from "react";

function CartItem(props) {
  return (
    <div className={styles.item}>
      <img className={styles.product} src={props.image} alt="" />
      <div>
        <p>QTY: {props.quantity}</p>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}

export default CartItem;
