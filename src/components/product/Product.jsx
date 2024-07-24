import {FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate(`/product/${product.id}`);
  };
  return(
    <div className='product'>
      <div className="productPrice">
          {product.price.toLocaleString()}원
      </div>
      <img src={product.img} alt="" className="productImg" />
      <div className="productInfo">
        
        <div className="productIconContainer" >
          <ShoppingCartOutlined className='productIcon'/>
        </div>
        <div className="productIconContainer" onClick={handleSearchClick}>
          <SearchOutlined className='productIcon'/>
        </div>
        <div className="productIconContainer">
          <FavoriteBorder className='productIcon'/>
        </div>
        
      </div>
    </div>
  )
}

export default Product; 