import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../main";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${server}/admin/users`)
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.error("Failed to load users", err));
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {users.map((u) => (
          <li key={u._id}>{u.name} - {u.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
