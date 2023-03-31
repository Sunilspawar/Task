import axios from 'axios';
import { FETCH_PRODUCTS, ADD_PRODUCT, EDIT_PRODUCT } from './type';


// fetch products
export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('https://dummyjson.com/products');
    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// add product
export const addProduct = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    const res = await axios.post(
      'https://dummyjson.com/products/add',
      formData,
      config
    );
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// edit product
export const editProduct = (productId, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    const res = await axios.put(
      `https://dummyjson.com/products/${productId}`,
      formData,
      config
    );
    dispatch({
      type: EDIT_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// delete product
export const deleteProduct = (productId) => async (dispatch) => {
  try {
    await axios.delete(`https://dummyjson.com/products/${productId}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: productId,
    });
  } catch (error) {
    console.log(error);
  }
};
