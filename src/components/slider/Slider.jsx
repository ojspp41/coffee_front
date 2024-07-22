import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Slider.css";

const Slider = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % data.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleLearnMore = (id) => {
    navigate(`/productlist/category`);
  };

  // useEffect(() => {
  //   const slideInterval = setInterval(handleNextSlide, 5000);
  //   return () => clearInterval(slideInterval);
  // }, []);

  return (
    <div className="slider">
      <button className="prevBtn" onClick={handlePrevSlide}>{"<"}</button>
      <div className="sliderWrapper" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((item) => (
          <div className="slide" key={item.id}>
            <div className="slideImgContainer">
              <img 
                src={item.img} 
                alt={item.title} 
                className="slideImg" 
              />
            </div>
            <div className="infoContainer">
              <div className="slideTitle">
                {item.title}
              </div>
              <div className="slideDesc">
                {item.Desc}
              </div>
              <button className="slideBtn" onClick={() => handleLearnMore(item.id)}>Learn More</button>
            </div>
          </div>
        ))}
      </div>
      <button className="nextBtn" onClick={handleNextSlide}>{">"}</button>
    </div>
  );
}

export default Slider;
