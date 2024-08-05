import React from "react";
import Slider from "../components/slider/Slider";
import Category from "../components/catagory/Category";
import Products from "../components/products/products";
import Newletter from "../components/newletter/Newletter";
import Footer from "../components/footer/Footer";
import "./Home.css";  // 추가된 CSS 파일을 임포트합니다.

const Home = ({ data }) => {
  return (
    <div className="homeContainer">
      <div className="homeContent">
        <div className="hide-on-mobile">
          <Slider data={data} />
          
        </div>
        
        <Category />
        <Products />
        <div className="hide-on-mobile">
          <Newletter/>
          
        </div>
  
        <Footer />
      </div>
    </div>
  );
}

export default Home;
