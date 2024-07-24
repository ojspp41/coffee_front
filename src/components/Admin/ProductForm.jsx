import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ product, onSubmit }) => {
  const [form, setForm] = useState({
    title: product ? product.title : '',
    desc: product ? product.desc : '',
    img: product ? product.img : '',
    categories: product ? product.categories.join(', ') : '',
    price: product ? product.price : '',
    inStock: product ? product.inStock : true,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      ...form,
      categories: form.categories.split(',').map(cat => cat.trim()),
    };
    onSubmit(productData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
      <input name="desc" value={form.desc} onChange={handleChange} placeholder="Description" required />
      <input name="img" value={form.img} onChange={handleChange} placeholder="Image URL" required />
      <input name="categories" value={form.categories} onChange={handleChange} placeholder="Categories (comma separated)" />
      <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" required />
      <label>
        In Stock:
        <input name="inStock" type="checkbox" checked={form.inStock} onChange={(e) => setForm({ ...form, inStock: e.target.checked })} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
