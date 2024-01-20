import React, { useEffect, useState } from "react";

import { Dropdown } from "react-bootstrap";

import LogoutPage from "../layouts/nav/Logout";
import dummyProfile from "../../images/img/dummy-profile.png";
import CountUp from "react-countup";

import {
  consultDoctor,
  getAdmin,
  getGraph,
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
  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
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
    getGraph()
      .then((response) => {
        setData(response.data.data.female_ratio);
        setData1(response.data.data.average_blood_pressure);
        setData2(response.data.data.average_age);

        console.log(response, " getmmmmmmmmm");
      })
      .catch((error) => {
        console.log(error, "edit profile get");
      });
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
          <>
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
          </>
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
      {/* <div className="card p-4">
        <div className="d-flex">
          <p className="mr-2 mb-0">Average age :</p>
          {data.average_age !== undefined && (
            <p>{data.average_age.toFixed(2)} </p>
          )}
        </div>
        <div className="d-flex">
          <p className="mr-2 mb-0">Average blood pressure :</p>
          {data.average_blood_pressure !== undefined && (
            <p>{data.average_blood_pressure.toFixed(2)} </p>
          )}
        </div>
        <div className="d-flex">
          <p className="mr-2 mb-0">Female ratio :</p>
          {data.female_ratio !== undefined && (
            <p>{data.female_ratio.toFixed(2)} </p>
          )}
        </div>
      </div> */}

      <div className="d-flex align-items-center">
        <div className="col-xl-4 col-xxl-4 col-lg-6 col-md-6 col-sm-6">
          <div className="widget-stat card">
            <div className="card-body p-4">
              <div className="media ai-icon">
                <span className="mr-3 bgl-primary text-primary">
                  {/* {/* <i class="ti-user"></i>  */}
                  <svg
                    width={32}
                    height={36}
                    viewBox="0 0 32 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.25 19.25C12.2389 19.25 13.2056 18.9568 14.0279 18.4074C14.8501 17.8579 15.491 17.0771 15.8694 16.1634C16.2478 15.2498 16.3469 14.2445 16.1539 13.2746C15.961 12.3046 15.4848 11.4137 14.7855 10.7145C14.0863 10.0152 13.1954 9.539 12.2255 9.34608C11.2555 9.15315 10.2502 9.25217 9.33658 9.6306C8.42295 10.009 7.64206 10.6499 7.09265 11.4722C6.54325 12.2944 6.25 13.2611 6.25 14.25C6.25129 15.5757 6.77849 16.8467 7.71589 17.7841C8.65329 18.7215 9.92431 19.2487 11.25 19.25ZM11.25 11.75C11.7445 11.75 12.2278 11.8966 12.6389 12.1713C13.05 12.446 13.3705 12.8365 13.5597 13.2933C13.7489 13.7501 13.7984 14.2528 13.702 14.7377C13.6055 15.2227 13.3674 15.6681 13.0178 16.0178C12.6681 16.3674 12.2227 16.6055 11.7377 16.702C11.2528 16.7984 10.7501 16.7489 10.2933 16.5597C9.83648 16.3705 9.44603 16.0501 9.17133 15.6389C8.89662 15.2278 8.75 14.7445 8.75 14.25C8.75089 13.5872 9.01457 12.9519 9.48322 12.4832C9.95187 12.0146 10.5872 11.7509 11.25 11.75Z"
                      fill="#2F4CDD"
                    />
                    <path
                      d="M30.78 22.4625C31.1927 21.9098 31.4684 21.2672 31.5844 20.5873C31.7005 19.9074 31.6537 19.2096 31.4478 18.5514L30.6543 15.9696C30.2817 14.7451 29.5244 13.6733 28.4946 12.9132C27.4648 12.1531 26.2174 11.7452 24.9375 11.75H19.3287C18.9971 11.75 18.6792 11.8817 18.4448 12.1161C18.2103 12.3505 18.0787 12.6685 18.0787 13C18.0787 13.3315 18.2103 13.6495 18.4448 13.8839C18.6792 14.1183 18.9971 14.25 19.3287 14.25H24.9375C25.6823 14.2474 26.4081 14.485 27.0073 14.9274C27.6064 15.3698 28.0471 15.9935 28.2639 16.706L29.0574 19.2866C29.145 19.5713 29.1645 19.8725 29.1145 20.1661C29.0645 20.4597 28.9463 20.7374 28.7694 20.977C28.5925 21.2166 28.3619 21.4114 28.0961 21.5456C27.8302 21.6799 27.5366 21.7499 27.2388 21.75H15.7777C15.7423 21.75 15.7127 21.7671 15.6777 21.7701C15.5937 21.7669 15.5125 21.75 15.4273 21.75H7.58978C6.20071 21.7449 4.84705 22.1879 3.72972 23.0132C2.61239 23.8385 1.79097 25.0021 1.3874 26.3312L0.454153 29.3625C0.236164 30.0719 0.187639 30.8225 0.31248 31.554C0.43732 32.2856 0.732043 32.9776 1.17296 33.5745C1.61388 34.1715 2.18869 34.6566 2.85119 34.9911C3.51369 35.3255 4.24541 35.4998 4.98753 35.5H18.0287C18.7708 35.4998 19.5026 35.3256 20.1652 34.9912C20.8277 34.6568 21.4026 34.1717 21.8436 33.5747C22.2845 32.9778 22.5793 32.2857 22.7042 31.5541C22.829 30.8226 22.7805 30.0719 22.5625 29.3625L21.6299 26.3315C21.3936 25.5767 21.0217 24.8713 20.5323 24.25H27.2388C27.9283 24.2532 28.6088 24.0928 29.2244 23.7821C29.8399 23.4714 30.3731 23.0191 30.78 22.4625ZM19.8328 32.089C19.6255 32.3726 19.3539 32.6031 19.0403 32.7614C18.7267 32.9198 18.38 33.0015 18.0287 33H4.98753C4.63653 32.9999 4.29043 32.9175 3.97708 32.7594C3.66373 32.6012 3.39187 32.3717 3.18337 32.0894C2.97487 31.807 2.83555 31.4796 2.77661 31.1336C2.71767 30.7876 2.74077 30.4326 2.84403 30.0971L3.77665 27.0661C4.02442 26.2489 4.52925 25.5335 5.21612 25.0261C5.90299 24.5188 6.73523 24.2466 7.58915 24.25H15.4267C16.2806 24.2466 17.1128 24.5188 17.7997 25.0261C18.4865 25.5335 18.9914 26.2489 19.2392 27.0661L20.1718 30.0971C20.2769 30.4323 20.301 30.7877 20.2421 31.134C20.1832 31.4804 20.0429 31.8078 19.8328 32.0894V32.089Z"
                      fill="#2F4CDD"
                    />
                    <path
                      d="M21.875 9.24999C22.7403 9.24999 23.5861 8.9934 24.3056 8.51267C25.0251 8.03194 25.5858 7.34866 25.917 6.54923C26.2481 5.74981 26.3347 4.87014 26.1659 4.02148C25.9971 3.17281 25.5804 2.39326 24.9686 1.78141C24.3567 1.16955 23.5772 0.752876 22.7285 0.584066C21.8798 0.415256 21.0002 0.501896 20.2008 0.833029C19.4013 1.16416 18.7181 1.72492 18.2373 2.44438C17.7566 3.16384 17.5 4.0097 17.5 4.875C17.5014 6.03489 17.9628 7.14688 18.7829 7.96705C19.6031 8.78722 20.7151 9.2486 21.875 9.24999ZM21.875 3C22.2458 3 22.6083 3.10997 22.9167 3.31599C23.225 3.52202 23.4654 3.81485 23.6073 4.15747C23.7492 4.50008 23.7863 4.87708 23.714 5.24079C23.6416 5.6045 23.463 5.9386 23.2008 6.20082C22.9386 6.46304 22.6045 6.64162 22.2408 6.71397C21.8771 6.78631 21.5001 6.74918 21.1575 6.60727C20.8149 6.46535 20.522 6.22503 20.316 5.91669C20.11 5.60835 20 5.24584 20 4.875C20.0006 4.37789 20.1983 3.9013 20.5498 3.54979C20.9013 3.19829 21.3779 3.00056 21.875 3Z"
                      fill="#2F4CDD"
                    />
                  </svg>
                </span>
                <div className="media-body">
                  <h3 className="mb-0 text-black">
                    <span className="counter ml-0">
                      {" "}
                      <CountUp start={0} end={data2} duration={5} />
                    </span>
                  </h3>
                  <p className="mb-0">Average age</p>
                  {/* <small>4% (30 days)</small> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-xxl-4 col-lg-6 col-md-6 col-sm-6">
          <div className="widget-stat card">
            <div className="card-body p-4">
              <div className="media ai-icon">
                <span className="mr-3 bgl-primary text-primary">
                  {/* {/* <i class="ti-user"></i>  */}
                  <svg
                    width={32}
                    height={36}
                    viewBox="0 0 32 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.25 19.25C12.2389 19.25 13.2056 18.9568 14.0279 18.4074C14.8501 17.8579 15.491 17.0771 15.8694 16.1634C16.2478 15.2498 16.3469 14.2445 16.1539 13.2746C15.961 12.3046 15.4848 11.4137 14.7855 10.7145C14.0863 10.0152 13.1954 9.539 12.2255 9.34608C11.2555 9.15315 10.2502 9.25217 9.33658 9.6306C8.42295 10.009 7.64206 10.6499 7.09265 11.4722C6.54325 12.2944 6.25 13.2611 6.25 14.25C6.25129 15.5757 6.77849 16.8467 7.71589 17.7841C8.65329 18.7215 9.92431 19.2487 11.25 19.25ZM11.25 11.75C11.7445 11.75 12.2278 11.8966 12.6389 12.1713C13.05 12.446 13.3705 12.8365 13.5597 13.2933C13.7489 13.7501 13.7984 14.2528 13.702 14.7377C13.6055 15.2227 13.3674 15.6681 13.0178 16.0178C12.6681 16.3674 12.2227 16.6055 11.7377 16.702C11.2528 16.7984 10.7501 16.7489 10.2933 16.5597C9.83648 16.3705 9.44603 16.0501 9.17133 15.6389C8.89662 15.2278 8.75 14.7445 8.75 14.25C8.75089 13.5872 9.01457 12.9519 9.48322 12.4832C9.95187 12.0146 10.5872 11.7509 11.25 11.75Z"
                      fill="#2F4CDD"
                    />
                    <path
                      d="M30.78 22.4625C31.1927 21.9098 31.4684 21.2672 31.5844 20.5873C31.7005 19.9074 31.6537 19.2096 31.4478 18.5514L30.6543 15.9696C30.2817 14.7451 29.5244 13.6733 28.4946 12.9132C27.4648 12.1531 26.2174 11.7452 24.9375 11.75H19.3287C18.9971 11.75 18.6792 11.8817 18.4448 12.1161C18.2103 12.3505 18.0787 12.6685 18.0787 13C18.0787 13.3315 18.2103 13.6495 18.4448 13.8839C18.6792 14.1183 18.9971 14.25 19.3287 14.25H24.9375C25.6823 14.2474 26.4081 14.485 27.0073 14.9274C27.6064 15.3698 28.0471 15.9935 28.2639 16.706L29.0574 19.2866C29.145 19.5713 29.1645 19.8725 29.1145 20.1661C29.0645 20.4597 28.9463 20.7374 28.7694 20.977C28.5925 21.2166 28.3619 21.4114 28.0961 21.5456C27.8302 21.6799 27.5366 21.7499 27.2388 21.75H15.7777C15.7423 21.75 15.7127 21.7671 15.6777 21.7701C15.5937 21.7669 15.5125 21.75 15.4273 21.75H7.58978C6.20071 21.7449 4.84705 22.1879 3.72972 23.0132C2.61239 23.8385 1.79097 25.0021 1.3874 26.3312L0.454153 29.3625C0.236164 30.0719 0.187639 30.8225 0.31248 31.554C0.43732 32.2856 0.732043 32.9776 1.17296 33.5745C1.61388 34.1715 2.18869 34.6566 2.85119 34.9911C3.51369 35.3255 4.24541 35.4998 4.98753 35.5H18.0287C18.7708 35.4998 19.5026 35.3256 20.1652 34.9912C20.8277 34.6568 21.4026 34.1717 21.8436 33.5747C22.2845 32.9778 22.5793 32.2857 22.7042 31.5541C22.829 30.8226 22.7805 30.0719 22.5625 29.3625L21.6299 26.3315C21.3936 25.5767 21.0217 24.8713 20.5323 24.25H27.2388C27.9283 24.2532 28.6088 24.0928 29.2244 23.7821C29.8399 23.4714 30.3731 23.0191 30.78 22.4625ZM19.8328 32.089C19.6255 32.3726 19.3539 32.6031 19.0403 32.7614C18.7267 32.9198 18.38 33.0015 18.0287 33H4.98753C4.63653 32.9999 4.29043 32.9175 3.97708 32.7594C3.66373 32.6012 3.39187 32.3717 3.18337 32.0894C2.97487 31.807 2.83555 31.4796 2.77661 31.1336C2.71767 30.7876 2.74077 30.4326 2.84403 30.0971L3.77665 27.0661C4.02442 26.2489 4.52925 25.5335 5.21612 25.0261C5.90299 24.5188 6.73523 24.2466 7.58915 24.25H15.4267C16.2806 24.2466 17.1128 24.5188 17.7997 25.0261C18.4865 25.5335 18.9914 26.2489 19.2392 27.0661L20.1718 30.0971C20.2769 30.4323 20.301 30.7877 20.2421 31.134C20.1832 31.4804 20.0429 31.8078 19.8328 32.0894V32.089Z"
                      fill="#2F4CDD"
                    />
                    <path
                      d="M21.875 9.24999C22.7403 9.24999 23.5861 8.9934 24.3056 8.51267C25.0251 8.03194 25.5858 7.34866 25.917 6.54923C26.2481 5.74981 26.3347 4.87014 26.1659 4.02148C25.9971 3.17281 25.5804 2.39326 24.9686 1.78141C24.3567 1.16955 23.5772 0.752876 22.7285 0.584066C21.8798 0.415256 21.0002 0.501896 20.2008 0.833029C19.4013 1.16416 18.7181 1.72492 18.2373 2.44438C17.7566 3.16384 17.5 4.0097 17.5 4.875C17.5014 6.03489 17.9628 7.14688 18.7829 7.96705C19.6031 8.78722 20.7151 9.2486 21.875 9.24999ZM21.875 3C22.2458 3 22.6083 3.10997 22.9167 3.31599C23.225 3.52202 23.4654 3.81485 23.6073 4.15747C23.7492 4.50008 23.7863 4.87708 23.714 5.24079C23.6416 5.6045 23.463 5.9386 23.2008 6.20082C22.9386 6.46304 22.6045 6.64162 22.2408 6.71397C21.8771 6.78631 21.5001 6.74918 21.1575 6.60727C20.8149 6.46535 20.522 6.22503 20.316 5.91669C20.11 5.60835 20 5.24584 20 4.875C20.0006 4.37789 20.1983 3.9013 20.5498 3.54979C20.9013 3.19829 21.3779 3.00056 21.875 3Z"
                      fill="#2F4CDD"
                    />
                  </svg>
                </span>
                <div className="media-body">
                  <h3 className="mb-0 text-black">
                    <span className="counter ml-0">
                      {" "}
                      <CountUp start={0} end={data} duration={5} />
                    </span>
                  </h3>
                  <p className="mb-0">Female ratio</p>
                  {/* <small>4% (30 days)</small> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-xxl-4 col-lg-6 col-md-6 col-sm-6">
          <div className="widget-stat card">
            <div className="card-body p-4">
              <div className="media ai-icon">
                <span className="mr-3 bgl-primary text-primary">
                  {/* {/* <i class="ti-user"></i>  */}
                  <svg
                    width={32}
                    height={36}
                    viewBox="0 0 32 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.25 19.25C12.2389 19.25 13.2056 18.9568 14.0279 18.4074C14.8501 17.8579 15.491 17.0771 15.8694 16.1634C16.2478 15.2498 16.3469 14.2445 16.1539 13.2746C15.961 12.3046 15.4848 11.4137 14.7855 10.7145C14.0863 10.0152 13.1954 9.539 12.2255 9.34608C11.2555 9.15315 10.2502 9.25217 9.33658 9.6306C8.42295 10.009 7.64206 10.6499 7.09265 11.4722C6.54325 12.2944 6.25 13.2611 6.25 14.25C6.25129 15.5757 6.77849 16.8467 7.71589 17.7841C8.65329 18.7215 9.92431 19.2487 11.25 19.25ZM11.25 11.75C11.7445 11.75 12.2278 11.8966 12.6389 12.1713C13.05 12.446 13.3705 12.8365 13.5597 13.2933C13.7489 13.7501 13.7984 14.2528 13.702 14.7377C13.6055 15.2227 13.3674 15.6681 13.0178 16.0178C12.6681 16.3674 12.2227 16.6055 11.7377 16.702C11.2528 16.7984 10.7501 16.7489 10.2933 16.5597C9.83648 16.3705 9.44603 16.0501 9.17133 15.6389C8.89662 15.2278 8.75 14.7445 8.75 14.25C8.75089 13.5872 9.01457 12.9519 9.48322 12.4832C9.95187 12.0146 10.5872 11.7509 11.25 11.75Z"
                      fill="#2F4CDD"
                    />
                    <path
                      d="M30.78 22.4625C31.1927 21.9098 31.4684 21.2672 31.5844 20.5873C31.7005 19.9074 31.6537 19.2096 31.4478 18.5514L30.6543 15.9696C30.2817 14.7451 29.5244 13.6733 28.4946 12.9132C27.4648 12.1531 26.2174 11.7452 24.9375 11.75H19.3287C18.9971 11.75 18.6792 11.8817 18.4448 12.1161C18.2103 12.3505 18.0787 12.6685 18.0787 13C18.0787 13.3315 18.2103 13.6495 18.4448 13.8839C18.6792 14.1183 18.9971 14.25 19.3287 14.25H24.9375C25.6823 14.2474 26.4081 14.485 27.0073 14.9274C27.6064 15.3698 28.0471 15.9935 28.2639 16.706L29.0574 19.2866C29.145 19.5713 29.1645 19.8725 29.1145 20.1661C29.0645 20.4597 28.9463 20.7374 28.7694 20.977C28.5925 21.2166 28.3619 21.4114 28.0961 21.5456C27.8302 21.6799 27.5366 21.7499 27.2388 21.75H15.7777C15.7423 21.75 15.7127 21.7671 15.6777 21.7701C15.5937 21.7669 15.5125 21.75 15.4273 21.75H7.58978C6.20071 21.7449 4.84705 22.1879 3.72972 23.0132C2.61239 23.8385 1.79097 25.0021 1.3874 26.3312L0.454153 29.3625C0.236164 30.0719 0.187639 30.8225 0.31248 31.554C0.43732 32.2856 0.732043 32.9776 1.17296 33.5745C1.61388 34.1715 2.18869 34.6566 2.85119 34.9911C3.51369 35.3255 4.24541 35.4998 4.98753 35.5H18.0287C18.7708 35.4998 19.5026 35.3256 20.1652 34.9912C20.8277 34.6568 21.4026 34.1717 21.8436 33.5747C22.2845 32.9778 22.5793 32.2857 22.7042 31.5541C22.829 30.8226 22.7805 30.0719 22.5625 29.3625L21.6299 26.3315C21.3936 25.5767 21.0217 24.8713 20.5323 24.25H27.2388C27.9283 24.2532 28.6088 24.0928 29.2244 23.7821C29.8399 23.4714 30.3731 23.0191 30.78 22.4625ZM19.8328 32.089C19.6255 32.3726 19.3539 32.6031 19.0403 32.7614C18.7267 32.9198 18.38 33.0015 18.0287 33H4.98753C4.63653 32.9999 4.29043 32.9175 3.97708 32.7594C3.66373 32.6012 3.39187 32.3717 3.18337 32.0894C2.97487 31.807 2.83555 31.4796 2.77661 31.1336C2.71767 30.7876 2.74077 30.4326 2.84403 30.0971L3.77665 27.0661C4.02442 26.2489 4.52925 25.5335 5.21612 25.0261C5.90299 24.5188 6.73523 24.2466 7.58915 24.25H15.4267C16.2806 24.2466 17.1128 24.5188 17.7997 25.0261C18.4865 25.5335 18.9914 26.2489 19.2392 27.0661L20.1718 30.0971C20.2769 30.4323 20.301 30.7877 20.2421 31.134C20.1832 31.4804 20.0429 31.8078 19.8328 32.0894V32.089Z"
                      fill="#2F4CDD"
                    />
                    <path
                      d="M21.875 9.24999C22.7403 9.24999 23.5861 8.9934 24.3056 8.51267C25.0251 8.03194 25.5858 7.34866 25.917 6.54923C26.2481 5.74981 26.3347 4.87014 26.1659 4.02148C25.9971 3.17281 25.5804 2.39326 24.9686 1.78141C24.3567 1.16955 23.5772 0.752876 22.7285 0.584066C21.8798 0.415256 21.0002 0.501896 20.2008 0.833029C19.4013 1.16416 18.7181 1.72492 18.2373 2.44438C17.7566 3.16384 17.5 4.0097 17.5 4.875C17.5014 6.03489 17.9628 7.14688 18.7829 7.96705C19.6031 8.78722 20.7151 9.2486 21.875 9.24999ZM21.875 3C22.2458 3 22.6083 3.10997 22.9167 3.31599C23.225 3.52202 23.4654 3.81485 23.6073 4.15747C23.7492 4.50008 23.7863 4.87708 23.714 5.24079C23.6416 5.6045 23.463 5.9386 23.2008 6.20082C22.9386 6.46304 22.6045 6.64162 22.2408 6.71397C21.8771 6.78631 21.5001 6.74918 21.1575 6.60727C20.8149 6.46535 20.522 6.22503 20.316 5.91669C20.11 5.60835 20 5.24584 20 4.875C20.0006 4.37789 20.1983 3.9013 20.5498 3.54979C20.9013 3.19829 21.3779 3.00056 21.875 3Z"
                      fill="#2F4CDD"
                    />
                  </svg>
                </span>
                <div className="media-body">
                  <h3 className="mb-0 text-black">
                    <span className="counter ml-0">
                      {" "}
                      <CountUp start={0} end={data1} duration={5} />
                    </span>
                  </h3>
                  <p className="mb-0">Average blood pressure </p>
                  {/* <small>4% (30 days)</small> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-100 " style={{ height: "500px" }}>
        <iframe
          src="http://127.0.0.1:8000/heartbeat_chart"
          style={{ width: "100%", height: "100%" }}
          frameborder="0"
        ></iframe>
      </div>
      <div className="card w-100 " style={{ height: "800px" }}>
        <iframe
          src="http://127.0.0.1:8000/interactive_plot"
          style={{ width: "100%", height: "100%" }}
          frameborder="0"
        ></iframe>
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
