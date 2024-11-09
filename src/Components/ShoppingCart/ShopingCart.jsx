import CartItem from "../CartItem/CartItem";
import { useState } from "react";

function ShoppingCart(props) {
  //stoe total cost of cart
  let [total, setTotal] = useState(0);

  const cartList = props.cart.map((item) => (
    <li className="hello" key={item.id}>
      <CartItem image={item.item.image} />
      {setTotal((total += item.price))}
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
