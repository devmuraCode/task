import { GetStaticPaths, GetStaticProps } from "next";
import { Product } from "../../context/ProductContext";
import products from "../../data/products.json";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
`;

interface Props {
  product: Product;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((p) => ({ params: { id: p.id.toString() } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = products.find((p) => p.id === Number(params?.id));
  return { props: { product } };
};

export default function ProductDetail({ product }: Props) {
  return (
    <Wrapper>
      <h1>{product.name}</h1>
      <img src={product.image} width="100%" alt={product.name} />
      <h3>{product.price} $</h3>
      <p>{product.description}</p>
    </Wrapper>
  );
}
