import { useState } from 'react';
import { Search } from '@mui/icons-material';
import './Navbar.css';
import { Badge } from '@mui/material';
import { ShoppingCartOutlined, Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = ({ user, handleLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navWrapper">
        <div className="navLeft">
          <span className="navLanguage">KR</span>
          <div className="navSearchContainer">
            <input type="text" className="navInput" />
            <Search />
          </div>
        </div>
        <div className="navCenter">
          <h1 className="navLogo">
            <Link to="/" className="navLink">한국유통</Link>
          </h1>
        </div>
        <div className="navRight">
          {user ? (
            <>
              <div className="navMenuItem">
                <span className="navWelcome">{user.username}님 환영합니다! 😊</span>
              </div>
              <div className="navMenuItem">
                <Link to="/profile" className="navLink">Profile</Link>
              </div>
              <div className="navMenuItem">
                <span className="navLink" onClick={handleLogout}>Logout</span>
              </div>
              <Badge badgeContent={3} color="secondary">
                <Link to="/cart" className="navLink">
                  <ShoppingCartOutlined />
                </Link>
              </Badge>
            </>
          ) : (
            <>
              <div className="navMenuItem">
                <Link to="/register" className="navLink">Register</Link>
              </div>
              <div className="navMenuItem">
                <Link to="/login" className="navLink">Login</Link>
              </div>
            </>
          )}
        </div>
        <div className="mobileMenuIcon" onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobileMenu">
          {user ? (
            <>
              <div className="navMenuItem">
                <span className="navWelcome">{user.username}님 환영합니다! 😊</span>
              </div>
              <div className="navMenuItem">
                <Link to="/profile" className="navLink">Profile</Link>
              </div>
              <div className="navMenuItem">
                <span className="navLink" onClick={handleLogout}>Logout</span>
              </div>
              <div className="navMenuItem">
                <Badge badgeContent={3} color="secondary">
                  <Link to="/cart" className="navLink">
                    <ShoppingCartOutlined />
                  </Link>
                </Badge>
              </div>
              
            </>
          ) : (
            <>
              <div className="navMenuItem">
                <Link to="/register" className="navLink">Register</Link>
              </div>
              <div className="navMenuItem">
                <Link to="/login" className="navLink">Login</Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
