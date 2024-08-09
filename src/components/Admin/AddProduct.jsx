import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';
import { addProduct } from '../../hooks/apiCall';

const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(state => state.product);

  const handleAddProduct = async (product) => {
    const formData = new FormData();
    for (let key in product) {
      formData.append(key, product[key]);
    }
    
    try {
      const resultAction = await dispatch(addProduct(formData));
      if (addProduct.fulfilled.match(resultAction)) {
        navigate('/admin/list');
      } else if (addProduct.rejected.match(resultAction)) {
        // 에러 처리
        console.error('Failed to add product:', resultAction.error);
      }
    } catch (err) {
      console.error('An error occurred:', err);
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
