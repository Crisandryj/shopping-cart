import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";

function Shopping(props) {
  return (
    <div>
      <ul>
        {props.data &&
          props.data.map(({ id, image, title, price }) => (
            <li key={id}>
              <Card
                key={id}
                image={image}
                title={title}
                price={price}
                onClick={props.addToCart}
              ></Card>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default Shopping;
