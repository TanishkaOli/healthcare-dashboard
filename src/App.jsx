import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import "./App.css";
import DashboardMainContent from "./components/DashboardOverview/DashboardMainContent";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-scrollable">
  <DashboardMainContent />
</div>

      </div>
    </div>
  );
}

export default App;
