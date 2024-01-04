import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Modal } from "react-bootstrap";
import card1 from "../../images/task/img1.jpg";
import LogoutPage from "../layouts/nav/Logout";
import dummyProfile from "../../images/img/dummy-profile.png";
import {
  consultDoctor,
  getAdmin,
  getPatientEditProfile,
  patientHomeApi,
  removeDoctor,
} from "../../services/AuthService";
import { ToastContainer, toast } from "react-toastify";
import ChangePassword from "../components/ChangePassword";
import EditProfile from "../components/EditProfile";
import DeleteProfile from "../components/DeleteProfile";
import ChatModal from "../components/ChatModal";

export default function PatientHome() {
  const [changePasswordShow, setChangePasswordShow] = useState(false);
  const [editProfileModal, setEditProfileModal] = useState(false);
  const [deleteProfileModal, setDeleteProfileModal] = useState(false);
  const [chatShow, setChatShow] = useState(false);
  const [doctorId, setDoctorId] = useState("");
  const [doctorDetail, setDoctorDetail] = useState([]);
  const [name, setName] = useState("");
  const [prediction, setPrediction] = useState("");

  const [email, setEmail] = useState("");
  const [patientId, setPatientId] = useState("");
  const [chatModalShow, setChatModalShow] = useState(false);
  const [loader, setLoader] = useState(false);
  const [search, setSearch] = useState("");
  const [pic, setPic] = useState("");
  const loginAs = localStorage.getItem("loginAs");

  const notifyTopRight = () => {
    toast.success("✅ Success !", {
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
  function patientHomeApiData(search) {
    patientHomeApi(search)
      .then((response) => {
        setLoader(false);
        setDoctorDetail(response.data.data.doctor);
        console.log(response, "patientHomeApi patientHomeApi");
      })
      .catch((error) => {
        setLoader(false);
        // setApiError(error.response);
      });
  }

  useEffect(() => {
    console.log("first");
    setLoader(true);
    patientHomeApiData(search);
  }, [search]);
  function consultDoc(id) {
    consultDoctor(id)
      .then((response) => {
        console.log(response, "consultDoc consultDoc");
        patientHomeApiData(search);
        notifyTopRight();
      })
      .catch((error) => {
        // setApiError(error.response);
        notifyError();
      });
  }
  function removeDoc(id) {
    removeDoctor(id)
      .then((response) => {
        // setDoctorDetail(response.data.data)
        console.log(response, "removeDoctor removeDoctor");
        notifyTopRight();
        patientHomeApiData(search);
      })
      .catch((error) => {
        // setApiError(error.response);
        notifyError();
      });
  }
  function getProfile() {
    getPatientEditProfile()
      .then((response) => {
        console.log(response, "edit profile getmmmmmmmmm");
        setPrediction(response.data.data);
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
  useEffect(() => {
    getAdmin().then((res) => {
      console.log(res, "fffff admin");
      setDoctorId(res.data.data._id);
    });
  }, []);
  return (
    <>
      <ChatModal
        show={chatModalShow}
        close={() => setChatModalShow(false)}
        patientId={patientId}
      />
      {chatShow && doctorId && (
        <ChatModal
          show={chatShow}
          close={() => setChatShow(false)}
          patientId={doctorId}
        />
      )}
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
      <div className="d-flex justify-content-between mb-5 card flex-row p-3 align-items-center">
        {loader ? (
          <h5>Loading...</h5>
        ) : (
          <div className="d-flex align-items-center">
            {(pic === "" || pic === undefined) && (
              <img
                src={dummyProfile}
                style={{ width: "50px" }}
                className="mr-3"
              />
            )}
            {pic !== "" && pic !== undefined && (
              <img
                src={`http://localhost:5000${pic}`}
                style={{ width: "50px" }}
                className="mr-3"
              />
            )}

            <div>
              <p className="mb-0">{name} </p>
              <p className="mb-0">{email}</p>
              {prediction?.prediction !== undefined &&
                prediction?.prediction === 0 && (
                  <p className="mb-0">Not prone to Heart Disease</p>
                )}
              {prediction?.prediction !== undefined &&
                prediction?.prediction === 1 && (
                  <p className="mb-0"> Prone to Heart Disease</p>
                )}
              <div className="d-flex">
                <p className="mr-2">Probability :</p>
                {prediction?.probability !== undefined && (
                  <p>{prediction?.probability} %</p>
                )}
              </div>
            </div>
          </div>
        )}

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
              onClick={() => {
                setChatShow(true);
              }}
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
              <span className="ml-2">Contact Admin </span>
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
      </div>
      {/* <div
        className="row d-flex justify-content-between ml-1 mb-4"
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
      </div> */}
      {/* {loader ? (
        <h2>Loading...</h2>
      ) : (
        <div className="d-flex" style={{ flexWrap: "wrap" }}>
          {doctorDetail?.map((item) => (
            <div
              key={item._id}
              className="col-xl-3 col-xxl-4 col-lg-6 col-md-6 col-sm-6"
            >
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

                <div className="card-header align-items-start">
                  <div>
                    <h6 className="fs-16 font-w500">
                      <Link to={"#"} className="text-black user-name">
                        {item.name}
                      </Link>
                    </h6>
                    <h6 className="fs-16 font-w500 text-black user-name">
                      {item.email}
                    </h6>

                    <p>specialist : {item.specialist}</p>
                  </div>
                </div>
                <div className="card-body p-0 pb-3">
                  <ul className="list-group list-group-flush d-flex">
                    {!item.accepted && (
                      <button
                        className="bg-primary border-0 py-2 text-white"
                        onClick={() => consultDoc(item._id)}
                      >
                        Consult
                      </button>
                    )}
                    {item.accepted && (
                      <div>
                        <button
                          className="bg-success border-0 py-2 text-white w-50"
                          onClick={() => {
                            setChatModalShow(true);
                            setPatientId(item._id);
                          }}
                        >
                          Chat
                        </button>
                        <button
                          className="bg-primary  border-0 py-2 text-white w-50"
                          onClick={() => removeDoc(item._id)}
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          {doctorDetail.length === 0 && <h3>No doctor available!</h3>}
        </div>
      )} */}
    </>
  );
}
