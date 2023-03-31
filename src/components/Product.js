import React from 'react';

const Product = ({ product, onEditClick, onDeleteClick }) => {
  return (
    <li key={product.id}>
      <img src={product.image} alt={product.title} />
      <div className="product-details">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <p>Stock: {product.stock}</p>
        <p>Brand: {product.brand}</p>
      </div>
      <div className="product-actions">
        <button onClick={() => onEditClick(product)}>Edit</button>
        <button onClick={() => onDeleteClick(product.id)}>Delete</button>
      </div>
    </li>
  );
};

export default Product;
