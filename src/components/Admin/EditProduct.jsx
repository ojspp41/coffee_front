// src/components/EditProduct.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from './ProductForm';

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`/api/products/find/${id}`);
      setProduct(res.data);
    };
    fetchProduct();
  }, [id]);

  const handleUpdateProduct = async (updatedProduct) => {
    await axios.put(`/api/products/${id}`, updatedProduct);
    navigate('/admin');
  };

  return (
    <div>
      <h2>Edit Product</h2>
      {product && <ProductForm product={product} onSubmit={handleUpdateProduct} />}
    </div>
  );
};

export default EditProduct;
