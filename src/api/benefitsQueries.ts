import { queryOptions } from "@tanstack/react-query";
import { getBenefits } from "./benefitsApi";

export const benefitsQuery = queryOptions({
  queryKey: ["benefits", "list"],
  queryFn: async () => {
    return getBenefits();
  },
});
