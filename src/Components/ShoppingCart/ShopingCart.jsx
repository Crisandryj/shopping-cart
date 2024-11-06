import CartItem from "../CartItem/CartItem";

function ShoppingCart(props) {
  let total = 0;

  const cartList = props.cart.map((item) => (
    <li className="hello" key={item.id}>
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
