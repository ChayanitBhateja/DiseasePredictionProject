import React from "react";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";
import ActiveBannerImageTable from "../components/ActiveBannerImageTable";
import PoolingStatisticsTable from "../components/PoolingStatisticsTable";
import UserManagementTable from "../components/UserManagementTable";
import ViewBannerImageTable from "../components/ViewBannerImageTable";
import ViewPoolingTable from "../components/ViewPoolingTable";
import ViewTipperTable from "../components/ViewTipperTable";

export default function TipRoom() {
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title>Tip Room</Card.Title>
        </Card.Header>
        <Card.Body>
          <Tab.Container defaultActiveKey="createtipper">
            <Nav as="ul" className="nav-pills mb-4 light">
              <Nav.Item as="li">
                <Nav.Link eventKey="createtipper">Create Tipper</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="viewtipper">View Tipper</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="pt-4">
              <Tab.Pane eventKey="createtipper">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Title</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Tipper Name</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Banner Image</strong>
                        </label>
                        <input type="file" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Dfeault per match price</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Rating</strong>
                        </label>
                        <select name="emailstatus" className="form-control">
                          <option value="1start">1 Start</option>
                          <option value="2start">2 Start</option>
                          <option value="3start">3 Start</option>
                          <option value="4start">4 Start</option>
                          <option value="5start">5 Start</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Description</strong>
                        </label>
                        <textarea
                          type="text"
                          className="form-control"
                        ></textarea>
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
              <Tab.Pane eventKey="viewtipper">
                <ViewTipperTable />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card.Body>
      </Card>
    </>
  );
}
