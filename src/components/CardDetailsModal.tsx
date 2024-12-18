import React, { useRef } from "react";
import { IModalProps } from "../utils/interfaces/IComponent";
import StarRating from "./Rating";
import useModalClose from "../utils/hooks/useModalClose";

const Modal: React.FC<IModalProps> = ({ isOpen, onClose, product }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useModalClose({ ref: modalRef, onClose });

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close Modal"
        >
          ✖
        </button>
        <div className="flex justify-center mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-h-64 object-contain rounded-md"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
          {product.title}
        </h1>
        <p className="text-gray-700 text-center mb-4">{product.description}</p>
        <p className="text-lg font-bold text-gray-800 text-center mb-4">
          Price: ${product.price}
        </p>
        <div className="flex items-center justify-center mb-4">
          <StarRating rating={product.rating.rate} />
          <span className="text-gray-600 text-sm ml-2">
            ({product.rating.count} reviews)
          </span>
        </div>
        <p className="text-sm text-gray-600 text-center">
          Category: <span className="font-semibold">{product.category}</span>
        </p>
      </div>
    </div>
  );
};

export default Modal;
