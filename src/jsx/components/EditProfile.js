import React, { useEffect, useState } from "react";
import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import {
  editProfileApi,
  editProfileDocApi,
  getDoctorEditProfile,
  getPatientEditProfile,
} from "../../services/AuthService";
export default function EditProfile({ show, close, data }) {
  const [name, setName] = useState("");
  let errorsObj = { name: "", email: "" };
  const [errors, setErrors] = useState(errorsObj);
  const [email, setEmail] = useState("");
  const [documrnt, setDocumrnt] = useState({});
  console.log(documrnt);
  const loginAs = localStorage.getItem("loginAs");

  const [apiError, setApiError] = useState("");
  const notifyTopRight = () => {
    toast.success("✅ edit profile successfully !", {
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
  function onEditProfile(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    // if (oldPassword === "") {
    //     errorObj.oldPassword = "Old Passwoard is Required";
    //     error = true;
    // }
    // if (newPassword === "") {
    //     errorObj.newPassword = "New Password is Required";
    //     error = true;
    // }
    setErrors(errorObj);
    if (error) {
      return;
    }
    // dispatch(loadingToggleAction(true));
    // dispatch(loginAction(email, password, props.history));
    if (loginAs === "Patient") {
      editProfileApi(name, email, documrnt)
        .then((response) => {
          console.log(response, "edit profile");

          setName("");
          setEmail("");
          close();
          data();
          notifyTopRight();
        })
        .catch((error) => {
          // console.log(error.response, "change passwoard error");
          console.log(error);
          //   if (error.response.data.statusCode === 400) {
          //     notifyError(error.response.data.message);
          //   }
          //   if (error.response.data.statusCode === 401) {
          //     notifyError(error.response.data.message);
          //   }
          //   if (error.response.data.statusCode === 500) {
          //     notifyError(error.response.data.message);
          //   }
        });
    }
    if (loginAs === "Doctor") {
      editProfileDocApi(name, email, documrnt)
        .then((response) => {
          console.log(response, "edit profile");

          setName("");
          setEmail("");
          close();
          notifyTopRight();
        })
        .catch((error) => {
          // console.log(error.response, "change passwoard error");
          setApiError(error.response.message);
          if (error.response.data.statusCode === 400) {
            notifyError(error.response.data.message);
          }
          if (error.response.data.statusCode === 401) {
            notifyError(error.response.data.message);
          }
          if (error.response.data.statusCode === 500) {
            notifyError(error.response.data.message);
          }
        });
    }
  }
  useEffect(() => {
    if (loginAs === "Patient") {
      getPatientEditProfile()
        .then((response) => {
          console.log(response, "edit profile get");
          setEmail(response.data.data.email);
          setName(response.data.data.name);
        })
        .catch((error) => {
          console.log(error, "edit profile get");
        });
    }
    if (loginAs === "Doctor") {
      getDoctorEditProfile()
        .then((response) => {
          console.log(response, "edit profile get");
          setEmail(response.data.data.email);
          setName(response.data.data.name);
        })
        .catch((error) => {
          console.log(error, "edit profile get");
        });
    }
  }, [loginAs]);
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
          <Modal.Title>Edit Profile</Modal.Title>
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
          <form onSubmit={onEditProfile}>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">Name</strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">Email</strong>
              </label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">Document</strong>
              </label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setDocumrnt(e.target.files[0])}
                required
                accept="image/png, image/gif, image/jpeg, image/jpg, image/svg"
                // accept="image/*;capture=camera"
              />
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
