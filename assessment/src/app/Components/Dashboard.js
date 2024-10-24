import React from "react";
import CenterDashboard from "./CenterDashboard";
import LeftDashboard from "./LeftDashboard";
import RightDashboard from "./RightDashboard";


const Dashboard = () =>{
    return(
        <React.Fragment>
               <div className="container mx-auto py-12 px-16 flex flex-col sm:flex-row justify-between space-x-12">
               <div className="flex-1 flex">
        <LeftDashboard />
      </div>
      <div className="flex flex-1 justify-center">
        <CenterDashboard />
      </div>
      <div className="flex flex-1">
        <RightDashboard />
      </div>
    </div>
        </React.Fragment>
    );
}


export default Dashboard;