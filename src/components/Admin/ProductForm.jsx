import React, { useState } from 'react';

const ProductForm = ({ onSubmit, isSubmitting }) => {
  const [product, setProduct] = useState({
    title: '',
    desc: '',
    price: '',
    img: null,
    category: '',
    inStock: true, // 기본값을 true로 설정
  });

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    if (name === 'img') {
      setProduct({ ...product, img: files[0] });
    } else if (type === 'checkbox') {
      setProduct({ ...product, [name]: checked });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="제목" onChange={handleChange} />
      <textarea name="desc" placeholder="설명" onChange={handleChange}></textarea>
      <input type="number" name="price" placeholder="가격" onChange={handleChange} />
      <input type="file" name="img" onChange={handleChange} />
      <input type="text" name="category" placeholder="카테고리" onChange={handleChange} />
      <label>
        재고 여부:
        <input type="checkbox" name="inStock" checked={product.inStock} onChange={handleChange} />
      </label>
      <button type="submit" disabled={isSubmitting}>제품 추가</button>
    </form>
  );
};

export default ProductForm;
