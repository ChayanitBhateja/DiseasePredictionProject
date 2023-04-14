import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Modal } from "react-bootstrap";
import card1 from "../../images/task/img1.jpg";
import LogoutPage from "../layouts/nav/Logout";
import dummyProfile from "../../images/img/dummy-profile.png";
export default function PatientHome() {
  const [changePasswordShow, setChangePasswordShow] = useState(false);

  return (
    <>
      <div className="d-flex justify-content-between mb-5 card flex-row p-3">
        <div className="d-flex align-items-center">
          <img src={dummyProfile} style={{ width: "50px" }} className="mr-3" />
          <div>
            <p className="mb-0">Dhananjay </p>
            <p className="mb-0">dhananjay@gmail.com</p>
          </div>
        </div>

        <Dropdown
          as="li"
          className="nav-item dropdown header-profile bg-primary p-2 text-white"
          style={{ borderRadius: "10px" }}
        >
          <Dropdown.Toggle
            variant=""
            as="a"
            className="i-false c-pointer nav-link text-white"
            to=""
            role="button"
            data-toggle="dropdown"
          >
            <div className="header-info ">
              <span>
                <strong>Patient</strong>
              </span>
            </div>
            {/* <img src={profile} width={20} alt="" /> */}
          </Dropdown.Toggle>
          <Dropdown.Menu
            align="right"
            className="dropdown-menu dropdown-menu-right"
          >
            <p
              className="dropdown-item ai-icon"
              onClick={() => setChangePasswordShow(true)}
            >
              <svg
                id="icon-user1"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
              <span className="ml-2">Change Password </span>
            </p>
            <p className="dropdown-item ai-icon">
              <svg
                id="icon-user1"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
              <span className="ml-2">Edit Profile </span>
            </p>
            <p className="dropdown-item ai-icon">
              <svg
                id="icon-user1"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
              <span className="ml-2">Delete Profile </span>
            </p>

            <LogoutPage />
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="col-xl-3 col-xxl-4 col-lg-6 col-md-6 col-sm-6">
        <div
          className="card project-boxed"
          style={{ boxShadow: " 5px 10px 18px #888888" }}
        >
          <div className="img-bx">
            <img
              src={card1}
              alt=""
              className=" mr-3 card-list-img w-100"
              width="130"
            />
          </div>
          {/* <div className="d-flex pb-3 align-items-center">
								<img src={contact.image} alt="" className="rounded mr-3 card-list-img" width="130" /> 
								
							</div> */}
          <div className="card-header align-items-start">
            <div>
              <h6 className="fs-18 font-w500">
                <Link to={"#"} className="text-black user-name">
                  Dr. Suraj kumar
                </Link>
              </h6>
            </div>
            {/* <Dropdown className="">
              <Dropdown.Toggle variant="" as="div" className="btn-link i-false">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                    stroke="#342E59"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                    stroke="#342E59"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                    stroke="#342E59"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Dropdown.Toggle>
              <Dropdown.Menu alignRight={true} className="dropdown-menu-right">
                <Dropdown.Item
                  onClick={(event) => handleEditClick(event, contact)}
                >
                  Edit
                </Dropdown.Item>
                <Dropdown.Item
                  className="text-danger"
                  onClick={() => handleDeleteClick(contact.id)}
                >
                  Delete
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </div>
          <div className="card-body p-0 pb-3">
            <ul className="list-group list-group-flush">
              <button className="bg-primary border-0 py-2 text-white">
                Consult
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
