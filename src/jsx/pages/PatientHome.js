import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Modal } from "react-bootstrap";
import card1 from "../../images/task/img1.jpg";
import LogoutPage from "../layouts/nav/Logout";
import dummyProfile from "../../images/img/dummy-profile.png";
import { consultDoctor, patientHomeApi } from "../../services/AuthService";
import { ToastContainer, toast } from "react-toastify";
import ChangePassword from "../components/ChangePassword";
import EditProfile from "../components/EditProfile";

export default function PatientHome() {
  const [changePasswordShow, setChangePasswordShow] = useState(false);
  const [editProfileModal, setEditProfileModal] = useState(false);

  const [doctorDetail, setDoctorDetail] = useState([]);
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

  useEffect(() => {
    console.log("first")
    patientHomeApi().then((response) => {
      setDoctorDetail(response.data.data)
      console.log(response)

    })
      .catch((error) => {
        // setApiError(error.response);
      });
  }, [])
  function consultDoc(id) {
    consultDoctor(id).then((response) => {
      // setDoctorDetail(response.data.data)
      console.log(response, "lllll")
      notifyTopRight();
    })
      .catch((error) => {
        // setApiError(error.response);
        notifyError()
      });
  }
  return (
    <>

      <ChangePassword
        show={changePasswordShow}
        close={() => setChangePasswordShow(false)}
      />
      <EditProfile
        show={editProfileModal}
        close={() => setEditProfileModal(false)}
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
      <div className="d-flex justify-content-between mb-5 card flex-row p-3">
        <div className="d-flex align-items-center">
          <img src={dummyProfile} style={{ width: "50px" }} className="mr-3" />
          <div>
            <p className="mb-0">{localStorage.getItem("name")} </p>
            <p className="mb-0">{localStorage.getItem("email")}</p>
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
            <p className="dropdown-item ai-icon" style={{ cursor: "pointer" }}
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
            <p className="dropdown-item ai-icon" style={{ cursor: "pointer" }}
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
            <p style={{ cursor: "pointer" }}
            >             <LogoutPage />


            </p>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {doctorDetail?.map((item) => (
        <div key={item._id} className="col-xl-3 col-xxl-4 col-lg-6 col-md-6 col-sm-6">
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
                    {item.name}
                  </Link>
                </h6>
                <p>specialist : {item.specialist}</p>
              </div>

            </div>
            <div className="card-body p-0 pb-3">
              <ul className="list-group list-group-flush">
                <button className="bg-primary border-0 py-2 text-white" onClick={() => consultDoc(item._id)}>
                  Consult
                </button>
              </ul>
            </div>
          </div>
        </div>
      ))}

    </>
  );
}
