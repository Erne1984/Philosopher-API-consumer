import CardFeature from "./CardFeature/CardFeature";
import styles from "./FeaturesSection.module.css";
import {
  faDatabase,
  faGlobe,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

export default function FeaturesSection() {
  return (
    <section className={styles.container}>
      <h2>Discover Wisdom Through Ages</h2>
      <p className={styles.subtitle}>
        Our Philosophy API provides comprehensive access to philosophical
        knowledge, from ancient Greece to modern times.
      </p>

      <div className={styles["container-cards"]}>
        <CardFeature
          icon={faDatabase}
          title="Rich Database"
          content="Comprehensive collection of philosophers, their works, schools of thought, and philosophical themes."
        />

        <CardFeature
          icon={faGlobe}
          title="Global Reach"
          content="Explore philosophical traditions from around the world, spanning East and West, ancient and modern."
        />

        <CardFeature
          icon={faBookOpen}
          title="Educational Tool"
          content="Perfect for students, teachers, and enthusiasts seeking structured, reliable philosophical information."
        />
      </div>
    </section>
  );
}