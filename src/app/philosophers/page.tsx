"use client";

import Link from "next/link";

import { usePhilosophers } from "../hooks/usePhilosphers";
import { Philosopher } from "../types/philosopher";

export default function PhilosophersPage() {
  const { data, isLoading, isError } = usePhilosophers();

  const philosophers = data?.data.content;

  return (
    <div>
      <ul>
        {philosophers?.map((p: Philosopher) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
