import { useCallback } from "react";

export const useProductHandlers = (
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setSelectedProduct: React.Dispatch<React.SetStateAction<any>>
) => {
  const handleSearch = useCallback(
    (query: string) => {
      setSearchQuery(query);
      setCurrentPage(1);
    },
    [setSearchQuery, setCurrentPage]
  );

  const handleCardClick = useCallback(
    (product: any) => {
      setSelectedProduct(product);
      setIsModalOpen(true);
    },
    [setSelectedProduct, setIsModalOpen]
  );

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }, [setIsModalOpen, setSelectedProduct]);

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );

  return { handleSearch, handleCardClick, handleCloseModal, handlePageChange };
};
