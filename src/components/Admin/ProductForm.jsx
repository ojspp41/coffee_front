import React, { useState } from 'react';
import './ProductForm.css';

const categoriesList = [
  "중고커피자판기",
  "커피자판기",
  "커피원두",
  "종이컵",
  "물수건",
  "일회용용기"
];

const ProductForm = ({ product, onSubmit, isSubmitting }) => {
  const [form, setForm] = useState({
    title: product ? product.title : '',
    desc: product ? product.desc : '',
    img: product ? product.img : '',
    categories: product ? product.categories[0] : '',
    price: product ? product.price : '',
    inStock: product ? product.inStock : true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCategoryChange = (e) => {
    setForm({ ...form, categories: e.target.value });
  };

  const handleStockChange = (e) => {
    setForm({ ...form, inStock: e.target.value === 'inStock' });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNaN(form.price) || form.price <= 0) {
      alert('Please enter a valid price');
      return;
    }
    const productData = {
      ...form,
      categories: [form.categories],
    };
    onSubmit(productData);
  };

  return (
    <div className="form-container">
      <form className="product-form" onSubmit={handleSubmit}>
        <label className="form-label">
          Title:
          <input className="form-input" name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
        </label>
        <label className="form-label">
          Description:
          <textarea className="form-textarea" name="desc" value={form.desc} onChange={handleChange} placeholder="Description" required />
        </label>
        <label className="form-label">
          Image URL:
          <input className="form-input" name="img" value={form.img} onChange={handleChange} placeholder="Image URL" required />
        </label>
        <label className="form-label">
          Upload Image:
          <input className="form-input" name="imageFile" type="file" onChange={handleImageChange} />
        </label>
        {form.img && <img src={form.img} alt="Product" className="form-image-preview" />}
        <div className="form-box">
          <label className="form-label">Categories:</label>
          <div className="form-categories">
            {categoriesList.map(category => (
              <label key={category} className="form-radio-label">
                <input
                  type="radio"
                  className="form-radio"
                  name="categories"
                  value={category}
                  checked={form.categories === category}
                  onChange={handleCategoryChange}
                />
                {category}
              </label>
            ))}
          </div>
        </div>
        <label className="form-label">
          Price:
          <input className="form-input" name="price" type="text" value={form.price} onChange={handleChange} placeholder="Price" required />
        </label>
        <div className="form-box">
          <label className="form-label">재고여부:</label>
          <div className="form-stock">
            <label className="form-radio-label">
              <input
                type="radio"
                className="form-radio"
                name="inStock"
                value="inStock"
                checked={form.inStock === true}
                onChange={handleStockChange}
              />
              재고 있음
            </label>
            <label className="form-radio-label">
              <input
                type="radio"
                className="form-radio"
                name="inStock"
                value="outOfStock"
                checked={form.inStock === false}
                onChange={handleStockChange}
              />
              품절
            </label>
          </div>
        </div>
        <button className="form-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
