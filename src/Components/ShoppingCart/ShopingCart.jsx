import CartItem from "../CartItem/CartItem";
import { useState } from "react";

function ShoppingCart(props) {
  //store total cost of carts
  let [total, setTotal] = useState(0);

  const cartList = props.cart.map((item) => (
    <li key={item.id}>
      <CartItem image={item.item.image} />
      {(total += item.item.price)}
    </li>
  ));

  if ({ cartList }.cartList.length == 0) {
    return <h2>Cart Empty</h2>;
  }

  return (
    <div>
      <ul>{cartList}</ul>
      <p>Total: ${total}</p>
    </div>
  );
}

export default ShoppingCart;
