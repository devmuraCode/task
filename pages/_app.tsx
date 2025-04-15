import type { AppProps } from "next/app";
import { ProductProvider } from "../context/ProductContext";
import GlobalStyle from "@/styles/global";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ProductProvider>
  );
}
