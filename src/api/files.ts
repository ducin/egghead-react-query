import { API_URL } from "../env";

export const imageFileURL = (filepath: string) => {
  return `${API_URL}/${filepath}`;
};
