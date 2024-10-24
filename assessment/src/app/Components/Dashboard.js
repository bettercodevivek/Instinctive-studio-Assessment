import React from "react";
import CenterDashboard from "./CenterDashboard";
import LeftDashboard from "./LeftDashboard";
import RightDashboard from "./RightDashboard";


const Dashboard = () =>{
    return(
        <React.Fragment>
               <div className="container mx-auto py-12 px-16 flex justify-between space-x-12">
               <div className="">
        <LeftDashboard />
      </div>
      <div className="flex justify-center">
        <CenterDashboard />
      </div>
      <div className="">
        <RightDashboard />
      </div>
    </div>
        </React.Fragment>
    );
}


export default Dashboard;