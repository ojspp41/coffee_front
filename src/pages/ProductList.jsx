import './ProductList.css'
import Products from '../components/products/products'
import Newletter from '../components/newletter/Newletter'
import Footer from '../components/footer/Footer'

const ProductList = () => {
  return (
    <div className='ProductList'>
      
      <h1 className="fTitle">Products</h1>
      <div className="filterContainer">
        
        <div className="filter">
          <span className="filterText">Filter</span>
          <select className="filterSelect">
            <option value="" className="filterOption" disabled selected>Type</option>
            <option value="" className="filterOption">중고 커피 자판기</option>
            <option value="" className="filterOption">새 커피 자판기</option>
            <option value="" className="filterOption">커피 원두</option>
            <option value="" className="filterOption">종이컵</option>
            <option value="" className="filterOption">물수건</option>
            <option value="" className="filterOption">일회 용기 </option>
          </select>
        </div>
        <div className="filter">
          <span className="filterText">Sort</span>
          <select className="filterSelect">
            <option value="" className="filterOption" selected>최신순</option>
            <option value="" className="filterOption">가격순(오름)</option>
            <option value="" className="filterOption">가격순(내림)</option>
            <option value="" className="filterOption">Best상품</option>
          </select>
          
        </div>
      </div>
      
      <Products></Products>
      <Newletter></Newletter>
      <Footer></Footer>
    </div>
  )

}

export default ProductList;
