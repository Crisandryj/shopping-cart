import styles from "./Card.module.css";

function Card(props) {
  return (
    <>
      {console.log(props.image)}
      <h3>{props.title}</h3>
      {<img src={props.image} alt="" className={styles.product} />}
      <p>${props.price}</p>
      <button onClick={() => props.onClick(props)}>Add to Cart</button>
    </>
  );
}

export default Card;
