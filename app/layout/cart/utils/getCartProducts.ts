const getCartProducts = (cartLines) => {
  if (!cartLines || !cartLines?.length) return [];

  // Get Products
  const products = cartLines.map((line) => {
    const {id, merchandise, quantity, cost} = line;
    const {product, image, selectedOptions} = merchandise;

    /**
     * Format Selected Options
     */
    let color: string = '';
    let size: string = '';

    selectedOptions.forEach(({name, value}) => {
      // console.log(value);
      if (name.toLowerCase().includes('size')) {
        size = value;
      } else {
        color = value;
      }
    });

    /**
     * Product
     */
    const formattedProduct = {
      id,
      image,
      title: product.title,
      quantity,
      total: cost.totalAmount,
      selectedOptions,
      color,
      size,
    };
    return formattedProduct;
  });

  return products;
};

export default getCartProducts;
