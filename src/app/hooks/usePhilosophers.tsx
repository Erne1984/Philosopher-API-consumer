"use client";
import { useQuery } from "@tanstack/react-query";
import { philosophersService } from "../services/philosophersService";

export function usePhilosophers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: philosophersService.getPhilosophers,
    staleTime: 1000 * 60, 
  });
}
