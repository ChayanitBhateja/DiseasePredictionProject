/// Menu
import MetisMenu from "metismenujs";
import React, { Component } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";

import userManagementImg from "../../../images/theme/user-management.svg";

import upcomingmatchimg from "../../../images/theme/upcoming-match.svg";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {}
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}
const loginAs = localStorage.getItem("loginAs");

class SideBar extends Component {
  /// Open menu
  componentDidMount() {
    // sidebar open/close

    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);
  }
  state = {
    loveEmoji: false,
  };
  render() {
    /// Path
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];

    /// Active menu
    let dashBoard = [
        "",
        "analytics",
        "events",
        "order-list",
        "general-customers",
        "reviews",
        "task",
      ],
      dashBoardHome = ["dashboardhome"],
      usermanagement = ["user-management"],
      transactions = ["transactions"],
      poolingsystem = ["poolingsystem"],
      promobanner = ["promobanner"],
      setting = ["setting"],
      tiproom = ["tiproom"],
      inapppurchase = ["inapppurchase"],
      matchLeaderboard = ["matchleaderboard"],
      upcomingmatches = ["upcomingmatches"],
      patientList = ["patient-list"],
      prediction = ["prediction"],
      allpatientList = ["all-patient-list"],
      adminDashboard = ["admin-dashboard"],
      patientDashboard = ["patient-dashboard"],
      doctorDashboard = ["doctor-dashboard"],
      nonConsultedPatientList = ["non-consulted-patient-list"],
      chatList = ["chat"],
      AcceptedPatients = ["accepted-patients"],
      patientsHome = ["patients-home"],
      blog = ["blog"],
      adminHome = ["admin-home"];

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
          <MM className="metismenu" id="menu">
            {/* <li
              className={`${dashBoardHome.includes(path) ? "mm-active" : ""}`}
            >
              <Link
                to="dashboardhome"
                className="ai-icon d-flex align-items-center"
              >
                <i>
                  <img
                    src={Dashboardimg}
                    style={{ width: "20px", height: "21px" }}
                  />
                </i>
                <span className="nav-text">Dashboard</span>
              </Link>
            </li> */}

            {loginAs === "Patient" && (
              <li className={`${blog.includes(path) ? "mm-active" : ""}`}>
                <Link to="blog" className="ai-icon d-flex align-items-center">
                  <i>
                    <img
                      src={userManagementImg}
                      style={{ width: "20px", height: "21px" }}
                    />
                  </i>
                  <span className="nav-text">Blog</span>
                </Link>
              </li>
            )}
            {loginAs === "Patient" && (
              <li
                className={`${patientsHome.includes(path) ? "mm-active" : ""}`}
              >
                <Link
                  to="patients-home"
                  className="ai-icon d-flex align-items-center"
                >
                  <i>
                    <img
                      src={upcomingmatchimg}
                      style={{ width: "20px", height: "21px" }}
                    />
                  </i>
                  <span className="nav-text">Patients Home</span>
                </Link>
              </li>
            )}
            {/* {loginAs === "Patient" && (
              <li
                className={`${
                  patientDashboard.includes(path) ? "mm-active" : ""
                }`}
              >
                <Link
                  to="patient-dashboard"
                  className="ai-icon d-flex align-items-center"
                >
                  <i>
                    <img
                      src={userManagementImg}
                      style={{ width: "20px", height: "21px" }}
                    />
                  </i>
                  <span className="nav-text">Patient Dashboad</span>
                </Link>
              </li>
            )}{" "} */}
            {loginAs === "Doctor" && (
              <li
                className={`${
                  doctorDashboard.includes(path) ? "mm-active" : ""
                }`}
              >
                <Link
                  to="doctor-dashboard"
                  className="ai-icon d-flex align-items-center"
                >
                  <i>
                    <img
                      src={userManagementImg}
                      style={{ width: "20px", height: "21px" }}
                    />
                  </i>
                  <span className="nav-text">Doctor Dashboad</span>
                </Link>
              </li>
            )}
            {(loginAs === "Patient" || loginAs === "Doctor") && (
              <li className={`${chatList.includes(path) ? "mm-active" : ""}`}>
                <Link to="chat" className="ai-icon d-flex align-items-center">
                  <i>
                    <img
                      src={userManagementImg}
                      style={{ width: "20px", height: "21px" }}
                    />
                  </i>
                  <span className="nav-text">Document</span>
                </Link>
              </li>
            )}
            {/* <li
              className={`${usermanagement.includes(path) ? "mm-active" : ""}`}
            >
              <Link
                to="user-management"
                className="ai-icon d-flex align-items-center"
              >
                <i>
                  <img
                    src={userManagementImg}
                    style={{ width: "20px", height: "21px" }}
                  />
                </i>
                <span className="nav-text">Patient Documents</span>
              </Link>
            </li> */}
            {/* <li>
              <Link className="ai-icon d-flex align-items-center">
                <i>
                  <img
                    src={userManagementImg}
                    style={{ width: "20px", height: "21px" }}
                  />
                </i>
                <span className="nav-text">Chats</span>
              </Link>
            </li> */}
            {loginAs === "Patient" && (
              <li className={`${prediction.includes(path) ? "mm-active" : ""}`}>
                <Link
                  to="prediction"
                  className="ai-icon d-flex align-items-center"
                >
                  <i>
                    <img
                      src={userManagementImg}
                      style={{ width: "20px", height: "21px" }}
                    />
                  </i>
                  <span className="nav-text">Prediction</span>
                </Link>
              </li>
            )}

            {loginAs === "Doctor" && (
              <li
                className={`${patientList.includes(path) ? "mm-active" : ""}`}
              >
                <Link
                  to="patient-list"
                  className="ai-icon d-flex align-items-center"
                >
                  <i>
                    <img
                      src={userManagementImg}
                      style={{ width: "20px", height: "21px" }}
                    />
                  </i>
                  <span className="nav-text">Patient List</span>
                </Link>
              </li>
            )}
            {loginAs === "Doctor" && (
              <li
                className={`${
                  AcceptedPatients.includes(path) ? "mm-active" : ""
                }`}
              >
                <Link
                  to="accepted-patients"
                  className="ai-icon d-flex align-items-center"
                >
                  <i>
                    <img
                      src={userManagementImg}
                      style={{ width: "20px", height: "21px" }}
                    />
                  </i>
                  <span className="nav-text">Accepted Patients</span>
                </Link>
              </li>
            )}
            {loginAs === "Doctor" && (
              <li
                className={`${
                  nonConsultedPatientList.includes(path) ? "mm-active" : ""
                }`}
              >
                <Link
                  to="non-consulted-patient-list"
                  className="ai-icon d-flex align-items-center"
                >
                  <i>
                    <img
                      src={userManagementImg}
                      style={{ width: "20px", height: "21px" }}
                    />
                  </i>
                  <span className="nav-text">Non consulted P. L</span>
                </Link>
              </li>
            )}
            {/* {loginAs === "Admin" && (
              <li className={`${adminHome.includes(path) ? "mm-active" : ""}`}>
                <Link
                  to="admin-home"
                  className="ai-icon d-flex align-items-center"
                >
                  <i>
                    <img
                      src={userManagementImg}
                      style={{ width: "20px", height: "21px" }}
                    />
                  </i>
                  <span className="nav-text">All Doctor List</span>
                </Link>
              </li>
            )} */}
            {loginAs === "Admin" && (
              <li
                className={`${
                  allpatientList.includes(path) ? "mm-active" : ""
                }`}
              >
                <Link
                  to="all-patient-list"
                  className="ai-icon d-flex align-items-center"
                >
                  <i>
                    <img
                      src={userManagementImg}
                      style={{ width: "20px", height: "21px" }}
                    />
                  </i>
                  <span className="nav-text">Patient List</span>
                </Link>
              </li>
            )}
            {loginAs === "Admin" && (
              <li
                className={`${
                  adminDashboard.includes(path) ? "mm-active" : ""
                }`}
              >
                <Link
                  to="admin-dashboard"
                  className="ai-icon d-flex align-items-center"
                >
                  <i>
                    <img
                      src={userManagementImg}
                      style={{ width: "20px", height: "21px" }}
                    />
                  </i>
                  <span className="nav-text">Admin Dashboad</span>
                </Link>
              </li>
            )}
          </MM>
        </PerfectScrollbar>
      </div>
    );
  }
}

export default SideBar;
