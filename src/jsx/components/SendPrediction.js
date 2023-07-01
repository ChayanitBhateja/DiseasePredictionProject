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
              <label className="mb-2 ">
                <strong className="">Prediction</strong>
              </label>
              <input
                type="number"
                className="form-control"
                value={prediction}
                onChange={(e) => setPrediction(e.target.value)}
                minLength={1}
                required
              />
            </div>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">Probability</strong>
              </label>
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
