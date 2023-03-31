import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import  loadProducts  from '../actions/productsActions';

const Home = ({ products, loadProducts }) => {
  
  useEffect(() => {
    // loadProducts()
  },[loadProducts]);

  return (
    <div className="home">
      <h2>Products</h2>
      <ul className="product-list">
      {products?.map(product => (
  <li key={product.id}>
    <img src={product.image} alt={product.title} />
    <h3>{product.title}</h3>
    <p>{product.description}</p>
    <div className="product-info">
      <span>Price: ${product.price}</span>
      <span>Stock: {product.stock}</span>
    </div>
  </li>
))}

      </ul>
      <button onClick={() => loadProducts()}>Load More</button>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products.items
});

export default connect(mapStateToProps, { loadProducts })(Home);
