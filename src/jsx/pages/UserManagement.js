import React from "react";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";
import UserManagementTable from "../components/UserManagementTable";

export default function UserManagement() {
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title>User Management</Card.Title>
        </Card.Header>
        <Card.Body>
          <Tab.Container defaultActiveKey="ViewUser">
            <Nav as="ul" className="nav-pills mb-4 light">
              <Nav.Item as="li">
                <Nav.Link eventKey="ViewUser">View User</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="CreateUser">Create User</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="pt-4">
              <Tab.Pane eventKey="ViewUser">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">User Id</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">User Name</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Email</strong>
                        </label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Email Status</strong>
                        </label>
                        <select name="emailstatus" className="form-control">
                          <option value="verified">Verified</option>
                          <option value="unverified">Unverified</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className=""> Status</strong>
                        </label>
                        <select name="status" className="form-control">
                          <option value="active">Active</option>
                          <option value="deactive">Deactive</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className=""> select Date</strong>
                        </label>
                        <input type="date" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className=""> Device Type</strong>
                        </label>
                        <select name="devicetype" className="form-control">
                          <option value="APK">APK</option>
                          <option value="BO">BO</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <button type="submit" className="btn btn-primary mr-3 ">
                      Search
                    </button>
                    <button type="submit" className="btn btn-primary ">
                      Clear
                    </button>
                  </div>
                </form>
                <UserManagementTable />
              </Tab.Pane>
              <Tab.Pane eventKey="CreateUser">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">User Id</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Photo</strong>
                        </label>
                        <input type="file" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">User Name</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Email Id</strong>
                        </label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className=""> Referred By</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className=""> Created By</strong>
                        </label>
                        <input type="date" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Email Status</strong>
                        </label>

                        <select name="emailstatusform" className="form-control">
                          <option value="verified">Verified</option>
                          <option value="unverified">Unverified</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <button type="submit" className="btn btn-primary mr-3 ">
                      Create
                    </button>
                  </div>
                </form>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card.Body>
      </Card>
    </>
  );
}
