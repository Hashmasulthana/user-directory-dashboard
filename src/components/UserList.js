import React, { useEffect, useState } from "react";
import "./../styles/UserList.css";
import UserCard from "./UserCard";
import SearchBar from "./SearchBar";

function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // 🔥 Sorting logic
  const sortedUsers = [...users]
    .filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === "name-asc") return a.name.localeCompare(b.name);
      if (sortType === "name-desc") return b.name.localeCompare(a.name);
      if (sortType === "company-asc")
        return a.company.name.localeCompare(b.company.name);
      if (sortType === "company-desc")
        return b.company.name.localeCompare(a.company.name);
      return 0;
    });

  return (
    <div className="container">
      <SearchBar search={search} setSearch={setSearch} />

      {/* 🔥 Sorting Buttons */}
      <div className="sort-buttons">
        <button onClick={() => setSortType("name-asc")}>Name ↑</button>
        <button onClick={() => setSortType("name-desc")}>Name ↓</button>
        <button onClick={() => setSortType("company-asc")}>Company ↑</button>
        <button onClick={() => setSortType("company-desc")}>Company ↓</button>
      </div>

      <div className="grid">
        {sortedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserList;