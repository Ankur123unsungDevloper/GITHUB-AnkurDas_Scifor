import React from "react";
import { useNavigate } from "react-router-dom";

const accountOptions = [
  {
    title: "Your Orders",
    description: "Track, return, cancel an order, download invoice or buy again",
    icon: "📦",
  },
  {
    title: "Login & Security",
    description: "Edit login, name, and mobile number",
    icon: "🔒",
  },
  {
    title: "Your Addresses",
    description: "Edit, remove or set default address",
    icon: "🏠",
  },
  {
    title: "Your Payments",
    description: "View transactions, manage payment methods",
    icon: "💳",
  },
  {
    title: "Gift Cards",
    description: "Redeem a card or buy new ones",
    icon: "🎁",
  },
  {
    title: "Customer Service",
    description: "Browse help options or contact us",
    icon: "🎧",
  },
];

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("storage")); // To trigger navbar change
    navigate("/");
  };

  return (
    <div className="profile-dashboard">
      <div className="profile-header">
        <h2>Hello, {user.email || "User"}</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="profile-grid">
        {accountOptions.map((item, index) => (
          <div className="profile-card" key={index}>
            <div className="profile-icon">{item.icon}</div>
            <div className="profile-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
