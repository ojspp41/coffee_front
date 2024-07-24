// src/components/AddProduct.js
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';

const AddProduct = () => {
  const navigate = useNavigate();

  const handleAddProduct = async (product) => {
    await axios.post('/api/products', product);
    navigate('/admin');
  };

  return (
    <div>
      <h2>Add Product</h2>
      <ProductForm onSubmit={handleAddProduct} />
    </div>
  );
};

export default AddProduct;
