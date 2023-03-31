import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions/productActions';

const AddProduct = ({ addProduct }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    stock: '',
    brand: '',
    image: ''
  });

  const { title, description, price, stock, brand, image } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFileChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });

  const onSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', title);
    data.append('description', description);
    data.append('price', price);
    data.append('stock', stock);
    data.append('brand', brand);
    data.append('image', image);
    addProduct(data);
  };

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={onChange}
            required
            maxLength="200"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={stock}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={brand}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={onFileChange}
            required
            accept="image/*"
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default connect(null, { addProduct })(AddProduct);
