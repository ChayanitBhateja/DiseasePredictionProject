import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  doctorDocumentUpload,
  sendPrediction,
  userDocumentUpload,
} from "../../services/AuthService";
import { ToastContainer, toast } from "react-toastify";

export default function SendPrediction({ show, close, id }) {
  const [prediction, setPrediction] = useState("");
  const [probability, setProbability] = useState("");
  console.log(prediction, "lll");

  const loginAs = localStorage.getItem("loginAs");
  console.log(loginAs);
  const notifyTopRight = () => {
    toast.success("✅  success !", {
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
    if (loginAs === "Doctor") {
      sendPrediction(id, prediction, probability)
        .then((response) => {
          console.log(response, "sendPrediction sendPrediction");

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
          <Modal.Title>Send Prediction</Modal.Title>
          <Button variant="" className="close" onClick={() => close()}>
            <span>&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onChangePasswoard}>
            <div className="form-group">
              <div>
                <label className="mb-2 ">
                  <strong className="">Prediction</strong>
                </label>
              </div>

              {/* <select
                className="mx-auto"
                onClick={(e) => setPrediction(e.target.value)}
              >
                <option value="1">Prone to Heart Disease </option>
                <option value="0">Not Prone to Heart Disease</option>
              </select> */}

              <div className="radiobutton d-flex justify-content-between align-items-center">
                <div
                  style={{ flexGrow: 1 }}
                  className="radiobutton d-flex justify-content-between align-items-center"
                >
                  <label className="mb-1">
                    <strong>Prone to Heart Disease </strong>
                  </label>
                  <input
                    type="radio"
                    name="flexRadioDefault"
                    value={1}
                    onChange={(e) => setPrediction(e.target.value)}
                    required
                  />
                </div>
                <div
                  style={{ flexGrow: 1 }}
                  className="radiobutton d-flex justify-content-between align-items-center ml-4"
                >
                  <label className="mb-1">
                    <strong>Not Prone to Heart Disease</strong>
                  </label>
                  <input
                    type="radio"
                    name="flexRadioDefault"
                    value={0}
                    onChange={(e) => setPrediction(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div>
                {" "}
                <label className="mb-2 ">
                  <strong className="">Probability</strong>
                </label>
              </div>

              <input
                type="number"
                className="form-control"
                value={probability}
                onChange={(e) => setProbability(e.target.value)}
                minLength={2}
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