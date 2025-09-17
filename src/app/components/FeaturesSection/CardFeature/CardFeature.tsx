import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "./CardFeature.module.css";

type CardFeatureProps = {
  icon: IconDefinition;
  title: string;
  content: string;
};

export default function CardFeature({ icon, title, content }: CardFeatureProps) {
  return (
    <div className={styles.container}>
      <div className={styles["icon-container"]}>
        <FontAwesomeIcon className={styles.icon} icon={icon} />
      </div>

      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}