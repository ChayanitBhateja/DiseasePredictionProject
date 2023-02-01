import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function PoolingOption({ show, close }) {
  return (
    <>
      <Modal className="fade" show={show}>
        <Modal.Header>
          <Modal.Title>Options</Modal.Title>
          <Button variant="" className="close" onClick={() => close()}>
            <span>&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          {/* {apiError && (
            <div className="bg-red-300 text-red-900 border border-red-900 p-1 my-2">
              {apiError}
            </div>
          )} */}
          <form>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">Option A</strong>
              </label>
              <input
                type="text"
                className="form-control"
                // value={userName}
                // onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">Option B </strong>
              </label>
              <input
                type="text"
                className="form-control"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
              {/* {errors.email && (
                <div className="text-danger fs-12">{errors.email}</div>
              )} */}
            </div>

            <div className="mt-4">
              <button
                type="btn"
                className="btn btn-primary mr-3 "
                onClick={() => close()}
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
