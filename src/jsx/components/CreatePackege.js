import React from "react";
import { Row, Col, Card, Button, Modal, Tab, Nav } from "react-bootstrap";

export default function CreatePackege({ show, close }) {
  return (
    <>
      <Modal className="fade" show={show}>
        <Modal.Header>
          <Modal.Title>Create Package</Modal.Title>
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
            <div className="row">
              <div className="col-12 col-md-6 ">
                <div className="form-group">
                  <label className="mb-2 ">
                    <strong className="">Currency Conversion</strong>
                  </label>
                  <select
                    defaultValue="tipper"
                    name="emailstatus"
                    className="form-control"
                    // onClick={(e) => setUserType(e.target.value)}
                  >
                    <option value="option1">Gold Coin to Diamonds</option>
                    <option value="option2">option 2</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-6 ">
                <div className="form-group">
                  <label className="mb-2 ">
                    <strong className="">Plan Name</strong>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    // value={newPassword}
                    // onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {/* {errors.newPassword && (
                <div className="text-danger fs-12">{errors.newPassword}</div>
              )} */}
                </div>
              </div>
              <div className="col-12 col-md-6 ">
                <div className="form-group">
                  <label className="mb-2 ">
                    <strong className="">Plan Image</strong>
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    // value={newPassword}
                    // onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {/* {errors.newPassword && (
                <div className="text-danger fs-12">{errors.newPassword}</div>
              )} */}
                </div>
              </div>
              <div className="col-12 col-md-6 ">
                <div className="form-group">
                  <label className="mb-2 ">
                    <strong className="">Source Currency </strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    // value={newPassword}
                    // onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {/* {errors.newPassword && (
                <div className="text-danger fs-12">{errors.newPassword}</div>
              )} */}
                </div>
              </div>
              <div className="col-12 col-md-6 ">
                <div className="form-group">
                  <label className="mb-2 ">
                    <strong className="">Converted Currency</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    // value={newPassword}
                    // onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {/* {errors.newPassword && (
                <div className="text-danger fs-12">{errors.newPassword}</div>
              )} */}
                </div>
              </div>
              <div className="col-12 col-md-6 ">
                <div className="form-group">
                  <label className="mb-2 ">
                    <strong className="">Device Type</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    // value={newPassword}
                    // onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {/* {errors.newPassword && (
                <div className="text-danger fs-12">{errors.newPassword}</div>
              )} */}
                </div>
              </div>
              <div className="col-12 col-md-6 ">
                <div className="form-group">
                  <label className="mb-2 ">
                    <strong className="">Google Product Id</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    // value={newPassword}
                    // onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {/* {errors.newPassword && (
                <div className="text-danger fs-12">{errors.newPassword}</div>
              )} */}
                </div>
              </div>
              <div className="col-12 col-md-6 ">
                <div className="form-group">
                  <label className="mb-2 ">
                    <strong className="">Apple Product Id</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    // value={newPassword}
                    // onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {/* {errors.newPassword && (
                <div className="text-danger fs-12">{errors.newPassword}</div>
              )} */}
                </div>
              </div>
              <div className="col-12 col-md-6 ">
                <div className="form-group">
                  <label className="mb-2 ">
                    <strong className="">Is Mock</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    // value={newPassword}
                    // onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {/* {errors.newPassword && (
                <div className="text-danger fs-12">{errors.newPassword}</div>
              )} */}
                </div>
              </div>
              <div className="col-12 col-md-6 ">
                <div className="form-group">
                  <label className="mb-2 ">
                    <strong className="">Is Promo</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    // value={newPassword}
                    // onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {/* {errors.newPassword && (
                <div className="text-danger fs-12">{errors.newPassword}</div>
              )} */}
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">Plan Description</strong>
              </label>
              <textarea className="form-control" rows={4} defaultValue={""} />
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
