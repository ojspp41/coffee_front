import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';
import { addProduct } from '../../redux/productSlice';

const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(state => state.product);

  const handleAddProduct = async (product) => {
    await dispatch(addProduct(product));
    if (!error) {
      navigate('/admin');
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <ProductForm onSubmit={handleAddProduct} isSubmitting={isFetching} />
    </div>
  );
};

export default AddProduct;
