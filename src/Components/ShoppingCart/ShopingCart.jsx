import CartItem from "../CartItem/CartItem";

function ShoppingCart(props) {
  let total = 0;
  const cartList = props.cart.map((item, id) => (
    <>
      <CartItem image={item.item.image} key={id}></CartItem>
      {(total += item.price)}
    </>
  ));

  return (
    <div>
      <ul>{cartList}</ul>
      <p>Total: {total}</p>
    </div>
  );
}

export default ShoppingCart;
