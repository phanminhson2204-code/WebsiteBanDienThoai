import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>

      <Navbar />
<div style={{ paddingTop: "80px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
</div>
    </BrowserRouter>
  );
}

export default App;