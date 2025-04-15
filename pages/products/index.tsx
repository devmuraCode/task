import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "../../context/ProductContext";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 20px auto;
  display: block;
  cursor: pointer;
`;

const SearchInput = styled.input`
  display: block;
  margin: 20px auto;
  padding: 10px;
  width: 300px;
  font-size: 16px;
`;

export default function ProductsPage() {
  const { products, showMore, searchProducts } = useProducts();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    searchProducts(value);
  };

  return (
    <>
      <h1>Каталог товаров</h1>
      <SearchInput
        type="text"
        placeholder="Поиск по товарам..."
        value={query}
        onChange={handleSearch}
      />
      <Grid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      {query === "" && products.length >= 3 && (
        <Button onClick={showMore}>Показать ещё</Button>
      )}
    </>
  );
}
