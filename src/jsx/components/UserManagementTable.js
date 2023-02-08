import React, { useState, useRef, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Badge, Dropdown } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { blockUser, deleteUser, user } from "../../services/AuthService";
import EditUser from "./EditUser";
import moment from "moment";
import CreateUser from "./CreateUser";
import { Row, Col, Card, Button, Tab, Nav } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { AWS_PHOTO_BASE_URL } from "../pages/test";
const UserManagementTable = () => {
  const [createUserModal, setCreateUserModal] = useState(false);

  const [userName, setUserName] = useState("");
  const [editeUserModal, setEditUserModal] = useState(false);

  // console.log(userName, "kkkk");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userType, setUserType] = useState("user");
  const [createDate, setCreateDate] = useState("");
  const [userId, setUserId] = useState("");
  const [pageCount, setpageCount] = useState(1);
  const [pageNumber, setPageNumber] = useState(0);
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
    toast.success("✅ user successfully deleted !", {
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

  function deleteUserTipper(id) {
    deleteUser(id, userType).then((response) => {
      console.log(response, "user data delete response");
      user(
        userName,
        email,
        phoneNumber,
        userType,
        createDate,
        limit,
        pageNumber
      ).then((response) => {
        console.log(response, "user data response");
        setUsers(response.data.data.user);
      });
      notifyTopRight();
    });
  }
  function blockUserTipper(id) {
    blockUser(id, userType).then((response) => {
      console.log(response, "user data block response");
      user(
        userName,
        email,
        phoneNumber,
        userType,
        createDate,
        limit,
        pageNumber
      ).then((response) => {
        setUsers(response.data.data.user);
      });
    });
  }
  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected;
    setPageNumber(currentPage);
  };
  useEffect(() => {
    // setLoader(true);
    user(
      userName,
      email,
      phoneNumber,
      userType,
      createDate,
      limit,
      pageNumber
    ).then((response) => {
      setUsers(response.data.data.user);
      const total = response.data.data.count;
      setpageCount(Math.ceil(total / limit));
    });
  }, [userName, email, phoneNumber, userType, createDate, pageNumber]);
  return (
    <Fragment>
      <EditUser
        show={editeUserModal}
        close={() => setEditUserModal(false)}
        id={userId}
        table={() =>
          user(
            userName,
            email,
            phoneNumber,
            userType,
            createDate,
            limit,
            pageNumber
          ).then((response) => {
            console.log(response, "user data response");
            setUsers(response.data.data.user);
          })
        }
      />
      <CreateUser
        show={createUserModal}
        close={() => setCreateUserModal(false)}
        table={() =>
          user(
            userName,
            email,
            phoneNumber,
            userType,
            createDate,
            limit,
            pageNumber
          ).then((response) => {
            console.log(response, "user data response");
            setUsers(response.data.data.user);
          })
        }
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

      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center flex-column flex-sm-row">
          <div>
            <Card.Title>User Management</Card.Title>
          </div>
          <div>
            <Button
              className=""
              variant="outline-primary"
              onClick={() => setCreateUserModal(true)}
            >
              Create User
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-12">
              <div>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="form-group">
                      <label className="mb-2 ">
                        <strong className="">User Name</strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="form-group">
                      <label className="mb-2 ">
                        <strong className="">Email</strong>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="form-group">
                      <label className="mb-2 ">
                        <strong className="">Phone Number</strong>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="form-group">
                      <label className="mb-2 ">
                        <strong className="">User Type</strong>
                      </label>
                      <select
                        defaultValue="tipper"
                        name="emailstatus"
                        className="form-control"
                        onClick={(e) => setUserType(e.target.value)}
                      >
                        <option value="user">Better</option>
                        <option value="tipper">Tipper</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="form-group">
                      <label className="mb-2 ">
                        <strong className=""> select Date</strong>
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        onChange={(e) =>
                          setCreateDate(
                            moment(e.target.value).format("DD-MM-YYYY")
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <button
                    className="btn btn-primary mr-3 "
                    onClick={() => user()}
                  >
                    Search
                  </button>
                  <button type="submit" className="btn btn-primary ">
                    Clear
                  </button>
                </div>
              </div>
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
                          style={{ width: "85.3333px" }}
                        >
                          Photo
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: "80.6667px" }}
                        >
                          Username
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: "90px" }}
                        >
                          Email Id
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: "80px" }}
                        >
                          Phone Number
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: "89.3333px" }}
                        >
                          Create Date
                        </th>

                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: "89.3333px" }}
                        >
                          Status
                        </th>

                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: "89.3333px" }}
                        >
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {users.map((item) => (
                        <tr key={item._id} role="row" className="odd">
                          <td>
                            <img
                              src={AWS_PHOTO_BASE_URL + item.profileImage}
                              style={{ height: "60px", width: "60px" }}
                            />
                          </td>
                          <td>{item.userName}</td>
                          <td>{item.email}</td>
                          <td>{item.phoneNumber}</td>
                          <td>{item.createdAt}</td>
                          <td>
                            {item.isBlocked === true ? (
                              <Badge variant="danger light">Block</Badge>
                            ) : (
                              <Badge variant="success light">Active</Badge>
                            )}
                          </td>

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
                                    setUserId(item._id);
                                    setEditUserModal(true);
                                  }}
                                >
                                  Edit
                                </Dropdown.Item>
                                <Dropdown.Item
                                  onClick={() => {
                                    blockUserTipper(item._id);
                                  }}
                                >
                                  Block
                                </Dropdown.Item>
                                <Dropdown.Item
                                  onClick={() => {
                                    deleteUserTipper(item._id);
                                  }}
                                >
                                  Delete
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

              {pageCount > 1 && (
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
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default UserManagementTable;
