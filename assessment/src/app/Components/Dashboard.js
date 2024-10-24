import React from "react";
import CenterDashboard from "./CenterDashboard";
import LeftDashboard from "./LeftDashboard";


const Dashboard = () =>{
    return(
        <React.Fragment>
               <div className="container mx-auto py-12 px-6 flex justify-between space-x-12">
               <div className="w-1/4">
        <LeftDashboard />
      </div>
      <div className="w-1/2 flex justify-center">
        <CenterDashboard />
      </div>
    </div>
        </React.Fragment>
    );
}


export default Dashboard;