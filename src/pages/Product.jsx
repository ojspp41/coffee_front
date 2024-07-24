import React, { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './Product.css'
import Newletter from '../components/newletter/Newletter';
import Footer from '../components/footer/Footer';
import { product_data } from '../dummyData'; 



const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [deliveryCost, setDeliveryCost] = useState(20000);
  useEffect(() => {
    const foundProduct = product_data.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity > 1 ? quantity - 1 : 1);
    }
  };
  const handleDeliveryChange = (event) => {
    const cost = parseInt(event.target.value, 10);
    setDeliveryCost(cost);
  };

  if (!product) {
    return <div>Loading...</div>;
  }
  const totalPrice = product.price * quantity + deliveryCost;
  return (
    <div className="productContainer">
      <div className="productWrapper">
        <div className="productImgContainer">
          <img src={product.img} alt={product.title} className="productImg" />
        </div>
        <div className="productInfoContainer">
          <h1 className="productTitle">{product.title}</h1>
          <p className="productDesc">{product.desc}</p>
          <span className="productPrice_product">가격: {product.price.toLocaleString()}원</span>
          <div className="productFilterContainer">
            <div className="filter">
              <span className="filterText">배송여부</span>
              <select className="filterSelect" onChange={handleDeliveryChange}  defaultValue="20000">
                <option value="20000" className="filterOption" selected>배송만(+20000원)</option>
                <option value="50000" className="filterOption">배송+설치+A/S3일(+50000원)</option>
              </select>
            </div>
            <div className="quantityButtonContainer">
                <button className="quantityButton" onClick={() => handleQuantityChange("decrement")}>-</button>
                <span className="quantity">{quantity}</span>
                <button className="quantityButton" onClick={() => handleQuantityChange("increment")}>+</button>
            </div>
            <div className="quantityContainer">
              
              <span className="totalPrice">합계: {totalPrice.toLocaleString()}원</span>
              <button className="addToCartButton">장바구니 추가</button>
            </div>
          </div>
        </div>
      </div>
      <Newletter />
      <Footer />
    </div>
  );
}

export default Product;