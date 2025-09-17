import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <FeaturesSection />
    </div>
  );
}
