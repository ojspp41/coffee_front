import './products.css';
import { product_data } from '../../dummyData';
import Product from '../product/Product';

const Products = ({ selectedCategory }) => {
  const filteredProducts = selectedCategory
    ? product_data.filter(product => product.categories.includes(selectedCategory))
    : product_data;
  console.log(selectedCategory);
  return (
    <div className='products'>
      {filteredProducts.map(data => (
        <Product product={data} key={data.id} />
      ))}
    </div>
  );
}

export default Products;
