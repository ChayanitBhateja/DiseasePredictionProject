import React, { useState } from "react";
import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";
import {
  adminChangePasswoard,
  adminChangePasswoardPatient,
  changePasswoard,
  changePasswoardAdmin,
  changePasswoardDoc,
} from "../../services/AuthService";
import { ToastContainer, toast } from "react-toastify";

export default function AdminChangePassword({ show, close, id, type }) {
  console.log(type, "hhhh");
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
    if (type === "doctor") {
      console.log("first loginAs");
      adminChangePasswoard(newPassword, id)
        .then((response) => {
          console.log(response);
          setNewPassword("");
          close();
          notifyTopRight();
        })
        .catch((error) => {
          console.log(
            error.response,
            "change passwoard error admin changePasswoard"
          );
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
    if (type === "patient") {
      console.log("first loginAs");
      adminChangePasswoardPatient(newPassword, id)
        .then((response) => {
          console.log(response);
          setNewPassword("");
          close();
          notifyTopRight();
        })
        .catch((error) => {
          console.log(
            error.response,
            "change passwoard error admin changePasswoard"
          );
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
          <Modal.Title>Change Password</Modal.Title>
          <Button variant="" className="close" onClick={() => close()}>
            <span>&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onChangePasswoard}>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">New Password</strong>
              </label>
              <input
                type="password"
                className="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                minLength={6}
                required
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
