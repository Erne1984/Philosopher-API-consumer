import styles from "./Header.module.css";
import NavLink from "./NavLink/NavLink";

export default function Header() {
  return (
    <header className={styles["container"]}>
      <div className={styles["sub-container"]}>
        <h2 className={styles["logo"]}>Philosophy API</h2>

        <div className={styles["nav-button"]}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/philosophers">Philosophers</NavLink>
        </div>
      </div>
    </header>
  );
}
