import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar/Navbar';
import AdminPage from './pages/AdminPage';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './redux/userSlice';

const data = [
  {
    id: 1,
    img: "/images/machine.jpg",
    title: '커피 자판기',
    desc: '중고 부터 새 상품까지 다양하게 상담 후 고객님이 원하는 가격의 견적으로 자판기를 만들어 드립니다.',
    price: 350000
  },
  {
    id: 2,
    img: '/images/coffee2.jpg',
    title: '커피',
    desc: '커피 등등의 다양한 부수기제 판매',
    price: 15000
  },
  {
    id: 3,
    img: '/images/coffee2.jpg',
    title: '한국유통',
    desc: '고장난 자판기도 구매합니다 중고 자판기를 세척하여 값싸고 잘 작동되는 자판기로 만들어 줍니다.',
    price: 100000
  }
];

function App() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Provider store={store}>
      <Router>
        <Navbar user={user} handleLogout={handleLogout} />
        <Routes>
          
          <Route path="/" element={<Home data={data} />} />
          <Route path="/admin/*" element={<AdminPage/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productlist/category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
