import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../app/store/store";
import { fetchProducts } from "../app/features/products/productsSlice";
import Grid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import Modal from "../components/CardDetailsModal";
import Pagination from "../components/Pagination";
import Sorting from "../components/Sorting";
import { useDebounce } from "../utils/hooks/useDebounce";
import { useFilteredProducts } from "../utils/hooks/useFilterProducts";
import { useProductHandlers } from "../utils/hooks/useProductHandlers";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector((state: RootState) => state.products);

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState<string>("default");
  const productsPerPage = 8;

  const debouncedQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = useFilteredProducts(products, debouncedQuery, sortOption);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const { handleSearch, handleCardClick, handleCloseModal, handlePageChange } = useProductHandlers(
    setSearchQuery,
    setCurrentPage,
    setIsModalOpen,
    setSelectedProduct
  );

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">E-commerce Product Catalog</h1>
        <SearchBar onSearch={handleSearch} />
        <Sorting sortOption={sortOption} onSortChange={handleSortChange} />
        {loading && <div className="text-center py-16">Loading...</div>}
        {error && <div className="text-center py-16 text-red-500">{error}</div>}
        {!loading && !error && filteredProducts.length === 0 && debouncedQuery.trim() !== "" && (
          <div className="text-center py-16 text-gray-500">No items found</div>
        )}
        {!loading && !error && (
          <>
            <Grid products={currentProducts} onCardClick={handleCardClick} />
            <Pagination
              currentPage={currentPage}
              totalProducts={filteredProducts.length}
              productsPerPage={productsPerPage}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} product={selectedProduct} />
    </div>
  );
};

export default Home;
