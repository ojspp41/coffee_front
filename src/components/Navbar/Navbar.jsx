import { useState } from 'react';
import { Badge } from '@mui/material';
import { ShoppingCartOutlined, Menu as MenuIcon, Close as CloseIcon ,Phone as PhoneIcon} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user, handleLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navWrapper">
        <div className="navLeft">
          <h1 className="navLogo">
            <Link to="/" className="navLink" onClick={closeMobileMenu}>한국유통</Link>
            <a href="tel:010-2242-4447" className="phoneIcon">
              <PhoneIcon />
              <span>상담연결</span>
            </a>
          </h1>
        </div>
        <div className="navRight">
          {user ? (
            <>
              {user.isAdmin && (
                <div className="navMenuItem">
                  <Link to="/admin" className="navLink" onClick={closeMobileMenu}>Admin Page</Link>
                </div>
              )}
              <div className="navMenuItem">
                <Link to="/profile" className="navLink" onClick={closeMobileMenu}>Profile</Link>
              </div>
              <div className="navMenuItem">
                <span className="navLink" onClick={() => { handleLogout(); closeMobileMenu(); }}>Logout</span>
              </div>
              <Badge badgeContent={3} color="secondary">
                <Link to="/cart" className="navLink" onClick={closeMobileMenu}>
                  <ShoppingCartOutlined />
                </Link>
              </Badge>
            </>
          ) : (
            <>
              <div className="navMenuItem">
                <Link to="/register" className="navLink" onClick={closeMobileMenu}>Register</Link>
              </div>
              <div className="navMenuItem">
                <Link to="/login" className="navLink" onClick={closeMobileMenu}>Login</Link>
              </div>
            </>
          )}
        </div>
        <div className="mobileMenuIcon" onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon className='MenuIcon' />}
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobileMenu">
          {user ? (
            <>
              {user.isAdmin && (
                <div className="navMenuItem">
                  <Link to="/admin" className="navLink" onClick={closeMobileMenu}>Admin Page</Link>
                </div>
              )}
              <div className="navMenuItem">
                <Link to="/profile" className="navLink" onClick={closeMobileMenu}>Profile</Link>
              </div>
              <div className="navMenuItem">
                <span className="navLink" onClick={() => { handleLogout(); closeMobileMenu(); }}>Logout</span>
              </div>
              <div className="navMenuItem">
                <Badge badgeContent={3} color="secondary">
                  <Link to="/cart" className="navLink" onClick={closeMobileMenu}>
                    <ShoppingCartOutlined />
                  </Link>
                </Badge>
              </div>
            </>
          ) : (
            <>
              <div className="navMenuItem">
                <Link to="/register" className="navLink" onClick={closeMobileMenu}>Register</Link>
              </div>
              <div className="navMenuItem">
                <Link to="/login" className="navLink" onClick={closeMobileMenu}>Login</Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
