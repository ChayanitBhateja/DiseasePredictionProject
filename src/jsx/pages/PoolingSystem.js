import React from "react";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";
import PoolingStatisticsTable from "../components/PoolingStatisticsTable";
import UserManagementTable from "../components/UserManagementTable";
import ViewPoolingTable from "../components/ViewPoolingTable";

export default function PoolingSystem() {
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title>Polling System</Card.Title>
        </Card.Header>
        <Card.Body>
          <Tab.Container defaultActiveKey="createpooling">
            <Nav as="ul" className="nav-pills mb-4 light">
              <Nav.Item as="li">
                <Nav.Link eventKey="createpooling">Create Polling</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="viewpooling">View Polling</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="poolingstatistics">
                  Polling Statistics
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="pt-4">
              <Tab.Pane eventKey="createpooling">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">start Date</strong>
                        </label>
                        <input type="date" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">start Time</strong>
                        </label>
                        <input type="time" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">End Date</strong>
                        </label>
                        <input type="date" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">End Time</strong>
                        </label>
                        <input type="time" className="form-control" />
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
                          <strong className="">Match Name</strong>
                        </label>
                        <select name="matchname" className="form-control">
                          <option value="online">Online</option>
                          <option value="offline">Offline</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group ">
                    <label className="mb-2 ">
                      <strong className="">Show an match detail screen </strong>
                    </label>
                    <div className="d-flex">
                      <div className="radio mr-3">
                        <label>
                          <input type="radio" name="screen" /> Yes
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input type="radio" name="screen" /> No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Question</strong>
                        </label>
                        <textarea
                          type="text"
                          className="form-control"
                          cols="50"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Option A</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Option B</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Option C</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Option D</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <button type="submit" className="btn btn-primary mr-3 ">
                      Create
                    </button>
                    <button type="submit" className="btn btn-primary ">
                      Reset
                    </button>
                  </div>
                </form>
              </Tab.Pane>
              <Tab.Pane eventKey="viewpooling">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Start Date</strong>
                        </label>
                        <input type="date" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">End Date</strong>
                        </label>
                        <input type="date" className="form-control" />
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Match Name</strong>
                        </label>

                        <select name="matchname" className="form-control">
                          <option value="verified">option 1</option>
                          <option value="unverified">option 2</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <button type="submit" className="btn btn-primary mr-3 ">
                      Search
                    </button>
                    <button type="submit" className="btn btn-primary mr-3 ">
                      Clear
                    </button>
                  </div>
                </form>
                <ViewPoolingTable />
              </Tab.Pane>
              <Tab.Pane eventKey="poolingstatistics">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Start Date</strong>
                        </label>
                        <input type="date" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">End Date</strong>
                        </label>
                        <input type="date" className="form-control" />
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Match Name</strong>
                        </label>

                        <select name="matchname" className="form-control">
                          <option value="verified">option 1</option>
                          <option value="unverified">option 2</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <button type="submit" className="btn btn-primary mr-3 ">
                      Search
                    </button>
                    <button type="submit" className="btn btn-primary mr-3 ">
                      Clear
                    </button>
                  </div>
                </form>
                <PoolingStatisticsTable />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card.Body>
      </Card>
    </>
  );
}
