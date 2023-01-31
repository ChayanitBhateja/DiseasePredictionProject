import React, { useState } from "react";
import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";
import { changePasswoard } from "../../services/AuthService";
import { ToastContainer, toast } from "react-toastify";

export default function ChangePassword({ show, close }) {
  const [oldPassword, setOldPassword] = useState("");
  let errorsObj = { oldPassword: "", newPassword: "" };
  const [errors, setErrors] = useState(errorsObj);
  const [newPassword, setNewPassword] = useState("");
  const [apiError, setApiError] = useState("");
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
    changePasswoard(oldPassword, newPassword)
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
        notifyError();
      });
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
          {apiError && (
            <div className="bg-red-300 text-red-900 border border-red-900 p-1 my-2">
              {apiError}
            </div>
          )}
          <form onSubmit={onChangePasswoard}>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">Old Password</strong>
              </label>
              <input
                type="password"
                className="form-control"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              {errors.oldPassword && (
                <div className="text-danger fs-12">{errors.oldPassword}</div>
              )}
            </div>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">New Password</strong>
              </label>
              <input
                type="password"
                className="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              {errors.newPassword && (
                <div className="text-danger fs-12">{errors.newPassword}</div>
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
