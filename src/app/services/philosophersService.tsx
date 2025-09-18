import api from "../libs/axios";
import { PhilosophersApiResponse } from "../types/philosopher";

export const philosophersService = {
  async getPhilosophers() {
    const { data } = await api.get<PhilosophersApiResponse>("/philosophers");
    return data;
  },

  async getPhilosopherById(id: string) {
    const { data } = await api.get(`/philosophers/${id}`);
    return data;
  },
};