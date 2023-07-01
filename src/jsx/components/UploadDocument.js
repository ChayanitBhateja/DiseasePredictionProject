import React, { useState } from "react";
import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";
import {
  changePasswoard,
  changePasswoardAdmin,
  changePasswoardDoc,
  doctorDocumentUpload,
  userDocumentUpload,
} from "../../services/AuthService";
import { ToastContainer, toast } from "react-toastify";

export default function UploadDocument({ show, close }) {
  const [oldPassword, setOldPassword] = useState("");
  let errorsObj = { oldPassword: "", newPassword: "" };
  const [errors, setErrors] = useState(errorsObj);
  const [newPassword, setNewPassword] = useState("");
  const [apiError, setApiError] = useState("");
  const [documrnt, setDocumrnt] = useState({});

  const loginAs = localStorage.getItem("loginAs");
  console.log(loginAs);
  const notifyTopRight = () => {
    toast.success("✅ upload document successfully !", {
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

    if (loginAs === "Patient") {
      console.log("kkkkkffnnfnrnn");
      userDocumentUpload(documrnt)
        .then((response) => {
          console.log(response);

          close();
          notifyTopRight();
        })
        .catch((error) => {
          console.log(error.response, "upload document");
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
      doctorDocumentUpload(documrnt)
        .then((response) => {
          console.log(response);

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
          <Modal.Title>Upload Document</Modal.Title>
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
              <input
                type="file"
                className="form-control"
                onChange={(e) => setDocumrnt(e.target.files[0])}
                required
                accept="image/png, image/gif, image/jpeg, image/jpg, image/svg"
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
