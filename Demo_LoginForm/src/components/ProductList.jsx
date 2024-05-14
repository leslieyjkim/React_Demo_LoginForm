import ProductListItem from "./ProductListItem";

const ProductList = (props) => {
//iterating each of elements : mapping
  const mappedProducts = props.products.map((product, index) => {
    return <ProductListItem
      key={index}
      name={product.name}
      description={product.description}
      price={product.price}
      />;
  });

  return (
    <div>
      <h2>Products List</h2>
      { !props.products.length && <h2>No products to display</h2> }
      { mappedProducts }
    </div>
  );

};
//defaultProps object
//each Prodect 'object' => in the Products 'array' => in the ProductList 'object' 
ProductList.defaultProps = {

  products: [
    {
      name: 'Blueberries',
      description: 'Cannot be beat',
      price: 2.75
    },
    {
      name: 'Strawberries',
      description: 'Fantastic with whipped cream',
      price: 4.49
    },
    {
      name: 'Canteloupe',
      description: 'Awesome on a warm day',
      price: 6.89
    },
  ]

};

export default ProductList;