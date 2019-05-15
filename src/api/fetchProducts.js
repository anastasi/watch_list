export const fetchProducts = async () => {
  const response = await fetch(
    `https://dev-api.danielwellington.com/frontend/products`
  );
  const allProducts = await response.json();

  return await Promise.all(
    allProducts.data.map(async item => {
      const productResponse = await fetch(
        `https://dev-api.danielwellington.com/frontend/products/${item.id}`
      );
      const singleProduct = await productResponse.json();

      let product = { id: singleProduct.data.id };

      product = reshape(singleProduct, product);
      return product;
    })
  );
};

const reshape = (singleProduct, product) => {
  singleProduct.data.elements.forEach(item => {
    if (item.name === "name") {
      product.name = item.value;
    }
    if (item.name === "price") {
      product.price = item.value.value;
      product.current = item.value.unitAbbreviation;
    }
    if (item.name === "description") {
      product.description = item.value;
    }
    if (item.name === "size") {
      product.size = item.value;
    }
    if (item.name === "color") {
      product.color = item.value;
    }
    if (item.name === "main_image") {
      product.imageId = item.value.id;
    }
  });
  return product;
};

export default fetchProducts;
