// src/components/DashboardOverview/DashboardOverview.jsx
import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import { anatomyIndicators} from "../../data/healthData";
import "./DashboardOverview.css";

const DashboardOverview = () => {
  return (
    <div className="dashboard-overview">
      <AnatomySection indicators={anatomyIndicators} />
    </div>
  );
};

export default DashboardOverview;
