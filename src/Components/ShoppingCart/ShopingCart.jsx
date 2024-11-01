import CartItem from "../CartItem/CartItem";

function ShoppingCart(props) {
  let total = 0;

  const cartList = props.cart.map((item) => (
    <ul>
      <CartItem image={item.item.image} key={item.item.id} />
      {(total += item.item.price)}
    </ul>
  ));

  {
    console.log({ cartList }.cartList.length);
  }
  if ({ cartList }.cartList.length == 0) {
    return <p>Cart Empty</p>;
  }

  return (
    <div>
      {cartList}
      <p>Total: ${total}</p>
    </div>
  );
}

export default ShoppingCart;
