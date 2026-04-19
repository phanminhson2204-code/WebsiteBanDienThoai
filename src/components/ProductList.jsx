import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Gọi API lấy danh sách từ Laravel của Sơn
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.log("Lỗi tải sản phẩm:", err));
  }, []);

  return (
    <div className="row g-3">
      {products.map(item => (
        <div key={item.id} className="col-md-4 col-sm-6">
          <div className="product-card p-3 border rounded-4 bg-white shadow-sm h-100">
            <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="position-relative mb-3">
                <span className="badge bg-danger position-absolute top-0 start-0 m-2">-11%</span>
                <img src={`${import.meta.env.VITE_API_BASE_URL}/${item.image}`} className="img-fluid" alt={item.name} />
              </div>
              <p className="text-muted small mb-1">{item.brand}</p>
              <h6 className="fw-bold text-truncate">{item.name}</h6>
              <div className="d-flex align-items-center gap-2">
                <span className="text-danger fw-bold">{parseInt(item.price).toLocaleString()}đ</span>
                <span className="text-muted small text-decoration-line-through">34.990.000đ</span>
              </div>
            </Link>
            <button className="btn btn-outline-primary btn-sm w-100 mt-3 rounded-pill">Thêm vào giỏ</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;