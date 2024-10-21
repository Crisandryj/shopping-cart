import styles from "./Card.module.css";

function Card(props) {
  return (
    <>
      <h3>{props.title}</h3>
      {<img src={props.image} alt="" className={styles.product} />}
      <p>${props.price}</p>
    </>
  );
}

export default Card;
