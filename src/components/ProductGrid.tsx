import { IGridProps } from "../utils/interfaces/IComponent";
import Card from "./Card";

const Grid: React.FC<IGridProps> = ({ products, onCardClick }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.length ? (
        products.map((product) => (
          <Card key={product.id} product={product} onClick={onCardClick} />
        ))
      ) : (
        'No Products Found, Try Search Again'
      )}
    </div>
  );
};

export default Grid;
