import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.block}></div>
      <h1>Welcome to our store!</h1>
      <p>We have the best prices guranteed!</p>
      <div className={styles.block}></div>
    </>
  );
}

export default Home;
