import React, { useState } from 'react';
import Footer from '../components/footer/Footer';
import './Cart.css';

const Cart = () => {
  const initialCartItems = [
    {
      id: 1,
      name: '중고 onTap 자판기',
      shipping: '배송+설치+A/S3일',
      price: 350000,
      quantity: 1,
      img: '../images/ontap.jpg',
    },
    {
      id: 2,
      name: '새 제품 onTap 자판기',
      shipping: '배송만',
      price: 500000,
      quantity: 1,
      img: '../images/coff.jpg',
    },
    {
      id: 3,
      name: '프리미엄 onTap 자판기',
      shipping: '배송+설치+A/S7일',
      price: 650000,
      quantity: 1,
      img: '../images/coff.jpg',
    },
    {
      id: 4,
      name: '기본 onTap 자판기',
      shipping: '배송만',
      price: 200000,
      quantity: 1,
      img: '../images/coff.jpg',
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, type) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === 'increment'
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    if (window.confirm('정말로 이 상품을 삭제하시겠습니까?')) {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="Cart">
      
      <div className="cartWrapper">
        <div className="cartTop">
          <h1 className="cartTitle">장바구니</h1>
          {cartItems.map((item) => (
            <div key={item.id}>
              <div className="cartProductInfo">
                <img src={item.img} alt="product" className="cartImg" />
                <div className="cartProductDetail">
                  <span className="cartProductName">{item.name}</span>
                  <span className="cartProductShipping">배송여부: {item.shipping}</span>
                  <div className="cartQuantityContainer">
                    <button className="quantityButton" onClick={() => handleQuantityChange(item.id, 'decrement')}>-</button>
                    <span className="quantity">{item.quantity}</span>
                    <button className="quantityButton" onClick={() => handleQuantityChange(item.id, 'increment')}>+</button>
                  </div>
                  <span className="cartProductPrice">{(item.price * item.quantity).toLocaleString()}원</span>
                  <button className="removeButton" onClick={() => handleRemoveItem(item.id)}>삭제</button>
                </div>
              </div>
              <hr className="cartHr" />
            </div>
          ))}
        </div>
        <div className="cartSummary">
          <h2 className="summaryTitle">Order Summary</h2>
          <div className="summaryItem">
            <span className="summaryItemText">Subtotal</span>
            <span className="summaryItemPrice">{totalPrice.toLocaleString()}원</span>
          </div>
          <div className="summaryItem">
            <span className="summaryItemText">Discount</span>
            <span className="summaryItemPrice">0원</span>
          </div>
          <div className="summaryItem">
            <span className="summaryItemText">Total</span>
            <span className="summaryItemPrice">{totalPrice.toLocaleString()}원</span>
          </div>
          <button className="purchaseButton">구매하기</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Cart;
