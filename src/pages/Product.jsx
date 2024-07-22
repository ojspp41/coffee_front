import React, { useState } from 'react';
import './Product.css'
import Newletter from '../components/newletter/Newletter';
import Footer from '../components/footer/Footer';
const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity > 1 ? quantity - 1 : 1);
    }
  };
  return (
    <div className="productContainer">
      
      <div className="productWrapper">
        <div className="productImgContainer">
          <img src="../images/ontap.jpg" alt="" className="productImg" />
        </div>
        <div className="productInfoContainer">
          <h1 className="productTitle">중고 onTap 자판기</h1>
          <p className="productDesc">내부 수리기사의 수리 완료 간얒ㅂ럅쟙쟙ㅈ럅ㅈ럅쟓쟓쟈ㅜㄹ쟙ㄹㅈㅂ럅ㅈ럊부랴ㅜ쟈룹쟈룹재ㅜ랩줇주래ㅜ래주Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem nostrum architecto odit unde hic quis accusantium iure quos enim, sunt, ipsam in temporibus numquam asperiores, eius nihil incidunt pariatur. </p>
          <span className="productPrice">350,000원</span>
          <div className="productFilterContainer">
            <div className="filter">
              <span className="filterText">배송여부</span>
              <select className="filterSelect">
                <option value="" className="filterOption" selected>배송만</option>
                <option value="" className="filterOption">배송+설치+A/S3일</option>
              </select>
            </div>
            <div className="quantityContainer">
              <div className="quantityButtonContainer">
                <button className="quantityButton" onClick={() => handleQuantityChange("decrement")}>-</button>
                <span className="quantity">{quantity}</span>
                <button className="quantityButton" onClick={() => handleQuantityChange("increment")}>+</button>
              </div>
              <button className="addToCartButton">장바구니 추가</button>
            </div>
            
          </div>
        </div>
      </div>
      <Newletter/>
      <Footer/>
    </div>
  )
}
export default Product;