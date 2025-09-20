"use client";

import { Philosopher } from "@/app/types/philosopher";
import { usePhilosophers } from "@/app/hooks/usePhilosophers";
import { useParams } from "next/navigation";

export default function PhilosopherPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;  

  const { data, isLoading, isError } = usePhilosophers();
  const philosophers = data?.data.content;

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao carregar</p>;

  const philosopher: Philosopher | undefined = philosophers?.find(
    (p: Philosopher) => p.id.toString() === id
  );

  if (!philosopher) {
    return <p>Filósofo não encontrado</p>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>{philosopher.name}</h1>
      <img
        src={philosopher.img}
        alt={philosopher.name}
        style={{ maxWidth: "300px", borderRadius: "12px" }}
      />
      <p>
        <strong>Vida:</strong> {philosopher.birthYear} – {philosopher.deathYear}
      </p>
      <p>
        <strong>País:</strong> {philosopher.country}
      </p>
      {philosopher.schoolOfThoughtName.length > 0 && (
        <p>
          <strong>Escola:</strong> {philosopher.schoolOfThoughtName.join(", ")}
        </p>
      )}
      <p style={{ marginTop: "1rem" }}>{philosopher.bio}</p>

      <div style={{ marginTop: "1rem" }}>
        <a href={philosopher.iepLink} target="_blank" rel="noopener noreferrer">
          IEP
        </a>{" "}
        |{" "}
        <a href={philosopher.speLink} target="_blank" rel="noopener noreferrer">
          SEP
        </a>
      </div>
    </div>
  );
}
