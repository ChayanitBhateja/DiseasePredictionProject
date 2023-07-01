import React, { useState, useRef, useEffect, Fragment } from "react";
import { Badge, Dropdown } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import {
  getAllRequestPatient,
  getDoctorEditProfile,
  patientsResponseApi,
  user,
} from "../../services/AuthService";

import { Row, Col, Card, Button, Tab, Nav } from "react-bootstrap";

import ChangePassword from "../components/ChangePassword";
import DeleteProfile from "../components/DeleteProfile";
import EditProfile from "../components/EditProfile";
import LogoutPage from "../layouts/nav/Logout";
import dummyProfile from "../../images/img/dummy-profile.png";

const PatientsList = () => {
  const [userName, setUserName] = useState("");
  const [editeUserModal, setEditUserModal] = useState(false);
  const [changePasswordShow, setChangePasswordShow] = useState(false);
  const [editProfileModal, setEditProfileModal] = useState(false);
  const [deleteProfileModal, setDeleteProfileModal] = useState(false);

  // console.log(userName, "kkkk");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userType, setUserType] = useState("user");
  const [createDate, setCreateDate] = useState("");
  const [userId, setUserId] = useState("");
  const [pageCount, setpageCount] = useState(1);
  const [pageNumber, setPageNumber] = useState(0);
  const loginAs = localStorage.getItem("loginAs");
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [pic, setPic] = useState("");

  let limit = 6;
  // console.log(userId, "kkkkk");
  const [users, setUsers] = useState([]);

  const svg1 = (
    <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect x="0" y="0" width="24" height="24"></rect>
        <circle fill="#000000" cx="5" cy="12" r="2"></circle>
        <circle fill="#000000" cx="12" cy="12" r="2"></circle>
        <circle fill="#000000" cx="19" cy="12" r="2"></circle>
      </g>
    </svg>
  );
  const notifyTopRight = () => {
    toast.success("✅  success !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const notifyError = () => {
    toast.error("❌ Error !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  function patientsResponse(id, response) {
    patientsResponseApi(id, response)
      .then((response) => {
        console.log(response, "user data delete response");

        notifyTopRight();
      })
      .catch((error) => {
        notifyError();
      });
  }

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected;
    setPageNumber(currentPage);
  };
  useEffect(() => {
    // setLoader(true);
    getAllRequestPatient().then((response) => {
      console.log(response, "all noooo");
      setUsers(response.data.data.patientRequest);
      // const total = response.data.data.count;
      // setpageCount(Math.ceil(total / limit));
    });
  }, []);
  function getProfile() {
    getDoctorEditProfile()
      .then((response) => {
        console.log(response, "edit profile get");
        setEmail(response.data.data.email);
        setName(response.data.data.name);
        setPic(response.data.data.profilePic);
      })
      .catch((error) => {
        console.log(error, "edit profile get");
      });
  }
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <Fragment>
      <ChangePassword
        show={changePasswordShow}
        close={() => setChangePasswordShow(false)}
      />
      <DeleteProfile
        show={deleteProfileModal}
        close={() => setDeleteProfileModal(false)}
      />
      <EditProfile
        show={editProfileModal}
        close={() => setEditProfileModal(false)}
        data={() => getProfile()}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="">
        <Card.Title>Patient List</Card.Title>
      </div>
      <Card>
        <Card.Header className="d-flex card justify-content-between align-items-center flex-column flex-sm-row">
          <div className="d-flex align-items-center">
            {pic === "" && (
              <img
                src={dummyProfile}
                style={{ width: "50px" }}
                className="mr-3"
              />
            )}

            <img
              src={`http://localhost:5000${pic}`}
              style={{ width: "50px" }}
              className="mr-3"
            />

            <div>
              <p className="mb-0">{name} </p>
              <p className="mb-0">{email}</p>
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
                  <strong>{loginAs}</strong>
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
                style={{ cursor: "pointer" }}
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
              <p
                className="dropdown-item ai-icon"
                style={{ cursor: "pointer" }}
                onClick={() => setEditProfileModal(true)}
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
                <span className="ml-2">Edit Profile </span>
              </p>
              <p
                className="dropdown-item ai-icon"
                style={{ cursor: "pointer" }}
                onClick={() => setDeleteProfileModal(true)}
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
                <span className="ml-2">Delete Profile </span>
              </p>
              <p style={{ cursor: "pointer" }}>
                {" "}
                <LogoutPage />
              </p>
            </Dropdown.Menu>
          </Dropdown>

          {/* <div>
            <Button
              className=""
              variant="outline-primary"
              onClick={() => setCreateBanner(true)}
            >
              Upload Document
            </Button>
          </div> */}
        </Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <div id="order_list" className="dataTables_wrapper no-footer">
                  {users.length > 0 && (
                    <table
                      id="example5"
                      className="display mb-4  dataTable no-footer w-100 "
                      style={{ minWidth: 845 }}
                      role="grid"
                      aria-describedby="example5_info"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="example5"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Customer Name: activate to sort column ascending"
                            style={{ width: "150.3333px" }}
                          >
                            Name
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="example5"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: "150.6667px" }}
                          >
                            Email
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {users?.map((item) => (
                          <tr key={item._id} role="row" className="odd">
                            <td>{item.name}</td>
                            <td>{item.email}</td>

                            <td>
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="info light"
                                  className="light sharp btn btn-info i-false"
                                >
                                  {svg1}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item
                                    onClick={() => {
                                      patientsResponse(item._id, "accept");
                                    }}
                                  >
                                    Accept
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    onClick={() => {
                                      patientsResponse(item._id, "reject");
                                    }}
                                  >
                                    Reject
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
              {users.length === 0 && <h3>No Request Available!</h3>}

              {/* {pageCount > 1 && (
                <ReactPaginate
                  previousLabel={"<"}
                  nextLabel={">"}
                  breakLabel={"..."}
                  pageCount={pageCount}
                  // marginPagesDisplayed={2}
                  // pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                  activeClassName={"active"}
                  forcePage={pageNumber}
                />
              )} */}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default PatientsList;
