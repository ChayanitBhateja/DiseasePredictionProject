


import React from "react";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";
import ActiveBannerImageTable from "../components/ActiveBannerImageTable";
import PoolingStatisticsTable from "../components/PoolingStatisticsTable";
import UserManagementTable from "../components/UserManagementTable";
import ViewBannerImageTable from "../components/ViewBannerImageTable";
import ViewPoolingTable from "../components/ViewPoolingTable";

export default function PromoBanner() {
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title>Promo Banner</Card.Title>
        </Card.Header>
        <Card.Body>
          <Tab.Container defaultActiveKey="createBanner">
            <Nav as="ul" className="nav-pills mb-4 light">
              <Nav.Item as="li">
                <Nav.Link eventKey="createBanner">Create Banner Image</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="viewbanner">View Banner Image</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="activebanner">
                  Active Banner Image
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="pt-4">
              <Tab.Pane eventKey="createBanner">
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
                          <strong className="">Banner Type</strong>
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
                          <strong className="">Banner Url</strong>
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
              <Tab.Pane eventKey="viewbanner">
               <ViewBannerImageTable/>
            
              </Tab.Pane>
              <Tab.Pane eventKey="activebanner">
              <ActiveBannerImageTable/>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card.Body>
      </Card>
    </>
  );
}
