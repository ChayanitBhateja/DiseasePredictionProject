import React, { useState } from "react";
import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";
import {
  changePasswoard,
  changePasswoardAdmin,
  changePasswoardDoc,
} from "../../services/AuthService";
import { ToastContainer, toast } from "react-toastify";

export default function LoderModel({ show, close }) {
  const [oldPassword, setOldPassword] = useState("");
  let errorsObj = { oldPassword: "", newPassword: "" };
  const [errors, setErrors] = useState(errorsObj);
  const [newPassword, setNewPassword] = useState("");
  const [apiError, setApiError] = useState("");
  const loginAs = localStorage.getItem("loginAs");
  console.log(loginAs);
  const notifyTopRight = () => {
    toast.success("✅ Change password successfully !", {
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
  function onChangePasswoard(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (oldPassword === "") {
      errorObj.oldPassword = "Old Passwoard is Required";
      error = true;
    }
    if (newPassword === "") {
      errorObj.newPassword = "New Password is Required";
      error = true;
    }
    setErrors(errorObj);
    if (error) {
      return;
    }

    // dispatch(loadingToggleAction(true));
    // dispatch(loginAction(email, password, props.history));
    if (loginAs === "Patient") {
      changePasswoard(oldPassword, newPassword)
        .then((response) => {
          console.log(response);

          setOldPassword("");
          setNewPassword("");
          close();
          notifyTopRight();
        })
        .catch((error) => {
          console.log(error.response, "change passwoard error changePasswoard");
          if (error.response.data.statusCode === 400) {
            notifyError(error.response.data.message);
          }
          if (error.response.data.statusCode === 401) {
            notifyError(error.response.data.message);
          }
          if (error.response.data.statusCode === 500) {
            notifyError(error.response.data.message);
          }
          setApiError(error.response.message);
        });
    }

    if (loginAs === "Doctor") {
      changePasswoardDoc(oldPassword, newPassword)
        .then((response) => {
          console.log(response);

          setOldPassword("");
          setNewPassword("");
          close();
          notifyTopRight();
        })
        .catch((error) => {
          console.log(error.response, "change passwoard error changePasswoard");
          if (error.response.data.statusCode === 400) {
            notifyError(error.response.data.message);
          }
          if (error.response.data.statusCode === 401) {
            notifyError(error.response.data.message);
          }
          if (error.response.data.statusCode === 500) {
            notifyError(error.response.data.message);
          }
          setApiError(error.response.message);
        });
    }
    if (loginAs === "Admin") {
      changePasswoardAdmin(oldPassword, newPassword)
        .then((response) => {
          console.log(response);

          setOldPassword("");
          setNewPassword("");
          close();
          notifyTopRight();
        })
        .catch((error) => {
          console.log(error.response, "change passwoard error");
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
          <Modal.Title>Retraining Model</Modal.Title>
          <Button variant="" className="close" onClick={() => close()}>
            <span>&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onChangePasswoard}>
            <h3>Please wait the model is re-training</h3>
            <div className="mt-4 d-flex justify-content-end">
              <button
                type="button"
                onClick={() => close()}
                className="btn btn-danger "
              >
                ok
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
