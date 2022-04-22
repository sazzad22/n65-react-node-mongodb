import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleUserDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this user??"
    );
    if (proceed) {
      console.log("deleting user with id-", id);
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  return (
    <div>
      <h1>Availble users:{users.length} </h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}{" "}
            <button onClick={() => handleUserDelete(user._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
