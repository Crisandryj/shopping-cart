import CartItem from "../CartItem/CartItem";
import { useState, useEffect } from "react";

function ShoppingCart(props) {
  //store total cost of carts
  let [total, setTotal] = useState(0);
  let [quantity, setQuantity] = useState(0);

  const cartList = props.cart.map((item) => (
    <li key={item.id}>
      <CartItem
        quantity={item.quantity}
        image={item.item.image}
        handlePlusclick={() => {
          setQuantity((item.quantity += 1));
        }}
      />
      <p> {item.item.price}</p>
    </li>
  ));

  useEffect(() => {
    const newTotal = props.cart.reduce(
      (sum, obj) => sum + obj.item.price * obj.quantity,
      0
    );
    setTotal(newTotal);

    return () => {
      setTotal(0);
    };
  }, [quantity]);

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
