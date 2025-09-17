import styles from "./FeaturesSection.module.css";


export default function FeaturesSection() {

    return (
        <section className={styles.container}>

            <h2>Discover Wisdom Through Ages</h2>
            <p>Our Philosophy API provides comprehensive access to philosophical knowledge, from ancient Greece to modern times.</p>

            <div className={styles["container-cards"]}>

            </div>

        </section>
    )
}