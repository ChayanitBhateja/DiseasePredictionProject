import React, { useEffect, useState } from "react";
import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";
import {
  patientDetailApi,
  patientDetailApiForDoc,
} from "../../services/AuthService";
import { ToastContainer, toast } from "react-toastify";

export default function PatientDetail({ show, close, id }) {
  const loginAs = localStorage.getItem("loginAs");

  const [details, setDetails] = useState({});
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

  useEffect(() => {
    if (loginAs === "Admin") {
      patientDetailApi(id)
        .then((response) => {
          console.log(response, "ppppppppp");
          setDetails(response.data.data);
        })
        .catch((error) => {
          console.log(error.response, "kkkkkkkk error");

          if (error.response.data.statusCode === 401) {
            notifyError(error.response.data.message);
          }
          if (error.response.data.statusCode === 500) {
            notifyError(error.response.data.message);
          }
        });
    }
    if (loginAs === "Doctor") {
      patientDetailApiForDoc(id)
        .then((response) => {
          console.log(
            response,
            "patientDetailApiForDoc patientDetailApiForDoc"
          );
          setDetails(response.data.data);
        })
        .catch((error) => {
          console.log(error.response, "kkkkkkkk error");

          if (error.response.data.statusCode === 401) {
            notifyError(error.response.data.message);
          }
          if (error.response.data.statusCode === 500) {
            notifyError(error.response.data.message);
          }
        });
    }
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
          <Modal.Title>Patient Details</Modal.Title>
          <Button variant="" className="close" onClick={() => close()}>
            <span>&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">Name</strong>
              </label>
              <p>{details?.name}</p>
            </div>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">Email</strong>
              </label>
              <p>{details?.email}</p>
            </div>
            <div className="form-group">
              <label className="mb-2 d-block">
                <strong className="">Document</strong>
              </label>
              {details?.reports?.map((item, i) => (
                <img
                  key={i}
                  src={`http://localhost:5000${item}`}
                  style={{ height: "50px", width: "50px" }}
                />
              ))}
              {details?.reports?.length === 0 && <p>No Document</p>}
            </div>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">prediction</strong>
              </label>
              {details?.prediction === 1 && <p>Prone to Heart Disease</p>}
              {details?.prediction === 0 && <p> Not prone to Heart Disease</p>}
            </div>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">probability</strong>
              </label>
              <p>
                {details?.probability && (
                  <p>
                    {details?.probability} <span> %</span>
                  </p>
                )}
              </p>
            </div>

            <div className="mt-4">
              <button
                type="button"
                onClick={() => close()}
                className="btn btn-danger "
              >
                Close
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
