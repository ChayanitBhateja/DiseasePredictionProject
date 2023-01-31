import React, { useState, useRef, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Card } from "react-bootstrap";

const UpcomingMatches = () => {
  // Active data

  // use effect

  return (
    <Fragment>
      <Card>
        <Card.Header>
          <Card.Title>Upcoming Matches</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-12">
              <h1></h1>
              <div className="table-responsive">
                <div id="order_lis" className="dataTables_wrapper no-footer">
                  <table
                    id="example5"
                    className="display mb-4 dataTable no-footer w-100 "
                    style={{ minWidth: 845 }}
                    role="grid"
                    aria-describedby="example5_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting_asc"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          aria-sort="ascending"
                          aria-label="Order ID: activate to sort column descending"
                          style={{ width: "71.3333px" }}
                        >
                          Tournament Name
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Date: activate to sort column ascending"
                          style={{ width: "74.6667px" }}
                        >
                          Match Name
                        </th>

                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: "98.6667px" }}
                        >
                          Teams
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: 68 }}
                        >
                          Starting
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: "89.3333px" }}
                        >
                          Tournament Category
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: "89.3333px" }}
                        >
                          Match Category
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: "89.3333px" }}
                        >
                          Action
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: "89.3333px" }}
                        >
                          Remove
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row">
                        <td>Tournament name</td>

                        <td>Insia vs England</td>
                        <td>Team 1 Team 2</td>
                        <td>10/02/2022 10:00:00</td>
                        <td>
                          <select name="emailstatus" className="form-control">
                            <option value="selectall">Select All</option>
                            <option value="india">India</option>
                            <option value="bet">option 2</option>
                          </select>
                        </td>
                        <td>
                          <select name="emailstatus" className="form-control">
                            <option value="selectall">T20</option>
                            <option value="india">Test</option>
                            <option value="bet">One Day</option>
                          </select>
                        </td>
                        <td>
                          <span className="btn btn-sm light btn-warning">
                            Add
                          </span>
                        </td>
                        <td>
                          <span className="btn btn-sm light btn-warning">
                            Remove
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="d-sm-flex text-center justify-content-between">
                    <div className="dataTables_info">Showing of 5 entries</div>
                    <div
                      className="dataTables_paginate paging_simple_numbers"
                      id="example5_paginate"
                    >
                      <Link
                        className="paginate_button previous disabled"
                        to="/order-list"
                      >
                        Previous
                      </Link>
                      <span>
                        <Link
                          to="/order-list"
                          className="paginate_button"
                        ></Link>
                      </span>
                      <Link className="paginate_button next" to="/order-list">
                        Next
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default UpcomingMatches;
