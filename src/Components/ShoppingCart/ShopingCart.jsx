import CartItem from "../CartItem/CartItem";

function ShoppingCart(props) {
  const cartList = props.cart.map((item) => (
    <CartItem image={item.item.image}></CartItem>
  ));
  return (
    <div>
      <ul>{cartList}</ul>
    </div>
  );
}

export default ShoppingCart;
