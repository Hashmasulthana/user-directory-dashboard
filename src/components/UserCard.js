import React from "react";
import { useNavigate } from "react-router-dom";

function UserCard({ user }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/user/${user.id}`)}>
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      
    </div>
  );
}

export default UserCard;