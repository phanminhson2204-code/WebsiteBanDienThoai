import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Users from "./pages/Users";
import "./App.css";

function Home() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Trang chủ</h1>
      <p>Website bán Điện Thoại </p>

      {/* link sang users */}
      <Link to="/users">Xem danh sách Users</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>
        {/* trang chủ */}
        <Route path="/" element={<Home />} />

        {/* yêu cầu đề bài */}
        <Route path="/users" element={<Users />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;