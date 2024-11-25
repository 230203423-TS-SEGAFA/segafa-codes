import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaCog,
  FaEnvelope,
  FaComments,
  FaSignOutAlt,
  FaBell,
} from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoFilterSharp } from "react-icons/io5";
import CardColumns from "./CardColumns";
import AddCard from "./AddCard";
import ViewCard from "./ViewCard";
import "./Dashboard.css";

function Dashboard({ user, onLogout }) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // Get current route

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleCreateTask = () => {
    navigate("/add-card"); // Navigate to Add Card route
  };

  const handleCardClick = (card) => {
    setSelectedCard(card); // Set the clicked card
  };

  return (
    <div
      className={`dashboard-container ${isSidebarCollapsed ? "collapsed" : ""}`}
    >
      {/* Sidebar */}
      <aside className="sidebar">
        {/* Logo Section */}
        <div className="logo-container">
          <img src="logo.png" alt="Logo" className="logo-image" />
          {!isSidebarCollapsed && <span className="logo-text">MyLogo</span>}
        </div>
        {/* Menu Items */}
        <div className="menu-items">
          <div
            className={`menu-item ${
              activeItem === "Dashboard" ? "active" : ""
            }`}
            onClick={() => {
              setActiveItem("Dashboard");
              navigate("/*");
            }}
          >
            <FaTachometerAlt
              size={16}
              className={`icon ${
                activeItem === "Dashboard" ? "active-icon" : ""
              }`}
            />
            {!isSidebarCollapsed && <span>Dashboard</span>}
          </div>
          <div
            className={`menu-item ${activeItem === "Email" ? "active" : ""}`}
            onClick={() => setActiveItem("Email")}
          >
            <FaEnvelope
              size={16}
              className={`icon ${activeItem === "Email" ? "active-icon" : ""}`}
            />
            {!isSidebarCollapsed && <span>Email</span>}
          </div>
          <div
            className={`menu-item ${activeItem === "Chat" ? "active" : ""}`}
            onClick={() => setActiveItem("Chat")}
          >
            <FaComments
              size={16}
              className={`icon ${activeItem === "Chat" ? "active-icon" : ""}`}
            />
            {!isSidebarCollapsed && <span>Chat</span>}
          </div>
          <div
            className={`menu-item ${activeItem === "Settings" ? "active" : ""}`}
            onClick={() => setActiveItem("Settings")}
          >
            <FaCog
              size={16}
              className={`icon ${
                activeItem === "Settings" ? "active-icon" : ""
              }`}
            />
            {!isSidebarCollapsed && <span>Settings</span>}
          </div>
        </div>
        {/* Logout Icon */}
        <div className="logout-section" onClick={onLogout}>
          <FaSignOutAlt size={20} className="logout-icon" />
          {!isSidebarCollapsed && <span>Logout</span>}
        </div>
        {/* Sidebar Collapse Button */}
        <div className="collapse-button" onClick={toggleSidebar}>
          {isSidebarCollapsed ? "▶" : "◀"}
        </div>
      </aside>

      {/* Header */}
      <header className="header">
        <div className="header-left">
          <span className="welcome-text">
            Welcome, {user ? user.name : "User"}
          </span>
        </div>
        <div className="header-center">
          {location.pathname !== "/add-card" && (
            <input type="text" className="search-bar" placeholder="Search..." />
          )}
        </div>
        {location.pathname !== "/add-card" && (
          <div className="header-right">
            <div className="notification-wrapper">
              <FaBell className="notification-icon" />
              <div className="notification-circle">5</div>
            </div>
          </div>
        )}
      </header>

      {/* Main Section */}
      <main className="main-section">
        <div className="top-section">
          {location.pathname === "/add-card" ? (
            <h2>Add Card</h2>
          ) : (
            <>
              <div className="top-left">
                <div className="date">
                  <span className="month">OCT</span>
                  <span className="full-date">Oct 22, 2024</span>
                </div>
              </div>
              <div className="top-center">
                <span className="board-title">Board</span>
                <div className="user-images">
                  <div
                    className="user-circle"
                    style={{ backgroundImage: "url(user1.png)" }}
                  ></div>
                  <div
                    className="user-circle"
                    style={{ backgroundImage: "url(user2.png)" }}
                  ></div>
                  <div
                    className="user-circle"
                    style={{ backgroundImage: "url(user3.png)" }}
                  ></div>
                  <div
                    className="user-circle"
                    style={{ backgroundImage: "url(user4.png)" }}
                  ></div>
                </div>
              </div>
            </>
          )}
          <div className="top-right">
            {location.pathname !== "/add-card" && (
              <>
                <button className="filters-btn">
                  <i className="icon">
                    <IoFilterSharp />
                  </i>{" "}
                  Filters
                </button>
                <button className="create-task-btn" onClick={handleCreateTask}>
                  <i className="icon">
                    <FaPlus />
                  </i>{" "}
                  Create Task
                </button>
              </>
            )}
          </div>
        </div>
        <div className="main-sections">
          {location.pathname === "/" && <CardColumns onEdit={handleCardClick}  />}
          {location.pathname === "/add-card" && <AddCard />}
          <Routes>
            <Route path="/view-card/:id" element={<ViewCard />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
