import { useEffect, useState } from "react";

function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    const API_URL = "https://dienthoaistore-876dc34eacaf.herokuapp.com/api/users";

    fetch(API_URL)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log("Lỗi kết nối:", err));

  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Danh sách Users</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default Users;