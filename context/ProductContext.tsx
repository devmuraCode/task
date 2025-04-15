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
  searchProducts: (query: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [allProducts] = useState<Product[]>(productsJson);
  const [products, setProducts] = useState<Product[]>(allProducts.slice(0, 3));
  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => {
    const nextCount = visibleCount + 3;
    setVisibleCount(nextCount);
    setProducts(allProducts.slice(0, nextCount));
  };

  const searchProducts = (query: string) => {
    if (!query) {
      setProducts(allProducts.slice(0, visibleCount));
    } else {
      const lowerQuery = query.toLowerCase();
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(lowerQuery)
      );
      setProducts(filtered);
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, allProducts, showMore, searchProducts }}
    >
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
