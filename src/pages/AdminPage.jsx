// src/pages/AdminPage.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductManagement from '../components/Admin/ProductManagement';
import AddProduct from '../components/Admin/AddProduct';
import EditProduct from '../components/Admin/EditProduct';
import './AdminPage.css';

const AdminPage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/admin/list">Product List</Link>
          </li>
          <li>
            <Link to="/admin/add">Add Product</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="list" element={<ProductManagement />} />
        <Route path="add" element={<AddProduct />} />
        <Route path="edit/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
};

export default AdminPage;
