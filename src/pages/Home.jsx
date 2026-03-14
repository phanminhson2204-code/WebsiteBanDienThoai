import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div>

      {/* HERO */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "120px 20px",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold"
          }}
        >
          Khám Phá Siêu Phẩm.
        </h1>

        <h2
          style={{
            fontSize: "32px",
            color: "#bdbdbd",
            marginTop: "10px"
          }}
        >
          Mẫu điện thoại mới nhất.
        </h2>

        <button
          onClick={() => navigate("/users")}
          style={{
            marginTop: "25px",
            padding: "12px 30px",
            borderRadius: "25px",
            border: "none",
            background: "#000",
            color: "#fff",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Xem Users
        </button>
      </section>

      {/* BOX SẢN PHẨM */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "40px auto",
          background: "#eee",
          borderRadius: "20px",
          height: "350px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h3 style={{ color: "#bbb" }}>
          Khu vực hiển thị sản phẩm
        </h3>
      </section>

    </div>
  );
}

export default Home;