import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'; 
import Auth from './pages/Auth'; 
import ProductDetail from './pages/ProductDetail';
import Shop from './pages/Shop';
import DealHot from './pages/DealHot';
import About from './pages/About';
import NewsSection from './components/NewsSection';


// --- TRANG HEADER ---
// Thêm navigate vào props
const FullHeader = ({ user, handleLogout, searchTerm, setSearchTerm, handleSearch, navigate }) => (
  <header className="main-header">
    <div className="header-top">
      <div className="container-fluid flex-end">
        <div className="header-top-links">
          <span>Giảm giá | Dịch vụ khách hàng | Kiểm tra đơn hàng</span>
        </div>
      </div>
    </div>

    <div className="header-main">
      <div className="container-fluid">
        <Link to="/" className="logo-text" style={{textDecoration: 'none'}}>PHONESTORE</Link>
        
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
            <div className="hotline-text">Hotline hỗ trợ<br/><strong>0909 000 000</strong></div>
          </div>

          {user ? (
            <div className="user-logged-in">
              <span className="icon">👤</span>
              <div className="user-text">
                Xin chào, <strong>{user.name}</strong><br/>
                <span onClick={handleLogout} style={{color: 'red', cursor: 'pointer', fontSize: '12px'}}>Đăng xuất</span>
              </div>
            </div>
          ) : (
            <Link to="/login" className="user-account" style={{textDecoration: 'none', color: 'inherit'}}>
              <span className="icon">👤</span>
              <div className="user-text">Đăng nhập / Đăng ký</div>
            </Link>
          )}
        </div>
      </div>
    </div>

    <div className="header-bottom">
      <div className="container-fluid">
        <div className="category-dropdown">
          {/* Đã sửa navigate ở đây */}
          <button className="category-btn" onClick={() => navigate('/')}>☰ Danh mục sản phẩm</button>
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

        <div className="search-box">
          <input 
            type="text" 
            placeholder="Nhập tên sản phẩm cần tìm..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button className="search-btn" onClick={handleSearch}>🔍 Tìm kiếm</button>
        </div>

        <div className="header-bottom-actions">
          <span>❤️ 0</span>
          <span>🛒 Giỏ hàng (0)</span>
        </div>
      </div>
    </div>
  </header>
);

// --- TRANG FOOTER ---
// --- TRANG FOOTER ---
const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Hàng 1: Các cột thông tin, Chính sách và Map */}
        <div className="footer-columns">
          {/* Cột 1: Về chúng tôi & Mạng xã hội */}
          <div className="footer-col">
            <h3 className="column-title">VỀ CHÚNG TÔI</h3>
            <ul className="footer-links">
              <li>Giới thiệu về công ty</li>
              <li>Quy chế hoạt động</li>
              <li>Tin tức khuyến mãi</li>
              <li>Hệ thống cửa hàng</li>
            </ul>
            <div className="footer-social">
              <p className="column-title" style={{ marginTop: '15px' }}>KẾT NỐI VỚI CHÚNG TÔI</p>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png" alt="Facebook" className="icon-real" />
                </a>
                <a href="https://zalo.me" target="_blank" rel="noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_Zalo.svg/1200px-Icon_Zalo.svg.png" alt="Zalo" className="icon-real" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="Youtube" className="icon-real" />
                </a>
              </div>
            </div>
          </div>

          {/* Cột 2: Chính sách */}
          <div className="footer-col">
            <h3 className="column-title">CHÍNH SÁCH</h3>
            <ul className="footer-links">
              <li>Chính sách bảo hành</li>
              <li>Chính sách đổi trả</li>
              <li>Chính sách bảo mật</li>
              <li>Chính sách giao hàng</li>
              <li>Chính sách khui hộp</li>
            </ul>
          </div>

          {/* Cột 3: Thanh toán & Chứng nhận */}
          <div className="footer-col">
            <h3 className="column-title">HỖ TRỢ THANH TOÁN</h3>
            <div className="payment-grid">
               <span className="pay-tag">VISA</span>
               <span className="pay-tag">MOMO</span>
               <span className="pay-tag">ZALOPAY</span>
               <span className="pay-tag">VNPAY</span>
               <span className="pay-tag">APPLE PAY</span>
            </div>
            <h3 className="column-title" style={{ marginTop: '20px' }}>CHỨNG NHẬN</h3>
            <div className="certification">
               <img src="https://fptshop.com.vn/Content/v5/images/da-thong-bao.png" alt="Đã thông báo Bộ Công Thương" />
            </div>
          </div>

          {/* Cột 4: Google Map thu nhỏ */}
          <div className="footer-col footer-map-section">
            <h3 className="column-title">VỊ TRÍ CỬA HÀNG</h3>
            <p style={{fontSize: '12px', color: '#ccc', marginBottom: '8px'}}>180 Cao Lỗ, Phường 4, Quận 8, TPHCM</p>
            <div className="map-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.954415526554!2d106.675661674338!3d10.738002459902644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f62a90e5dbd%3A0x673294334360e227!2zMTgwIENhbyBM4buXLCBQaMaw4budbmcgNCwgUXXhuq1uIDgsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1712395000000!5m2!1svi!2s" 
                width="100%" 
                height="110" 
                style={{ border: 0, borderRadius: '6px' }} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Hàng 2: Sản phẩm tìm kiếm nhiều */}
        <div className="footer-search-tags">
          <p>
            <strong>Sản phẩm tìm kiếm nhiều:</strong> 
            <span> Macbook Neo</span> | <span>Samsung A37</span> | <span>Samsung A57</span> | <span>Samsung S25</span> | <span>Samsung A56</span>
          </p>
        </div>

        <hr className="footer-divider" />

        {/* Thông tin pháp lý (Footer Bottom) */}
        <div className="footer-legal-info">
          <p>© 2025 - 2026 Công Ty Cổ Phần Nhóm 19</p>
          <p>Địa chỉ: 180 Cao Lỗ, Phường 4, Quận 8 , TP. Hồ Chí Minh • GPĐKKD số 0901234567 do Sở KHĐT TP.HCM cấp ngày 08/03/2026.</p>
          <p>GP số 47/GP-TTĐT do sở TTTT TP HCM cấp ngày 02/07/2025. Điện thoại: (028) 01232 3456 • Email: nhom19@yahoo.com</p>
          <p>Chịu trách nhiệm nội dung: Cả nhóm.</p>
        </div>
      </div>
    </footer>
  );
};


function App() {
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // Khai báo location để check trang login

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogout = () => {
    if (window.confirm("Bạn có chắc muốn đăng xuất?")) {
      localStorage.clear();
      setUser(null);
      navigate('/'); 
    }
  };

  const handleSearch = () => {
    const finalSearch = searchTerm.trim();
    if (finalSearch === "") {
      navigate("/san-pham");
    } else {
      navigate(`/san-pham?keyword=${encodeURIComponent(finalSearch)}`);
    }
  };

  const isAuthPage = location.pathname === '/login';

  return (
    <div className="app-wrapper">
      {!isAuthPage && (
        <FullHeader 
          user={user} 
          handleLogout={handleLogout} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
          navigate={navigate} // Truyền navigate vào đây
        />
      )}

      <main className="main-content" style={{ minHeight: '70vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/san-pham" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/deal-hot" element={<DealHot />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/tin-tuc" element={<NewsSection />} />
          <Route path="/login" element={<Auth />} />
        </Routes>
        
        {/* NewsSection chỉ nên hiện ở trang chủ hoặc trang riêng, 
            nếu để đây nó sẽ hiện ở TẤT CẢ các trang */}
      </main>

      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;