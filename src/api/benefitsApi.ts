import { API_URL } from "../env";
import { Benefit } from "./dto";

export const getBenefits = async () => {
  const response = await fetch(`${API_URL}/benefits`);
  const data = (await response.json()) as Benefit[];
  return data;
};

export const getBenefitById = async (id: Benefit["id"]) => {
  const response = await fetch(`${API_URL}/benefits/${id}`);
  const data = (await response.json()) as Benefit;
  return data;
};
