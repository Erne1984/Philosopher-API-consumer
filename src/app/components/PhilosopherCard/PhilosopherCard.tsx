"use client";

import Link from "next/link";
import { Philosopher } from "@/app/types/philosopher";
import Image from "next/image";

import styles from "./PhilosopherCard.module.css";

type PhilosopherCardProps = {
  philosopher: Philosopher;
};

export default function PhilosopherCard({ philosopher }: PhilosopherCardProps) {
  return (
    <Link
      href={`/philosophers/${philosopher.id}`}
      className={styles["philosopher-card"]}
    >
      <div className={styles["card"]}>
        <div  className={styles["card-img-box"]}>
          <Image
            src={philosopher.img}
            alt={philosopher.name}
            fill
            className={styles["card-img"]}
          />
        </div>

        <div className={styles["card-content"]}>
          <h3 className={styles["card-title"]}>{philosopher.name}</h3>
          <p className={styles["card-subtitle"]}>
            {philosopher.birthYear} – {philosopher.deathYear}
          </p>
          <p className={styles["card-bio"]}>{philosopher.bio}</p>
          <p className={styles["card-meta"]}>
            <span>{philosopher.country}</span>
            {philosopher.schoolOfThoughtName.length > 0 && (
              <span> · {philosopher.schoolOfThoughtName.join(", ")}</span>
            )}
          </p>
        </div>
      </div>
    </Link>
  );
}
