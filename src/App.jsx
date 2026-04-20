import React, { useEffect, useState, useContext } from 'react';
import { Routes, Route, Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import './App.css';

import Home from './pages/Home'; 
import Auth from './pages/Auth'; 
import ProductDetail from './pages/ProductDetail';
import Shop from './pages/Shop';
import DealHot from './pages/DealHot';
import About from './pages/About';
import NewsSection from './components/NewsSection';
import Cart from "./pages/Cart";

import { CartContext } from "./context/CartContext";

import Checkout from "./pages/Checkout";


/* ================= HEADER ================= */

const FullHeader = ({ user, handleLogout, searchTerm, setSearchTerm, handleSearch, navigate }) => {

  const { cartItems } = useContext(CartContext);

  return (
    <header className="main-header">

      {/* TOP HEADER */}

      <div className="header-top">
        <div className="container-fluid flex-end">
          <div className="header-top-links">
            <span>Giảm giá | Dịch vụ khách hàng | Kiểm tra đơn hàng</span>
          </div>
        </div>
      </div>


      {/* MAIN HEADER */}

      <div className="header-main">
        <div className="container-fluid">

          <Link to="/" className="logo-text" style={{textDecoration: 'none'}}>
            PHONESTORE
          </Link>

          <ul className="main-menu">
            <li><NavLink to="/">Trang chủ</NavLink></li>
            <li><NavLink to="/san-pham">Sản phẩm</NavLink></li>
            <li><NavLink to="/gioi-thieu">Giới thiệu</NavLink></li>
            <li><a href="#">Thương hiệu</a></li>
            <li><NavLink to="/tin-tuc">Tin tức</NavLink></li>
            <li><NavLink to="/deal-hot">Deal hot</NavLink></li>
            <li><a href="#">Liên hệ</a></li>
          </ul>

          <div className="header-right-actions">

            <div className="hotline">
              <span className="icon">📞</span>
              <div className="hotline-text">
                Hotline hỗ trợ<br/>
                <strong>0909 000 000</strong>
              </div>
            </div>

            {user ? (
              <div className="user-logged-in">
                <span className="icon">👤</span>
                <div className="user-text">
                  Xin chào, <strong>{user.name}</strong><br/>
                  <span 
                    onClick={handleLogout}
                    style={{color:'red',cursor:'pointer',fontSize:'12px'}}
                  >
                    Đăng xuất
                  </span>
                </div>
              </div>
            ) : (

              <Link to="/login" className="user-account" style={{textDecoration:'none',color:'inherit'}}>
                <span className="icon">👤</span>
                <div className="user-text">Đăng nhập / Đăng ký</div>
              </Link>

            )}

          </div>

        </div>
      </div>



      {/* HEADER BOTTOM */}

      <div className="header-bottom">

        <div className="container-fluid">

          <div className="category-dropdown">

            <button 
              className="category-btn"
              onClick={() => navigate('/')}
            >
              ☰ Danh mục sản phẩm
            </button>

            <ul className="dropdown-menu">
              <li><Link to="/san-pham">Tất cả sản phẩm</Link></li>
              <li><Link to="/san-pham?keyword=iPhone">iPhone (Apple)</Link></li>
              <li><Link to="/san-pham?keyword=Samsung">Samsung</Link></li>
              <li><Link to="/san-pham?keyword=Xiaomi">Xiaomi</Link></li>
              <li><Link to="/san-pham?keyword=Oppo">Oppo</Link></li>
              <li><Link to="/san-pham?keyword=Vivo">Vivo</Link></li>
              <li><Link to="/san-pham?keyword=Realme">Realme</Link></li>
            </ul>

          </div>


          {/* SEARCH */}

          <div className="search-box">

            <input
              type="text"
              placeholder="Nhập tên sản phẩm cần tìm..."
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
              onKeyDown={(e)=> e.key==="Enter" && handleSearch()}
            />

            <button className="search-btn" onClick={handleSearch}>
              🔍 Tìm kiếm
            </button>

          </div>


          {/* CART */}

          <div className="header-bottom-actions">

            <span>❤️ 0</span>

            <span
              style={{cursor:"pointer"}}
              onClick={()=>navigate("/cart")}
            >
              🛒 Giỏ hàng ({cartItems?.length || 0})
            </span>

          </div>

        </div>

      </div>

    </header>
  );
};



/* ================= FOOTER ================= */

const Footer = () => {

  return (

    <footer className="main-footer">

      <div className="footer-container">

        <div className="footer-columns">

          <div className="footer-col">

            <h3 className="column-title">VỀ CHÚNG TÔI</h3>

            <ul className="footer-links">
              <li>Giới thiệu về công ty</li>
              <li>Quy chế hoạt động</li>
              <li>Tin tức khuyến mãi</li>
              <li>Hệ thống cửa hàng</li>
            </ul>

          </div>


          <div className="footer-col">

            <h3 className="column-title">CHÍNH SÁCH</h3>

            <ul className="footer-links">
              <li>Chính sách bảo hành</li>
              <li>Chính sách đổi trả</li>
              <li>Chính sách bảo mật</li>
              <li>Chính sách giao hàng</li>
            </ul>

          </div>


          <div className="footer-col">

            <h3 className="column-title">HỖ TRỢ THANH TOÁN</h3>

            <div className="payment-grid">
              <span className="pay-tag">VISA</span>
              <span className="pay-tag">MOMO</span>
              <span className="pay-tag">ZALOPAY</span>
              <span className="pay-tag">VNPAY</span>
            </div>

          </div>


          <div className="footer-col">

            <h3 className="column-title">ĐỊA CHỈ</h3>

            <p>180 Cao Lỗ, Quận 8, TP.HCM</p>

          </div>

        </div>


        <hr className="footer-divider"/>


        <div className="footer-legal-info">

          <p>© 2025 - Nhóm 19</p>

        </div>

      </div>

    </footer>

  );
};



/* ================= APP ================= */

function App() {

  const [user,setUser] = useState(null);
  const [searchTerm,setSearchTerm] = useState("");

  const navigate = useNavigate();
  const location = useLocation();


  useEffect(()=>{

    const savedUser = localStorage.getItem("user");

    if(savedUser){

      setUser(JSON.parse(savedUser));

    }

  },[]);



  const handleLogout = () => {

    if(window.confirm("Bạn có chắc muốn đăng xuất?")){

      localStorage.clear();

      setUser(null);

      navigate("/");

    }

  };



  const handleSearch = () => {

    const finalSearch = searchTerm.trim();

    if(finalSearch===""){

      navigate("/san-pham");

    }else{

      navigate(`/san-pham?keyword=${encodeURIComponent(finalSearch)}`);

    }

  };



  const isAuthPage = location.pathname === "/login";


  return (

    <div className="app-wrapper">

      {!isAuthPage &&

        <FullHeader

          user={user}

          handleLogout={handleLogout}

          searchTerm={searchTerm}

          setSearchTerm={setSearchTerm}

          handleSearch={handleSearch}

          navigate={navigate}

        />

      }


      <main className="main-content" style={{minHeight:'70vh'}}>

        <Routes>

          <Route path="/" element={<Home/>}/>

          <Route path="/san-pham" element={<Shop/>}/>

          <Route path="/product/:id" element={<ProductDetail/>}/>

          <Route path="/deal-hot" element={<DealHot/>}/>

          <Route path="/gioi-thieu" element={<About/>}/>

          <Route path="/tin-tuc" element={<NewsSection/>}/>

          <Route path="/login" element={<Auth/>}/>

          <Route path="/cart" element={<Cart/>}/>
<Route path="/checkout" element={<Checkout />} />
        </Routes>

      </main>


      {!isAuthPage && <Footer/>}

    </div>

  );

}

export default App;