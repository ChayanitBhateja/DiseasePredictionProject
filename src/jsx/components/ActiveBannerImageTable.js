import React, { useState, useRef, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Row, Col, Card, Button, Tab, Nav } from "react-bootstrap";
import CreateBanner from "./CreateBanner";

const ActiveBannerImageTable = () => {
  const [createBanner, setCreateBanner] = useState(false);
  return (
    <Fragment>
      <CreateBanner show={createBanner} close={() => setCreateBanner(false)} />
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center flex-column flex-sm-row">
          <div>
            <Card.Title>Promo Banner</Card.Title>
          </div>
          <div>
            <Button
              className=""
              variant="outline-primary"
              onClick={() => setCreateBanner(true)}
            >
              Create Banner Image
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <div id="order_list" className="dataTables_wrapper no-footer">
                  <table
                    id="example5"
                    className="display mb-4  dataTable no-footer w-100 "
                    style={{ minWidth: 845 }}
                    role="grid"
                    aria-describedby="example5_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Date: activate to sort column ascending"
                          style={{ width: "74.6667px" }}
                        >
                          Title
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Customer Name: activate to sort column ascending"
                          style={{ width: "85.3333px" }}
                        >
                          Banner Type
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: "98.6667px" }}
                        >
                          Banner Image
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: "68px" }}
                        >
                          Banner URL
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: "68px" }}
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row" className=" ">
                        <td>Predict the match winnwr?</td>
                        <td>home page banner</td>
                        <td>Image</td>
                        <td>Banner url</td>
                        <td>Active</td>
                      </tr>
                      <tr role="row" className=" ">
                        <td>Predict the match winnwr?</td>
                        <td>home page banner</td>
                        <td>Image</td>
                        <td>Banner url</td>
                        <td>Active</td>
                      </tr>
                      <tr role="row" className=" ">
                        <td>Predict the match winnwr?</td>
                        <td>home page banner</td>
                        <td>Image</td>
                        <td>Banner url</td>
                        <td>Active</td>
                      </tr>
                      <tr role="row" className=" ">
                        <td>Predict the match winnwr?</td>
                        <td>home page banner</td>
                        <td>Image</td>
                        <td>Banner url</td>
                        <td>Active</td>
                      </tr>
                      <tr role="row" className=" ">
                        <td>Predict the match winnwr?</td>
                        <td>home page banner</td>
                        <td>Image</td>
                        <td>Banner url</td>
                        <td>Active</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default ActiveBannerImageTable;
