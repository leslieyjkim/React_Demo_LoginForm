import './ProductListItem.css';

const ProductListItem = (props) => {


    // Props examples:
    //  name: String
    //  price : Number
    //  description : string

  return (
    <div className="product-list-item">
      <div className="product-header">
        <h2>Product: { props.name }</h2>
        <h3 className="product-price">Price: $ { props.price }</h3>
      </div>
      <hr />
      <h3>Description: { props.description }</h3>
    </div>
  );
}
//defaultProps object
ProductListItem.defaultProps = {
  name: 'Chocolate bar',
  price: 7.99,
  description: 'Milk chocolate with the seasalt and caramel'
};

export default ProductListItem;
