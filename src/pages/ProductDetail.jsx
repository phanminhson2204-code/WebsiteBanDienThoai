import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products/${id}`);
                if (res.data && res.data.status === 'success') {
                    setProduct(res.data.data);
                }
            } catch (err) {
                console.error("Lỗi API:", err);
                setError("Không thể kết nối đến máy chủ.");
            } finally {
                setLoading(false);
            }
        };
        fetchProductDetail();
    }, [id]);

    if (loading) return <div className="text-center my-5"><h3>Đang tải...</h3></div>;
    if (error || !product) return <div className="text-center my-5 text-danger"><h3>Sản phẩm không tồn tại!</h3></div>;

    return (
        <div className="detail-page-wrapper">
            <div className="container py-4">
                {/* Breadcrumb */}
                <nav aria-label="breadcrumb" className="mb-4">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link font-weight-bold to="/">Trang chủ</Link></li>
                        <li className="breadcrumb-item active">{product.name}</li>
                    </ol>
                </nav>

                <div className="row bg-white rounded-4 shadow-sm p-4 mx-0">
                    {/* Cột Trái: Ảnh */}
                    <div className="col-md-5 mb-4">
                        <div className="img-container p-3 border rounded-3 bg-white d-flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
                            <img 
                                src={`${import.meta.env.VITE_API_BASE_URL}/${product.image}`} 
                                alt={product.name} 
                                className="img-fluid" 
                                style={{ maxHeight: '380px', objectFit: 'contain' }}
                                onError={(e) => e.target.src = 'https://via.placeholder.com/400'}
                            />
                        </div>
                    </div>

                    {/* Cột Phải: Thông tin */}
                    <div className="col-md-7 ps-md-5">
                        <h2 className="fw-bold mb-2">{product.name}</h2>
                        <div className="mb-3">
                            <span className="badge bg-primary me-2">{product.brand}</span>
                            <span className="text-muted">Model: {product.model}</span>
                        </div>

                        <div className="price-card p-3 rounded-3 mb-4" style={{ background: '#fef2f2', border: '1px solid #ffccd0' }}>
                            <h3 className="text-danger fw-bold mb-0">
                                {parseInt(product.sale_price || product.price).toLocaleString()}đ
                            </h3>
                            {product.sale_price > 0 && (
                                <div className="mt-1">
                                    <span className="text-muted text-decoration-line-through me-2">
                                        {parseInt(product.price).toLocaleString()}đ
                                    </span>
                                    <span className="badge bg-danger">Giảm giá sốc</span>
                                </div>
                            )}
                        </div>

                        <div className="specs-list mb-4">
                            <h5 className="fw-bold border-bottom pb-2">Thông số cấu hình</h5>
                            <div className="row mt-3">
                                <div className="col-6 mb-2"><strong>Màu sắc:</strong> {product.color}</div>
                                <div className="col-6 mb-2"><strong>Dung lượng:</strong> {product.storage}</div>
                                <div className="col-6 mb-2"><strong>RAM:</strong> {product.ram}</div>
                                <div className="col-6 mb-2"><strong>Trạng thái:</strong> {product.quantity > 0 ? 'Còn hàng' : 'Hết hàng'}</div>
                            </div>
                        </div>

                        <div className="d-grid gap-2">
                            <button className="btn btn-danger btn-lg fw-bold py-3">MUA NGAY</button>
                            <div className="row g-2">
                                <div className="col-6">
                                    <button className="btn btn-outline-primary w-100 py-2">TRẢ GÓP 0%</button>
                                </div>
                                <div className="col-6">
                                    <button className="btn btn-outline-primary w-100 py-2">TRẢ GÓP QUA THẺ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Phần mô tả */}
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="bg-white rounded-4 shadow-sm p-4">
                            <h4 className="fw-bold border-bottom pb-3 mb-3">Đặc điểm nổi bật</h4>
                            <div className="description-content" style={{ lineHeight: '1.8' }}>
                                {product.description ? (
                                    <div dangerouslySetInnerHTML={{ __html: product.description.replace(/\n/g, '<br/>') }} />
                                ) : (
                                    <p>Đang cập nhật nội dung chi tiết...</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;