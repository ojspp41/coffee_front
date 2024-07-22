
import Slider from "../components/slider/Slider"
import Category from "../components/catagory/Category"
import Products from "../components/products/products"
import Newletter from "../components/newletter/Newletter";
import Footer from "../components/footer/Footer";
const Home = ({data}) => {
  return(
    <>
      
      <Slider data={data}/>
      <Category/>
      <Products/>
      <Newletter/>
      <Footer/>
    </>
  )
}
export default Home;