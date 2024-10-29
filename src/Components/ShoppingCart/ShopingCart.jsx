import CartItem from "../CartItem/CartItem";

function ShoppingCart(props) {
  return props.cart.forEach((item) => (
    <>
      {console.log(item.item.title)}
      <CartItem image={item.item.image} />
      <h1>hi</h1>
    </>
  ));
}

export default ShoppingCart;
