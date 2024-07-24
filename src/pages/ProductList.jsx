import './ProductList.css'
import { useState } from 'react';

import Products from '../components/products/products'
import Newletter from '../components/newletter/Newletter'
import Footer from '../components/footer/Footer'
const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className='ProductList'>
      
      <h1 className="fTitle">{selectedCategory ?selectedCategory : '전체 상품' }</h1>
      <div className="filterContainer">
        
        <div className="filter">
          <span className="filterText">Filter</span>
          <select className="filterSelect" onChange={handleCategoryChange} defaultValue="">
            <option value="" className="filterOption" disabled selected>Type</option>
            <option value="중고커피자판기" className="filterOption">중고커피자판기</option>
            <option value="커피자판기" className="filterOption">커피자판기</option>
            <option value="커피원두" className="filterOption">커피원두</option>
            <option value="종이컵" className="filterOption">종이컵</option>
            <option value="물수건" className="filterOption">물수건</option>
            <option value="일회용용기" className="filterOption">일회용용기 </option>
          </select>
        </div>
        <div className="filter">
          <span className="filterText">Sort</span>
          <select className="filterSelect" defaultValue="">
            <option value="" className="filterOption">최신순</option>
            <option value="asc" className="filterOption">가격순(오름)</option>
            <option value="desc" className="filterOption">가격순(내림)</option>
            <option value="best" className="filterOption">Best상품</option>
          </select>
          
        </div>
      </div>
      
      <Products selectedCategory={selectedCategory}></Products>
      <Newletter></Newletter>
      <Footer></Footer>
    </div>
  )

}

export default ProductList;
