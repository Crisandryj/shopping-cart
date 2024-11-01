import CartItem from "../CartItem/CartItem";

function ShoppingCart(props) {
  let total = 0;
  let nextId = 0;
  const cartList = props.cart.map((item) => (
    <>
      <li key={nextId}>
        <CartItem image={item.item.image}></CartItem>
        {(total += item.item.price)}
        {(nextId += 1)}
        {console.log(item)}
      </li>
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
