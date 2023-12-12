const formatProduct = (product: any) => {
  if (!product) return null;
  const {title, tags, description, descriptionHtml, options, images, variants} =
    product;

  /** Get Selected Variant */
  const selectedVariant = product.selectedVariant ?? variants?.nodes[0];
  const availableForSale = selectedVariant?.availableForSale;

  /**
   * Format Options
   */
  let formatedOptions = {
    sizes: {name: '', values: []},
    colors: {name: '', values: []},
  };

  options?.forEach((option) => {
    const name = option.name;
    const values = option.values;

    if (name.toLowerCase().includes('size')) {
      formatedOptions.sizes = {name, values};
    } else if (name.toLowerCase().includes('color')) {
      formatedOptions.colors = {name, values};
    }
  });

  /**
   * Format Selected Options
   */
  const selectedOptions = selectedVariant?.selectedOptions;
  let selectedColor = '';
  let selectedSize = '';

  selectedOptions?.forEach(({name, value}) => {
    if (name.toLowerCase().includes('size')) {
      selectedSize = value;
    } else {
      selectedColor = value;
    }
  });

  /** Formatted Product */
  const formattedProduct = {
    id: selectedVariant?.id,
    handle: product.handle,
    title,
    description,
    descriptionHtml: descriptionHtml || null,
    tags,
    images: images.nodes,
    price: selectedVariant?.price,
    options: formatedOptions,
    // sizes: formatedOptions.sizes,
    // colors: formatedOptions.colors,
    selectedOptions: {
      color: selectedColor,
      size: selectedSize,
    },
    availableForSale,
  };

  return formattedProduct;
};

export default formatProduct;
