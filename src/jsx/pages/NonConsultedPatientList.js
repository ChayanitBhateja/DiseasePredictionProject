import React, { useState, useRef, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Badge, Dropdown } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import {
  blockUser,
  deleteUser,
  getAllAcceptedPatient,
  getAllOtherPatient,
  getAllRequestPatient,
  patientsResponseApi,
  removePatient,
  user,
} from "../../services/AuthService";
import moment from "moment";
import { Row, Col, Card, Button, Tab, Nav } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { AWS_PHOTO_BASE_URL } from "../pages/test";
import card1 from "../../images/task/img1.jpg";
import ChangePassword from "../components/ChangePassword";
import DeleteProfile from "../components/DeleteProfile";
import EditProfile from "../components/EditProfile";
import LogoutPage from "../layouts/nav/Logout";
import ChatModal from "../components/ChatModal";
import PatientDetail from "../components/PatientDetail";

const NonConsultedPatientList = () => {
  const [changePasswordShow, setChangePasswordShow] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);

  const [pageCount, setpageCount] = useState(1);
  const [pageNumber, setPageNumber] = useState(0);
  const [patientId, setPatientId] = useState("");
  const [doctorId, setDoctorId] = useState("");

  const loginAs = localStorage.getItem("loginAs");
  const [search, setSearch] = useState("");

  let limit = 10;
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

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected;
    setPageNumber(currentPage);
  };
  function allPatientFunction(search, limit, pageNumber) {
    getAllOtherPatient(search, limit, pageNumber).then((response) => {
      console.log(response, "ient");
      setUsers(response.data.data.patients);
      const total = response.data.data.count;
      setpageCount(Math.ceil(total / limit));
    });
  }
  useEffect(() => {
    // setLoader(true);
    if (search.length > 0) {
      allPatientFunction(search, limit, pageNumber);
    } else {
      allPatientFunction(search, limit, pageNumber);
    }
  }, [search, limit, pageNumber]);
  return (
    <Fragment>
      {changePasswordShow && (
        <PatientDetail
          show={changePasswordShow}
          close={() => setChangePasswordShow(false)}
          id={doctorId}
        />
      )}

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
      <div className="page-titles">
        <h4> Non consulted Patient List</h4>
      </div>
      <Card>
        <Card.Header className="d-flex card justify-content-between align-items-center flex-column flex-sm-row">
          <div
            className="row d-flex justify-content-between "
            style={{ flexGrow: 1 }}
          >
            <div className="col-4">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  className="input-group border bg-white input-group-sm"
                  style={{ borderRadius: "8px" }}
                >
                  <input
                    style={{
                      paddingBottom: "25px",
                      paddingTop: "25px",
                      borderRadius: "10px",
                      fontSize: "14px",
                    }}
                    type="text"
                    name="table_search"
                    className="form-control float-right border-0"
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button
                      type="button"
                      className="btn btn-default"
                      // onClick={handleFetch}
                    >
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <div id="order_list" className="dataTables_wrapper no-footer">
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
                                    setChangePasswordShow(true);
                                    setDoctorId(item._id);
                                  }}
                                >
                                  View Profile
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

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
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default NonConsultedPatientList;
