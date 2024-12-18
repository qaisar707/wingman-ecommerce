export const fetchProductsApi = async () => {
  const BASE_URL = "https://fakestoreapi.com/products";
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("No Such products");
    }
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }

    return data;
  } catch (error: any) {
    throw new Error(
      error.message || "An error occurred while fetching products"
    );
  }
};
