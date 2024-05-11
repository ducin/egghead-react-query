import { API_URL } from "../env";
import { Geo } from "./dto";

export const getGeo = async () => {
  const response = await fetch(`${API_URL}/geo`);
  const data = (await response.json()) as Geo;
  return data;
};
