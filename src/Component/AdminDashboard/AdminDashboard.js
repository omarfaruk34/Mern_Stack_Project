import React, { useState } from "react";
import "./Admindashboard.css";
import { MdPayment } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { FaFirstOrderAlt } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai";
import { AiOutlineFolderView } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { MdUpcoming } from "react-icons/md";

import { Link } from "react-router-dom";
import Orders from "../Orders/Orders";
import Payment from "../Payment/Payment";
import ReviewPost from "../ReviewPost/ReviewPost";
import Dashboard from "../Dashboard/Dashboard";
import AddCar from "../AddCar/AddCar";
import Message from "../Message/Message";
import Manageorders from "../Manage-order/Manage-order";
import useAuth from "../../Hooks/useAuth";
import AllCars from "../AllCars/AllCars";
import AddUpcomingCar from "../AddUpcomingCar/AddUpcomingCar";
import UserProfile from "../UserProfile/UserProfile";
import Your_Review from "../Your_Review/Your_Review";

export default function AdminDashboard() {
  const { admin } = useAuth();
  const [activeTab, setActiveTab] = useState("dashboard");
  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <div className="side-nav" style={{ backgroundColor: "#333" }}>
          <div className="logobar">

          </div>

          <ul className="text-light list-unstyled">
            {admin && (
              <li className="" onClick={() => setActiveTab("dashboard")}>
                <span>
                  <MdOutlineDashboard />
                </span>
                Dashboard
              </li>
            )}

            {admin && (
              <li className="" onClick={() => setActiveTab("payment")}>
                <span>
                  <MdPayment />
                </span>
                Payment
              </li>
            )}

            {admin && (
              <li className="" onClick={() => setActiveTab("addcar")}>
                <span>
                  <AiFillFileAdd />
                </span>
                Add Car
              </li>
            )}


            {admin && (
              <li className="" onClick={() => setActiveTab("manageorders")}>
                <span>
                  <AiOutlineFolderView />
                </span>
                Manage All Orders
              </li>
            )}





            {admin && (
              <li onClick={() => setActiveTab("allcars")}>
                <span>
                  <AiOutlineFolderView />
                </span>
                All Cars
              </li>
            )}

        
              <li onClick={() => setActiveTab("review")}>
                <span>
                  <MdReviews />
                </span>
                Review
              </li>
            

            {/* <li onClick={() => setActiveTab("users")}>
              <span>
                <FaUsers />
              </span>
              Users Profile{" "}
            </li> */}

            <li onClick={() => setActiveTab("orders")}>
              <span>
                <FaFirstOrderAlt />
              </span>
              Orders
            </li>

            {/* <li onClick={() => setActiveTab("yourreview")}>
              <span>
                <MdReviews />
              </span>
              Your Review
            </li> */}


            {admin && (
              <li onClick={() => setActiveTab("message")}>
                <span>
                  <AiFillMessage />
                </span>
                View all message{" "}
                <span className="badge bg-danger mx-1 fs-5">4</span>
              </li>
            )}
            {admin && (
              <li onClick={() => setActiveTab("upcoming")}>
                <span>
                  <MdUpcoming />
                </span>
                Upcoming Car{" "}
              </li>
            )}





            {/* <li onClick={() => setActiveTab("message")}><span><AiFillMessage/></span>View all message</li> */}
          </ul>
        </div>
        <div className="side-content">
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "payment" && <Payment />}
          {activeTab === "review" && <ReviewPost />}
          {activeTab === "orders" && <Orders />}
          {activeTab === "addcar" && <AddCar />}
          {activeTab === "message" && <Message />}
          {activeTab === "manageorders" && <Manageorders />}
          {activeTab === "allcars" && <AllCars />}
          {activeTab === "upcoming" && <AddUpcomingCar />}
          {/* {activeTab === "users" && <UserProfile />} */}
          {/* {activeTab === "yourreview" && <Your_Review />} */}
        </div>
      </div>
    </div>
  );
}
