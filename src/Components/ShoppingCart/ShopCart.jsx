import CartItem from "../CartItem/CartItem";

function ShoppingCart(props) {
  return props.cart.forEach((item) => (
    <>
      <CartItem image={item.item.image} />
    </>
  ));
}

export default ShoppingCart;
