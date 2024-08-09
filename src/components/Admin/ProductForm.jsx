import React, { useState } from 'react';
import './ProductForm.css'; // CSS 파일을 import합니다

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
    console.log(JSON.stringify(product, null, 2)); // JSON 형식으로 콘솔에 출력
    onSubmit(product);
  };

  return (
    <div className="form-container">
      <form className="product-form" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="title">제목</label>
        <input className="form-input" type="text" name="title" id="title" placeholder="제목" onChange={handleChange} />

        <label className="form-label" htmlFor="desc">설명</label>
        <textarea className="form-textarea" name="desc" id="desc" placeholder="설명" onChange={handleChange}></textarea>

        <label className="form-label" htmlFor="price">가격</label>
        <input className="form-input" type="number" name="price" id="price" placeholder="가격" onChange={handleChange} />

        <label className="form-label" htmlFor="img">이미지</label>
        <input className="form-input" type="file" name="img" id="img" onChange={handleChange} />

        {product.img && <img className="form-image-preview" src={URL.createObjectURL(product.img)} alt="Preview" />}

        <label className="form-label" htmlFor="category">카테고리</label>
        <input className="form-input" type="text" name="category" id="category" placeholder="카테고리" onChange={handleChange} />

        <label className="form-label form-stock" htmlFor="inStock">
          재고 여부:
          <input className="form-checkbox" type="checkbox" name="inStock" id="inStock" checked={product.inStock} onChange={handleChange} />
        </label>

        <button className="form-button" type="submit" disabled={isSubmitting}>제품 추가</button>
      </form>
    </div>
  );
};

export default ProductForm;
