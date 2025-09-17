import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>
          <span className={styles.highlight}>Philosophy</span> Reimagined
        </h1>
        <p>
          Explore the wisdom of ancient and modern philosophers through our
          comprehensive API. Discover the thinkers who shaped human understanding.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primary}>Explore Philosophers</button>
          <button className={styles.secondary}>Browse Collection</button>
        </div>
      </div>
    </section>
  );
}
