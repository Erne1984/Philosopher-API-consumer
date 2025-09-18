import { ApiResponse } from "./apiResponse";

export interface Philosopher {
  id: number;
  name: string;
  iepLink: string;
  speLink: string;
  img: string;
  birthYear: number;
  deathYear: number;
  bio: string;
  country: string;
  schoolOfThoughtName: string[];
}

export type PhilosophersApiResponse = ApiResponse<Philosopher>;
