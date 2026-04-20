import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from "../context/CartContext";

const ProductList = () => {

  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.log("Lỗi tải sản phẩm:", err));
  }, []);
const addToCart = (product) => {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const index = cart.findIndex(p => p.id === product.id);

  if(index >= 0){
    cart[index].qty += 1;
  }else{
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: `${import.meta.env.VITE_API_BASE_URL}/${product.image}`,
      variant: product.brand,
      qty: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Đã thêm vào giỏ hàng");
};
  return (
    <div className="row g-3">

      {products.map(item => (

        <div key={item.id} className="col-md-4 col-sm-6">

          <div className="product-card p-3 border rounded-4 bg-white shadow-sm h-100">

            <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>

              <div className="position-relative mb-3">
                <img
                  src={`${import.meta.env.VITE_API_BASE_URL}/${item.image}`}
                  className="img-fluid"
                  alt={item.name}
                />
              </div>

              <p className="text-muted small mb-1">{item.brand}</p>

              <h6 className="fw-bold text-truncate">{item.name}</h6>

              <span className="text-danger fw-bold">
                {parseInt(item.price).toLocaleString()}đ
              </span>

            </Link>
<button 
className="btn btn-outline-primary btn-sm w-100 mt-3 rounded-pill"
onClick={() => addToCart(item)}
>
Thêm vào giỏ
</button>

          </div>

        </div>

      ))}

    </div>
  );
};

export default ProductList;