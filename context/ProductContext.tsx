import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import productsJson from "../data/products.json";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductContextType {
  products: Product[];
  allProducts: Product[];
  showMore: () => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(productsJson.slice(0, 3));
  const [allProducts] = useState<Product[]>(productsJson);

  const showMore = () => {
    setProducts((prev) => allProducts.slice(0, prev.length + 3));
  };

  return (
    <ProductContext.Provider value={{ products, allProducts, showMore }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("useProducts must be used within ProductProvider");
  return context;
};
