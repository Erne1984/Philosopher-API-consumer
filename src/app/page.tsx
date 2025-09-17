import Link from "next/link";
import styles from "./page.module.css";
import ThemeChanger from "./components/ThemeChanger";

export default function Home() {
  return (
    <div className={styles.page}>

        <h1>Teste</h1>

        <Link href="/philosophers">Ir para os philosophers</Link>

        <ThemeChanger/>
    </div>
  );
}
