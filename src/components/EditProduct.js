import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editProduct } from '../actions/productActions';

const EditProduct = ({ product, editProduct, history }) => {
  const [formData, setFormData] = useState({
    title: product.title,
    description: product.description,
    price: product.price,
    stock: product.stock,
    brand: product.brand,
    image: '',
  });

  const { title, description, price, stock, brand, image } = formData;

  const handleOnChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = { ...formData, id: product.id };
    editProduct(updatedProduct);
    history.push('/');
  };

  return (
    <div className="add-product">
      <h2>Edit Product</h2>
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleOnChange}
            required
            maxLength="200"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={description}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            name="stock"
            value={stock}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            name="brand"
            value={brand}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" name="image" onChange={handleOnChange} />
        </div>
        <button type="submit">Edit Product</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    product: state.products.find((product) => product.id === id),
  };
};

export default connect(mapStateToProps, { editProduct })(EditProduct);
