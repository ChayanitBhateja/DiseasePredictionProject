import React, { useEffect, useState } from "react";
import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";
import {
  changePasswoard,
  createUserTipper,
  editUserTipper,
  userById,
} from "../../services/AuthService";
import { ToastContainer, toast } from "react-toastify";
import { country } from "./Countery";
import addPhoto from "../pages/test";
export default function EditUser({ show, close, id, table }) {
  let errorsObj = { userName: "", email: "", phoneNumber: "" };
  const [errors, setErrors] = useState(errorsObj);

  const [countryCode, setCountryCode] = useState("+91");

  const [profileImage, setProfileImage] = useState("");
  const [userType, setUserType] = useState("user");

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [countryCode, setCountryCode] = useState("");
  const [userId, setUserId] = useState("");
  const [oneUsers, setOneUsers] = useState("");
  // console.log(oneUsers, "users one");
  const [apiError, setApiError] = useState("");
  const albumName = "profileImages";

  const notifyTopRight = () => {
    toast.success("✅ Create user successfully !", {
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

  function getCountry() {
    return country.map((country) => {
      return (
        <option key={country.name} value={country.dial_code}>
          {country.dial_code}
        </option>
      );
    });
  }

  function onEditUser(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (userName === "") {
      errorObj.userName = "User Name is Required";
      error = true;
    }
    if (email === "") {
      errorObj.email = "Email is Required";
      error = true;
    }
    if (phoneNumber === "") {
      errorObj.phoneNumber = "Phone Number is Required";
      error = true;
    }

    setErrors(errorObj);
    if (error) {
      return;
    }

    addPhoto(profileImage, albumName)
      .then((response) => {
        console.log(response.imageName, "s3 response");
        // setImgLocation(response.Location);
        // var imageFromAws = ;
        editUserTipper(
          userName,
          email,
          phoneNumber,
          userType,
          countryCode,
          response.imageName,
          userId
        )
          .then((response) => {
            console.log(response);
            close();

            notifyTopRight();
            table();
          })
          .catch((error) => {
            console.log(error.response, "error");
            setApiError(error.response.message);
            notifyError();
          });
      })
      .catch((error) => {
        console.log(error, "s3 error");
      });
  }
  useEffect(() => {
    // setLoader(true);
    userById(id, userType).then((response) => {
      console.log(response, "user by id data response");
      //   setOneUsers(response.data.data);
      setUserName(response.data.data.userName);
      setEmail(response.data.data.email);
      setPhoneNumber(response.data.data.phoneNumber);
      setCountryCode(response.data.data.countryCode);
      setUserId(id);
    });
  }, [id]);
  return (
    <>
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
      <Modal className="fade" show={show}>
        <Modal.Header>
          <Modal.Title>Create User</Modal.Title>
          <Button variant="" className="close" onClick={() => close()}>
            <span>&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          {apiError && (
            <div className="bg-red-300 text-red-900 border border-red-900 p-1 my-2">
              {apiError}
            </div>
          )}
          <form onSubmit={onEditUser}>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">User Type</strong>
              </label>
              <select
                defaultValue="tipper"
                name="emailstatus"
                className="form-control"
                value={userType}
                onClick={(e) => setUserType(e.target.value)}
              >
                <option value="user">Better</option>
                <option value="tipper">Tipper</option>
              </select>
            </div>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">Profile Image</strong>
              </label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setProfileImage(e.target.files[0])}
              />
            </div>

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
              {errors.userName && (
                <div className="text-danger fs-12">{errors.userName}</div>
              )}
            </div>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">Email </strong>
              </label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <div className="text-danger fs-12">{errors.email}</div>
              )}
            </div>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">Phone Number </strong>
              </label>

              <div className="d-flex ">
                <div className="col-3 number p-0">
                  <select
                    defaultValue="+91"
                    className="form-control"
                    aria-label="Floating label select example"
                    value={countryCode}
                    onClick={(e) => setCountryCode(e.target.value)}
                  >
                    <option value="+91">+91</option>
                    {getCountry()}
                  </select>

                  <div className="dropdown-container"></div>
                </div>
                <div className="col-9 p-0">
                  <input
                    type="number"
                    className="form-control"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              {errors.phoneNumber && (
                <div className="text-danger fs-12">{errors.phoneNumber}</div>
              )}
            </div>

            <div className="mt-4">
              <button type="submit" className="btn btn-primary mr-3 ">
                Save
              </button>
              <button
                type="button"
                onClick={() => close()}
                className="btn btn-danger "
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
