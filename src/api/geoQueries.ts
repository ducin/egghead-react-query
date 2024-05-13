import { useQuery } from "@tanstack/react-query";
import { getGeo } from "./geoApi";

export const useGeoQuery = () => {
  return useQuery({
    queryKey: ["geo"],
    queryFn: getGeo,
  });
};
