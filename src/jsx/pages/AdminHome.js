


import React, { useState, useRef, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Badge, Dropdown } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { adminBlockDoctor, approveDoctor, blockUser, deleteDoctor, deleteUser, getAllDoctor, user } from "../../services/AuthService";
import moment from "moment";
import { Row, Col, Card, Button, Tab, Nav } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { AWS_PHOTO_BASE_URL } from "../pages/test";
import card1 from "../../images/task/img1.jpg";
import ChangePassword from "../components/ChangePassword";
import LogoutPage from "../layouts/nav/Logout";
import DoctorDetails from "../components/DoctorDetails";

const AdminHome = () => {
    const [changePasswordShow, setChangePasswordShow] = useState(false);

    const [pageCount, setpageCount] = useState(1);
    const [pageNumber, setPageNumber] = useState(0);
    const [doctorId, setDoctorId] = useState("");
    const [search, setSearch] = useState("");
    const [toggle, setToggle] = useState(0)
    let limit = 8;
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
        toast.success("✅ success!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const notifyError = (value) => {
        toast.error(`❌ Error ${value}!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    // doctorDetail

    function approveApi(id) {
        approveDoctor(id).then((response) => {
            console.log(response, "user data approve response");
            notifyTopRight();
            allDoctor(search);
        }).catch((error) => {
            if (error.response.data.statusCode === 401) {
                notifyError(error.response.data.message);
            }
            if (error.response.data.statusCode === 500) {
                notifyError(error.response.data.message);
            }
        })
    }

    function deleteDoctorByAdmin(id) {
        deleteDoctor(id).then((response) => {
            console.log(response, "user data delete         response");
            notifyTopRight();
            allDoctor(search);
        }).catch((error) => {
            if (error.response.data.statusCode === 401) {
                notifyError(error.response.data.message);
            }
            if (error.response.data.statusCode === 500) {
                notifyError(error.response.data.message);
            }
        })
    }

    function adminBlock(id) {

        adminBlockDoctor(id, toggle).then((response) => {
            console.log(response, "user data block response");
            notifyTopRight();
            allDoctor(search);
        }).catch((error) => {
            if (error.response.data.statusCode === 401) {
                notifyError(error.response.data.message);
            }
            if (error.response.data.statusCode === 500) {
                notifyError(error.response.data.message);
            }
        })
    }
    const handlePageClick = async (data) => {
        console.log(data.selected);

        let currentPage = data.selected;
        setPageNumber(currentPage);
    };
    function allDoctor(search, limit, pageNumber) {
        getAllDoctor(search, limit, pageNumber).then((response) => {
            console.log(response, "all doctor")
            setUsers(response.data.data.doctor);
            const total = response.data.data.count;
            setpageCount(Math.ceil(total / limit));
        });
    }
    useEffect(() => {
        // setLoader(true);
        if (search.length > 0) {
            allDoctor(search, limit, 0)
        }
        else {
            allDoctor(search, limit, pageNumber)


        }

    }, [search, limit, pageNumber]);
    return (
        <Fragment>

            <DoctorDetails
                show={changePasswordShow}
                close={() => setChangePasswordShow(false)}
                id={doctorId}
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
            <div className="page-titles">
                <h4>Doctor List</h4>
            </div>
            <Card>
                <Card.Header className="d-flex justify-content-between align-items-center flex-column flex-sm-row">

                    <div className="row d-flex justify-content-between " style={{ flexGrow: 1 }}>
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
                                        // onKeyDown={(e) => {
                                        //   console.log(e.key);
                                        //   if (e.key === "Enter") {
                                        //     handleFetch();
                                        //     // setCurrentPage(0);
                                        //   }
                                        // }}
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

                    {/* <div>
            <Button
              className=""
              variant="outline-primary"
              onClick={() => setCreateBanner(true)}
            >
              Upload Document
            </Button>
          </div> */}
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
                                    <strong>Admin</strong>
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

                            <p style={{ cursor: "pointer" }}
                            >             <LogoutPage />


                            </p>
                        </Dropdown.Menu>
                    </Dropdown>
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


                                                <th
                                                    className="sorting"
                                                    tabIndex={0}
                                                    aria-controls="example5"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: "150.3333px" }}
                                                >
                                                    Specialist
                                                </th>
                                                <th
                                                    className="sorting"
                                                    tabIndex={0}
                                                    aria-controls="example5"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: "150.3333px" }}
                                                >
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {users?.map((item) => (
                                                <tr key={item._id} role="row" className="odd">
                                                    <td>
                                                        <img
                                                            src={card1}
                                                            style={{ height: "60px", width: "60px" }}
                                                        />
                                                    </td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>
                                                        {item.specialist}
                                                    </td>
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
                                                                        approveApi(item._id);
                                                                        //   setEditUserModal(true);
                                                                    }}
                                                                >
                                                                    Approve
                                                                </Dropdown.Item>
                                                                <Dropdown.Item
                                                                    onClick={() => {
                                                                        setChangePasswordShow(true);
                                                                        setDoctorId(item._id)
                                                                    }}
                                                                >
                                                                    View Details
                                                                </Dropdown.Item>
                                                                <Dropdown.Item
                                                                    onClick={() => {
                                                                        adminBlock(item._id);
                                                                        setToggle(prev => prev === 0 ? 1 : 0);
                                                                    }}
                                                                >
                                                                    Block
                                                                </Dropdown.Item>
                                                                <Dropdown.Item
                                                                    onClick={() => {

                                                                        deleteDoctorByAdmin(item._id)
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

export default AdminHome;


