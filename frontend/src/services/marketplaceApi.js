import { mockProducts } from "../data/mockMarketplace";

export async function getProducts() {
  await new Promise((resolve) => {
    setTimeout(resolve, 180);
  });

  return mockProducts;
}

export async function getProduct(id) {
  const products = await getProducts();

  return products.find(
    (product) => product.id === id
  );
}