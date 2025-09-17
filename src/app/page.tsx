import styles from "./page.module.css";
import ThemeChanger from "./components/ThemeChanger";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div className={styles.page}>

      <Hero/>

        <ThemeChanger/>

    </div>
  );
}
