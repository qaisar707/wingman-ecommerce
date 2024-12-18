
import { useMemo } from "react";

export const useFilteredProducts = (products: any[], debouncedQuery: string) => {
  return useMemo(() => {
    return products?.filter((product) => product?.title.toLowerCase().includes(debouncedQuery.toLowerCase()));
  }, [debouncedQuery, products]);
};
