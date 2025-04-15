import { Product } from "../context/ProductContext";
import styled from "styled-components";
import Link from "next/link";

const Card = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card>
        <Image src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price} $</p>
      </Card>
    </Link>
  );
}
