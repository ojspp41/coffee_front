import './products.css'
import { product_data } from '../../dummyData';
import Product from '../product/Product'
const Products = () => {
  return(
    <div className='products'>
      {product_data.map(data => (
        <Product product={data} key = {data.id}/>
      ))}
    </div>
  )
}

export default Products; 