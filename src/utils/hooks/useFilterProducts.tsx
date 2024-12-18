import { useMemo } from "react";
import { IProduct } from "../interfaces/IComponent";

export const useFilteredProducts = (products: IProduct[], query: string, sortOption: string) => {
  return useMemo(() => {
    let filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    if (sortOption === "priceAsc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceDesc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "ratingAsc") {
      filtered.sort((a, b) => a.rating.rate - b.rating.rate);
    } else if (sortOption === "ratingDesc") {
      filtered.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    return filtered;
  }, [products, query, sortOption]);
};
