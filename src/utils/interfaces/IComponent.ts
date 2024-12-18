export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ICardProps {
  product: IProduct;
  onClick: (product: any) => void;
}

export interface IGridProps {
  products: IProduct[];
  onCardClick: (product: any) => void;
}

export interface IProductsState {
  products: IProduct[];
  loading: boolean;
  error: string | null;
}

export interface ISearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: IProduct | null;
}

export interface IPaginationProps {
  currentPage: number;
  totalProducts: number;
  productsPerPage: number;
  onPageChange: (page: number) => void;
}
