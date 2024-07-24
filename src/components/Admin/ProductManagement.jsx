// src/components/ProductManagement.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from './AdminProductlist';
import './ProductManagement.css';

const ProductManagement = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/admin/add">Add Product</Link>
          </li>
        </ul>
      </nav>
      <ProductList />
    </div>
  );
};

export default ProductManagement;
