import CartItem from "../CartItem/CartItem";

function ShoppingCart(props) {
  let total = 0;

  const cartList = props.cart.map((item) => (
    <ul>
      <CartItem image={item.item.image} key={item.item.id} />
      {(total += item.item.price)}
    </ul>
  ));

  if ({ cartList }.cartList.length == 0) {
    return <h2>Cart Empty</h2>;
  }

  return (
    <div>
      {cartList}
      <p>Total: ${total}</p>
    </div>
  );
}

export default ShoppingCart;
