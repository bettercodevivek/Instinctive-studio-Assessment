import React from "react";
import CenterDashboard from "./CenterDashboard";
import LeftDashboard from "./LeftDashboard";
import RightDashboard from "./RightDashboard";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto py-12 px-8 flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-12 justify-between">
        {/* LeftDashboard (Announcements and Class Schedule) */}
        <div className="flex-1 flex flex-col order-1 sm:order-1">
          <LeftDashboard />
        </div>

        {/* CenterDashboard (Quick Links) */}
        <div className="flex-1 flex flex-col order-2 sm:order-2">
          <CenterDashboard />
        </div>

        {/* RightDashboard (Access Class Recordings) */}
        <div className="flex-1 flex flex-col order-4 sm:order-3">
          <RightDashboard />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
