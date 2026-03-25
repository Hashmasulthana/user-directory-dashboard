import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./../styles/UserDetail.css";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      <div className="detail-card">
        <h2>{user.name}</h2>

        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>

        <h3>Address</h3>
        <p>
          {user.address.street}, {user.address.city}, {user.address.zipcode}
        </p>

        <h3>Company</h3>
        <p><strong>Name:</strong> {user.company.name}</p>
        <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
        <p><strong>Business:</strong> {user.company.bs}</p>
      </div>
    </div>
  );
}

export default UserDetail;