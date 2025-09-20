"use client";

import PhilosopherCard from "../components/PhilosopherCard/PhilosopherCard";
import { usePhilosophers } from "../hooks/usePhilosophers";
import { Philosopher } from "../types/philosopher";

export default function PhilosophersPage() {
  const { data, isLoading, isError } = usePhilosophers();

  const philosophers = data?.data.content;

  console.log(philosophers);

  if (isLoading) return <p>Carregando</p>;
  if (isError) return <p>Moiu chefe</p>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem",
        maxWidth: "var(--max-width)",
        margin: "0 auto",
        padding: "1rem",
      }}
    >
      {philosophers?.map((p: Philosopher) => (
        <PhilosopherCard key={p.id} philosopher={p} />
      ))}
    </div>
  );
}
