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

export default function ProductsPage() {
  const { products, showMore } = useProducts();

  return (
    <>
      <h1>Каталог товаров</h1>
      <Grid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Button onClick={showMore}>Показать ещё</Button>
    </>
  );
}
