import {FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import './Product.css'

const Product = ({product}) => {
  return(
    <div className='product'>
      
      <img src={product.img} alt="" className="productImg" />
      <div className="productInfo">
        <div className="productIconContainer">
          <ShoppingCartOutlined className='productIcon'/>
        </div>
        <div className="productIconContainer">
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